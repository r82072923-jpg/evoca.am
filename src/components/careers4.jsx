import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from "firebase/firestore";

function Careers4() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    facebook: '',
    linkedin: '',
    coverLetter: '',
    captchaInput: ''
  });

  const [captchaText, setCaptchaText] = useState("X7XHBW");
  const [loading, setLoading] = useState(false);

  const generateRandomCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(result);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const db = getFirestore();
      await addDoc(collection(db, "careers_applications"), {
        ...formData,
        createdAt: new Date()
      });
      alert("Դիմումը հաջողությամբ ուղարկվեց ։)");
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        facebook: '',
        linkedin: '',
        coverLetter: '',
        captchaInput: ''
      });
      generateRandomCaptcha();
    } catch (error) {
      console.error("Սխալ:", error);
      alert("Տեղի ունեցավ սխալ:");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-white flex flex-col justify-center items-center py-16 px-4 font-sans">
      <div className="max-w-[700px] w-full bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
        <h2 className="text-2xl md:text-3xl font-black text-[#6200EA] mb-3 text-center">
          Դառնալ թիմի անդամ
        </h2>
        <p className="text-gray-600 text-center text-sm mb-8">
          Եթե ցանկանում եք միանալ EvocaTEAM-ին, կարող եք ուղարկել դիմում:
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-[#1A1A24] mb-1">Անուն *</label>
            <input 
              type="text" 
              name="firstName" 
              value={formData.firstName} 
              onChange={handleChange} 
              required 
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#6200EA]"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-[#1A1A24] mb-1">Ազգանուն *</label>
            <input 
              type="text" 
              name="lastName" 
              value={formData.lastName} 
              onChange={handleChange} 
              required 
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#6200EA]"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-[#1A1A24] mb-1">Հեռախոսահամար *</label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">🇦🇲 +374</span>
              <input 
                type="tel" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                required 
                className="w-full border border-gray-300 rounded-r-lg px-4 py-2.5 focus:outline-none focus:border-[#6200EA]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-[#1A1A24] mb-1">Էլ. հասցե</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#6200EA]"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-[#1A1A24] mb-1">Facebook սոց. կայքում անձնական էջի հղում</label>
            <input 
              type="url" 
              name="facebook" 
              value={formData.facebook} 
              onChange={handleChange} 
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#6200EA]"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-[#1A1A24] mb-1">LinkedIn սոց. կայքում անձնական էջի հղում</label>
            <input 
              type="url" 
              name="linkedin" 
              value={formData.linkedin} 
              onChange={handleChange} 
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#6200EA]"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-[#1A1A24] mb-1">Ուղեկցող նամակ</label>
            <textarea 
              name="coverLetter" 
              rows="4" 
              value={formData.coverLetter} 
              onChange={handleChange} 
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#6200EA]"
            ></textarea>
          </div>

          <div className="border border-gray-200 p-4 rounded-xl">
            <label className="block text-sm font-bold text-[#1A1A24] mb-2">Ստուգման ծածկագիր *</label>
            <div className="flex items-center justify-between gap-4 mb-3">
              <div className="bg-gray-100 px-6 py-2 rounded-lg font-mono tracking-widest text-lg font-bold line-through text-gray-600 select-none">
                {captchaText}
              </div>
              <button 
                type="button" 
                onClick={generateRandomCaptcha}
                className="text-gray-600 hover:text-[#6200EA] transition-colors p-2"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.66-5.66"/>
                </svg>
              </button>
            </div>
            <input 
              type="text" 
              name="captchaInput" 
              placeholder="Մուտքագրեք ծածկագիրը" 
              value={formData.captchaInput} 
              onChange={handleChange} 
              required 
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#6200EA]"
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-[#6200EA] text-white font-bold py-3.5 rounded-xl shadow-lg hover:bg-[#5000c2] transition-all disabled:opacity-50"
          >
            {loading ? "Ուղարկվում է..." : "Ես ուզում եմ աշխատել Evoca-ում :)"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Careers4;