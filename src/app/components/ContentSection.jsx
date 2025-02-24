import React from 'react';

import DuaCard from './DuaCard';
const ContentSection = ({ duas = [], filteredSubCategories = [] }) => {
    // console.log(duas)
    // console.log(filteredSubCategories)
    return (
        <>
            

            {filteredSubCategories.map((category, index) => (
                <>
                    <section className="my-4 bg-white rounded-lg p-3 " key={index}>
                        <h3 className="text-base text-gray-600 font-semibold "> <span className="text-green-600">Section:</span> {category.subcat_name_en}</h3>
                    </section>

                    <div className=' space-y-4'>
                        {duas.filter((dua)=> dua.subcat_id === category.subcat_id ).map((dua, index) => (
                            <div className="p-4 bg-white rounded-lg" key={index}>
                                <DuaCard
                                    cat={dua.id}
                                    top={dua.top_en}
                                    duaName={dua.dua_name_en}
                                    duaArabic={dua.dua_indopak} transliteration={dua.transliteration_en} translation={dua.translation_en} refference={dua.refference_en}
                                    audio={dua.audio ? dua.audio : undefined} />
                            </div>
                        ))}
                    </div>
                </>

            ))}
        </>
    );
};

export default ContentSection;
