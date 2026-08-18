import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, query, orderBy } from "firebase/firestore"; 
import { db } from './firebaseConfog';

const formTexts = {
  title: "Ապառիկ համագործակցության դիմում / հայտ",
  appType: {
    label: "Ապառիկի հայտի տեսակ",
    online: "Օնլայն ապառիկ",
    onSite: "Ապառիկ տեղում"
  },
  companyName: "Ընկերության անվանում",
  brandName: "Վաճառակետի / Ֆիրմային անվանումը",
  contactPerson: "Ընկերության կոնտակտային անձի Անուն, Ազգանուն",
  phoneNumber: "Հեռախոսահամար",
  email: "Էլ. փոստ",
  website: "Կայքի հասցե",
  businessField: "Ընկերության գործունեության ոլորտը (Վաճառվող ապրանքների կամ մատուցվող ծառայությունների տեսակը)",
  marketExperience: "Որքա՞ն ժամանակ է ընկերությունը գործում շուկայում",
  evocabankClient: {
    label: "Ընկերությունը հանդիսանում է Evocabank-ի հաճախորդ",
    yes: "Այո",
    no: "Ոչ"
  },
  annualTurnover: "Ընկերության վերջին 1 տարվա շրջանառությունը հարկային հաշվետվություններով",
  storesCount: "Ընկերության վաճառակետերի քանակը",
  storeAddresses: "Ընկերության վաճառակետերի հասցեները",
  otherBankPartnerships: {
    label: "Կազմակերպությունը ունի՞ ապառիկ համագործակցություն այլ բանկերի հետ",
    yes: "Այո",
    no: "Ոչ"
  },
  disclaimer: "Հարգելի հաճախորդ, Բանկը երաշխավորում է, որ Ձեր կողմից տրամադրված տեղեկությունը համարվում է գաղտնի տեղեկատվություն և օգտագործվելու է միմիայն ապառիկ հայտի վերաբերյալ որոշում կայացնելու նպատակով:",
  photos: {
    label: "Ընկերության վաճառակետի լուսանկարներ (առկայության դեպքում)",
    placeholder: "Կցել ֆայլը / ֆայլերը"
  },
  date: "Ամսաթիվ",
  submitButton: "Ուղարկել"
};

function Loan6iMasin4() {
  const [formData, setFormData] = useState({
    loanTypeOnline: false,
    loanTypeOnSite: false,
    companyName: "",
    brandName: "",
    contactPerson: "",
    phoneNumber: "",
    email: "",
    website: "",
    businessField: "",
    marketExperience: "",
    isEvocabankClient: "",
    annualTurnover: "",
    storesCount: "",
    storeAddresses: "",
    hasOtherBankPartnerships: "",
    applicationDate: "17-Aug-2026"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedLoans, setSubmittedLoans] = useState([]);
  const [isLoadingList, setIsLoadingList] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const fetchLoans = async () => {
    setIsLoadingList(true);
    try {
      const q = query(collection(db, "loans6iMasin3"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const loans = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setSubmittedLoans(loans);
    } catch (error) {
      console.error("Սխալ տվյալների ստացման ժամանակ:", error);
    } finally {
      setIsLoadingList(false);
    }
  };

  useEffect(() => {
    fetchLoans();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "loans6iMasin3"), {
        ...formData,
        createdAt: new Date()
      });
      alert("Հայտը հաջողությամբ ուղարկվեց։");
      
      setFormData({
        loanTypeOnline: false,
        loanTypeOnSite: false,
        companyName: "",
        brandName: "",
        contactPerson: "",
        phoneNumber: "",
        email: "",
        website: "",
        businessField: "",
        marketExperience: "",
        isEvocabankClient: "",
        annualTurnover: "",
        storesCount: "",
        storeAddresses: "",
        hasOtherBankPartnerships: "",
        applicationDate: "17-Aug-2026"
      });

      fetchLoans();
    } catch (error) {
      console.error("Սխալ տվյալների ուղարկման ժամանակ:", error);
      alert("Տեղի ունեցավ սխալ, խնդրում ենք կրկին փորձել:");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-6 flex flex-col items-center">
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 sm:p-8 max-w-5xl w-full mb-10">
        <h1 className="text-[#6B00D7] text-lg sm:text-xl font-bold mb-6">
          {formTexts.title}
        </h1>
        <form className="space-y-5 text-gray-800" onSubmit={handleSubmit}>
          <div>
            <label className="block font-bold text-xs mb-2">
              {formTexts.appType.label} <span className="text-red-500">*</span>
            </label>
            <div className="space-y-1.5 text-xs text-gray-600">
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  name="loanTypeOnline"
                  checked={formData.loanTypeOnline}
                  onChange={handleChange}
                  className="rounded border-gray-300 text-[#6B00D7] focus:ring-[#6B00D7]" 
                />
                <span>{formTexts.appType.online}</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  name="loanTypeOnSite"
                  checked={formData.loanTypeOnSite}
                  onChange={handleChange}
                  className="rounded border-gray-300 text-[#6B00D7] focus:ring-[#6B00D7]" 
                />
                <span>{formTexts.appType.onSite}</span>
              </label>
            </div>
          </div>
          <div>
            <label className="block font-bold text-xs mb-1.5">
              {formTexts.companyName} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 text-xs focus:outline-none focus:border-[#6B00D7]"
            />
          </div>
          <div>
            <label className="block font-bold text-xs mb-1.5">
              {formTexts.brandName} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="brandName"
              value={formData.brandName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 text-xs focus:outline-none focus:border-[#6B00D7]"
            />
          </div>
          <div>
            <label className="block font-bold text-xs mb-1.5">
              {formTexts.contactPerson} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 text-xs focus:outline-none focus:border-[#6B00D7]"
            />
          </div>
          <div>
            <label className="block font-bold text-xs mb-1.5">
              {formTexts.phoneNumber} <span className="text-red-500">*</span>
            </label>
            <div className="flex border border-gray-300 rounded overflow-hidden">
              <div className="bg-gray-100 px-3 py-2 text-xs flex items-center gap-1.5 border-r border-gray-300 text-gray-700 select-none">
                <span>🇦🇲</span>
                <span>+374</span>
              </div>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-3 py-2 text-xs focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block font-bold text-xs mb-1.5">
              {formTexts.email} <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 text-xs focus:outline-none focus:border-[#6B00D7]"
            />
          </div>
          <div>
            <label className="block font-bold text-xs mb-1.5">
              {formTexts.website}
            </label>
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 text-xs focus:outline-none focus:border-[#6B00D7]"
            />
          </div>
          <div>
            <label className="block font-bold text-xs mb-1.5">
              {formTexts.businessField} <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={3}
              name="businessField"
              value={formData.businessField}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 text-xs focus:outline-none focus:border-[#6B00D7] resize-y"
            />
          </div>
          <div>
            <label className="block font-bold text-xs mb-1.5">
              {formTexts.marketExperience} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="marketExperience"
              value={formData.marketExperience}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 text-xs focus:outline-none focus:border-[#6B00D7]"
            />
          </div>
          <div>
            <label className="block font-bold text-xs mb-2">
              {formTexts.evocabankClient.label} <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-6 text-xs text-gray-700">
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="radio" 
                  name="isEvocabankClient" 
                  value="yes"
                  checked={formData.isEvocabankClient === "yes"}
                  onChange={handleChange}
                  className="text-[#6B00D7] focus:ring-[#6B00D7]" 
                />
                <span>{formTexts.evocabankClient.yes}</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="radio" 
                  name="isEvocabankClient" 
                  value="no"
                  checked={formData.isEvocabankClient === "no"}
                  onChange={handleChange}
                  className="text-[#6B00D7] focus:ring-[#6B00D7]" 
                />
                <span>{formTexts.evocabankClient.no}</span>
              </label>
            </div>
          </div>
          <div>
            <label className="block font-bold text-xs mb-1.5">
              {formTexts.annualTurnover} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="annualTurnover"
              value={formData.annualTurnover}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 text-xs focus:outline-none focus:border-[#6B00D7]"
            />
          </div>
          <div>
            <label className="block font-bold text-xs mb-1.5">
              {formTexts.storesCount} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="storesCount"
              value={formData.storesCount}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 text-xs focus:outline-none focus:border-[#6B00D7]"
            />
          </div>
          <div>
            <label className="block font-bold text-xs mb-1.5">
              {formTexts.storeAddresses} <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={3}
              name="storeAddresses"
              value={formData.storeAddresses}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 text-xs focus:outline-none focus:border-[#6B00D7] resize-y"
            />
          </div>
          <div>
            <label className="block font-bold text-xs mb-2">
              {formTexts.otherBankPartnerships.label} <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-6 text-xs text-gray-700">
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="radio" 
                  name="hasOtherBankPartnerships" 
                  value="yes"
                  checked={formData.hasOtherBankPartnerships === "yes"}
                  onChange={handleChange}
                  className="text-[#6B00D7] focus:ring-[#6B00D7]" 
                />
                <span>{formTexts.otherBankPartnerships.yes}</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="radio" 
                  name="hasOtherBankPartnerships" 
                  value="no"
                  checked={formData.hasOtherBankPartnerships === "no"}
                  onChange={handleChange}
                  className="text-[#6B00D7] focus:ring-[#6B00D7]" 
                />
                <span>{formTexts.otherBankPartnerships.no}</span>
              </label>
            </div>
          </div>
          <p className="text-[10px] text-gray-500 leading-relaxed pt-1">
            {formTexts.disclaimer}
          </p>

          <div className="pt-4 flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-[#6B00D7] text-white font-bold py-2.5 px-10 rounded-full text-xs transition-colors shadow-sm 
                ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#5500aa]'}`}
            >
              {isSubmitting ? 'Ուղարկվում է...' : formTexts.submitButton}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Loan6iMasin4;