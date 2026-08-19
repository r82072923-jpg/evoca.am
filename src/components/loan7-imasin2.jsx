const tabs = [
    'Վարկի մասին',
    'Պայմաններ',
];

function Loan7iMasin2({activeTab, setActiveTab}) {
    return(
        <>
            <div className="border-b border-gray-200 mb-12 pb-4 overflow-x-auto">
                <nav className="flex space-x-10 min-w-max">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-2 px-1 text-base sm:text-lg font-bold transition-colors relative ${
                                activeTab === tab
                                    ? 'text-[#6b11cb]'
                                    : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            {tab}
                            {activeTab === tab && (
                                <span className="absolute bottom-[-18px] left-0 w-full h-[4px] bg-[#6b11cb] rounded-t-md" />
                            )}
                        </button>
                    ))}
                </nav>
            </div>

            <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                Աշխատավարձդ ստանում ես <span className="text-[#6b11cb]">Evocabank</span>-ի քարտո՞վ։ Օգտվիր քեզ հասանելի վարկային առաջարկից և ստացիր ֆինանսավորում Բանկի կողմից քո ծրագրերն ավելի հեշտ ու արագ իրականացնելու համար։
            </p>
        </>
    )
}

export default Loan7iMasin2;