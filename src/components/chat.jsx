import { useState, useEffect, useMemo, useRef } from "react";
import { auth } from './firebaseConfog';
import { io } from "socket.io-client";
import { Peer } from "peerjs";

function Chat() {
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState("");
    const [usersList, setUsersList] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [callStatus, setCallStatus] = useState(null);
    const [peerId, setPeerId] = useState("");
    const [isCallActive, setIsCallActive] = useState(false);
        
    const [isRecording, setIsRecording] = useState(false);
    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);

    const socket = useMemo(() => io("https://evoca-am-two.vercel.app"), []);
    const peerInstance = useRef(null);
    const localVideoRef = useRef(null);
    const remoteVideoRef = useRef(null);
    const localStream = useRef(null);
    const startMedia = async (type) => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: type === 'video',
                audio: true,
            });
            localStream.current = stream;
            if (localVideoRef.current && type === 'video') {
                localVideoRef.current.srcObject = stream;
            }
            return stream;
        } catch (err) {
            console.error("Տեսախցիկի կամ միկրոֆոնի միացման սխալ:", err);
            alert("Չհաջողվեց միացնել տեսախցիկը/միկրոֆոնը");
            return null;
        }
    };

    const PeerCall = (targetPeerId) => {
        if (!peerInstance.current || !localStream.current) return;
            
        const call = peerInstance.current.call(targetPeerId, localStream.current);
        call.on("stream", (remoteStream) => {
            if (remoteVideoRef.current) {
                remoteVideoRef.current.srcObject = remoteStream;
            }
        });
    };

    useEffect(() => {
        const peer = new Peer();
        peerInstance.current = peer;
            
        peer.on("open", (id) => setPeerId(id));
        peer.on("call", (call) => {
            if (localStream.current) {
                call.answer(localStream.current);
                call.on("stream", (remoteStream) => {
                    if (remoteVideoRef.current) {
                        remoteVideoRef.current.srcObject = remoteStream;
                    }
                });
            }
        });

        return () => {
            peer.destroy();
            if (localStream.current) {
                localStream.current.getTracks().forEach(track => track.stop());
            }
        };
    }, []);

    useEffect(() => {
        fetch("https://evoca-am-two.vercel.app/messages")
            .then((res) => res.json())
            .then((data) => setMessages(data))
            .catch((err) => console.error(err));
    }, []);

useEffect(() => {
        if (!socket.connected) {
            socket.connect(); 
        }

        const registerOnServer = (user) => {
            if (user) {
                const myName = user.displayName || user.email;
                if (myName) {
                    console.log("🚀 Օգտատերը գրանցվեց սերվերում:", myName);
                    socket.emit("register", myName);
                }
            }
        };

        socket.on("connect", () => {
            console.log("🟢 Socket-ը հաջողությամբ միացավ սերվերին! ID:", socket.id);
            if (auth.currentUser) {
                registerOnServer(auth.currentUser);
            }
        });

        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                registerOnServer(user);
            } else {
                console.log("🔴 Ուշադրություն: Firebase-ում մուտք գործած օգտատեր չկա:");
            }
        });

        return () => {
            unsubscribe();
            socket.off("connect");
        };
    }, [socket]);

    useEffect(() => {
        socket.on("users-list-updated", (activeUsers) => {
            const me = auth.currentUser?.displayName || auth.currentUser?.email;
            const others = activeUsers.filter(u => u !== me);
            setUsersList(others.map((name, index) => ({ id: index, name })));
        });

        socket.on("receive-message", (newMessage) => {
            setMessages((prev) => {
                if (prev.find(m => m.id === newMessage.id)) return prev;
                    
                const me = auth.currentUser?.displayName || auth.currentUser?.email;
                if (newMessage.sender !== me) {
                    const notificationSound = new Audio("/chat_notification_like.mp3"); 
                    notificationSound.play().catch(error => {
                        console.log("Ձայնը չմիացավ բրաուզերի սահմանափակումների պատճառով:", error);
                    });
                }

                return [...prev, newMessage];
            });
        });
        socket.on("incoming-call", async (data) => {
            const acceptCall = window.confirm(
                `${data.sender}-ը ցանկանում է սկսել ${data.type === 'video' ? 'Վիդեո' : 'Աուդիո'} զանգ: Ընդունե՞լ:`
            );

            if (acceptCall) {
                setCallStatus(`Զրույց ${data.sender}-ի հետ...`);
                const stream = await startMedia(data.type);
                if (stream) {
                    PeerCall(data.senderPeerId);
                }
            } else {
                setCallStatus("Զանգը մերժվեց");
                setTimeout(() => setCallStatus(null), 3000);
            }
        });

        return () => {
            socket.off("users-list-updated");
            socket.off("receive-message");
            socket.off("incoming-call");
        };
    }, [socket]);

    useEffect(() => {
        return () => {
            socket.disconnect();
        };
    }, [socket]);

    const initiateCall = async (type) => {
        if (!selectedUser) return alert("Ընտրեք օգտատեր");
        const me = auth.currentUser?.displayName || auth.currentUser?.email || "Անանուն";
        
        setCallStatus(`${type === 'audio' ? 'Աուդիո' : 'Վիդեո'} զանգ դեպի ${selectedUser}...`);
        const stream = await startMedia(type);
        if (!stream) {
            setCallStatus("Զանգը ձախողվեց (տեսախցիկի խնդիր)");
            return;
        }

        socket.emit("call-user", { 
            targetUser: selectedUser, 
            type, 
            sender: me, 
            senderPeerId: peerId 
        });
    };

    const startRecording = async () => {
        if (!selectedUser) return alert("Ընտրեք օգտատեր, ում ցանկանում եք ուղարկել");
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorderRef.current = mediaRecorder;
            audioChunksRef.current = [];

            mediaRecorder.ondataavailable = (event) => {
                if (event.data && event.data.size > 0) {
                    audioChunksRef.current.push(event.data);
                }
            };

            mediaRecorder.start(200);
            setIsRecording(true);
        } catch (err) {
            console.error("Միկրոֆոնի հասանելիության սխալ:", err);
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();

            mediaRecorderRef.current.onstop = () => {
                const actualMimeType = mediaRecorderRef.current.mimeType || "audio/webm";
                const audioBlob = new Blob(audioChunksRef.current, { type: actualMimeType });
                
                const reader = new FileReader();
                reader.readAsDataURL(audioBlob);
                
                reader.onloadend = async () => {
                    const base64Audio = reader.result;
                    await sendMessage(null, base64Audio);
                };

                if (mediaRecorderRef.current.stream) {
                    mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
                }

                setIsRecording(false);
                audioChunksRef.current = [];
            };
        }
    };

    const sendMessage = async (e = null, audioData = null) => {
        if (!text.trim() && !audioData) return;
        
        const newMessage = { 
            text: text.trim() ? text : null, 
            audio: audioData, 
            date: new Date().toLocaleTimeString(), 
            sender: auth.currentUser?.displayName || auth.currentUser?.email || "Անանուն",
            receiver: selectedUser 
        };

        try {
            const res = await fetch("https://evoca-am-two.vercel.app/messages", { 
                method: "POST", 
                headers: { "Content-Type": "application/json" }, 
                body: JSON.stringify(newMessage) 
            });

            if (res.ok) {
                const data = await res.json(); 
                setMessages((prev) => {
                    if (prev.find(m => m.id === data.id)) return prev;
                    return [...prev, data];
                });
                setText("");
            }
        } catch (err) {
            console.error("Սխալ հաղորդագրությունն ուղարկելիս:", err);
        }
    };

    return (
        <div className="w-[400px] h-[500px] flex flex-col border border-gray-300 rounded-2xl overflow-hidden bg-white shadow-xl">
            <div className="p-4 bg-gray-100 border-b flex justify-between items-center">
                <h1 className="font-bold">Chat {selectedUser ? `- ${selectedUser}` : ""}</h1>
                <div className="flex gap-2">
                    <button onClick={() => initiateCall('audio')} className="bg-green-500 text-white px-3 py-1 rounded text-sm">📞</button>
                    <button onClick={() => initiateCall('video')} className="bg-blue-500 text-white px-3 py-1 rounded text-sm">📹</button>
                </div>
            </div>
            <div className="flex justify-center gap-2 p-2 bg-black">
                <video ref={localVideoRef} autoPlay muted className="w-[200px] h-[120px] bg-gray-800 rounded" />
                <video ref={remoteVideoRef} autoPlay className="w-[200px] h-[120px] bg-gray-800 rounded" />
            </div>

            <div className="flex flex-1 overflow-hidden">
                <div className="w-[120px] border-r p-2 overflow-y-auto">
                    {usersList.map((u, i) => (
                        <div key={i} className={`p-2 cursor-pointer hover:bg-gray-100 rounded ${selectedUser === u.name ? "bg-gray-200" : ""}`} onClick={() => setSelectedUser(u.name)}>
                            {u.name}
                        </div>
                    ))}
                </div>
                
                <div className="flex-1 flex flex-col">
                    <div className="flex-1 overflow-y-auto p-4">
                        {messages
                            .filter((m) => {
                                if (!selectedUser) return true;
                                const me = auth.currentUser?.displayName || auth.currentUser?.email;
                                return (
                                    (m.sender === me && m.receiver === selectedUser) ||
                                    (m.sender === selectedUser && m.receiver === me)
                                );
                            })
                            .map((m, index) => (
                                <div key={m.id || index} className="mb-4">
                                    <p className="mb-1">
                                        <strong>{m.sender}:</strong> 
                                        <small className="ml-2 text-gray-400">{m.date}</small>
                                    </p>
                                    
                                    {m.text && <p>{m.text}</p>}
                                    
                                    {m.audio && (
                                        <audio controls src={m.audio} className="h-10 mt-1 max-w-full">
                                            Ձեր բրաուզերը չի ապահովում աուդիո ֆորմատը:
                                        </audio>
                                    )}
                                </div>
                            ))}
                    </div>
                    
                    <div className="p-2 border-t flex items-center gap-2">
                        <input 
                            className="flex-1 border p-2 rounded focus:outline-none" 
                            value={text} 
                            placeholder="Գրել նամակ..."
                            onChange={(e) => setText(e.target.value)} 
                            onKeyDown={(e) => e.key === 'Enter' && sendMessage()} 
                        />
                        <button onClick={() => sendMessage()} className="bg-indigo-500 text-white px-4 py-2 rounded">
                            ➤
                        </button>
                        
                        <button 
                            onMouseDown={startRecording}
                            onMouseUp={stopRecording}
                            onTouchStart={startRecording}
                            onTouchEnd={stopRecording}
                            className={`px-3 py-2 rounded text-white transition-all ${isRecording ? 'bg-red-500 animate-pulse scale-110' : 'bg-gray-500'}`}
                            title="Սեղմած պահեք ձայնագրելու համար"
                        >
                            🎤
                        </button>
                    </div>
                </div>
            </div>
            
            {callStatus && (
                <div className="bg-yellow-100 p-2 text-center text-sm font-medium border-t">
                    {callStatus}
                </div>
            )}
        </div>
    );
}

export default Chat;