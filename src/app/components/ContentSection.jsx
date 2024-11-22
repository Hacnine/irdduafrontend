import React from 'react';

const ContentSection = () => {
    return (
        <div className="p-4 bg-white shadow-lg rounded-lg">
            <header className="mb-4">
                <h1 className="text-xl font-bold text-green-600">1. The servant is dependent on his Lord #1</h1>
            </header>

            <section className="mb-8">
                <p className="text-gray-700 mb-4">
                    All human beings depend on Allah for their welfare and prevention of evil in various matters of their religion and world. Allah says (interpretation of the meaning): O mankind, you are those in need of Allah, while Allah is the Free of need, the Praiseworthy.
                </p>
                <p className="text-green-600">
                    <strong>Reference:</strong> Surah Al-Fatir 35:15
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Conditions for Dua to be successful</h2>
                <p className="text-gray-700 mb-4">
                    Prophet (ﷺ) used to say after every compulsory prayer, The servant will ask his Lord for all of his religiously and worldly needs, because the treasure of all things is in the hands of Allah. Allah says (interpretation of the meaning): “And there is not a thing but that with Us are its depositories, and We do not send it down except according to a known measure.” (Sura Al-Hijr 15:21) No one can withhold what Allah gives; And, no one can give what he resists.
                </p>
                <p className="text-gray-700 italic mb-4">
                    <strong>Transliteration:</strong> Laa ilaaha illallahu wahdahu laa sharika lahu, lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli shay'in qadir. Allaahumma laa maani'a limaa a'taita wa laa mu'tia limaa mana'ta wa laa yanfa'u dhal-jaddi minka al-jaddu
                </p>
                <p className="text-gray-700 italic mb-4">
                    <strong>Translation:</strong> There is none worthy of worship except Allah alone with no partner or associate. He is the Dominion and to Him be all praise, and He is able to do all things. O Allah, one can withhold what You have given and none can give what You have withheld, and no wealth or fortune can benefit anyone for from You comes all wealth and fortune.
                </p>
                <p className="text-green-600">
                    <strong>Reference:</strong> Bukhari: 844
                </p>
            </section>

            <div className="flex space-x-4 justify-center mt-4">
                <button className="text-gray-500 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H8m0 0l-4 4m4-4l-4-4m12 4h-8m4-4l4-4m-4 4l4 4" />
                    </svg>
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7v14" />
                    </svg>
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 7v10m-5-5h10" />
                    </svg>
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12h4.5v-1.5H15V8l-4 4 4 4v-3.5z" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ContentSection;
