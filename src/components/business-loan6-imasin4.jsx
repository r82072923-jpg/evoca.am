function BusinessLoan6iMasin4({activeTab,setActiveTab}){
  const tabs = [
    'Վարկի մասին',
    'Պայմաններ և սակագներ',
    'ՓՄՁ վարկի օնլայն հայտ',
    'Պահանջվող փաստաթղթեր',
  ];
    return(
        <>
        <div className="border-b border-gray-200 mb-12 overflow-x-auto">
          <nav className="flex space-x-10 min-w-max">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 px-1 text-base sm:text-lg font-bold transition-colors relative ${
                  activeTab === tab
                    ? 'text-[#6b11cb]'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-[4px] bg-[#6b11cb] rounded-t-md" />
                )}
              </button>
            ))}
          </nav>
        </div>
        </>
    )
}
export default BusinessLoan6iMasin4