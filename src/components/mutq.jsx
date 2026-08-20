    import React from 'react';
    import { auth, googleProvider } from './firebaseConfog';
    import { signInWithPopup } from 'firebase/auth';
    import { useNavigate } from 'react-router-dom';

    export default function Mutq() {
      const navigate = useNavigate();

      const handleGoogle = async () => {
        try {
          await signInWithPopup(auth, googleProvider);
          navigate('/');
        } catch (error) {
          console.error(error.message);
        }
      };

      return (
<div className="flex items-center justify-center min-h-screen bg-gray-50">
  <div className="flex flex-col items-center justify-center w-full max-w-sm p-10 bg-white shadow-xl rounded-2xl">
    
    <h2 className="mb-8 text-2xl font-bold text-gray-800">
      Բարի գալուստ
    </h2>

    <button 
      onClick={handleGoogle}
      className="flex items-center justify-center w-full gap-3 px-6 py-3 text-sm font-medium text-gray-700 transition-all duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      Մուտք գործել Google-ով
    </button>
    
  </div>
</div>
      );
    }