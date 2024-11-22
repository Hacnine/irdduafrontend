import React from 'react'
import AudioCard from './AudioCard'
import ActionCard from './ActionCard'

const DuaCard = ({ cat, top, duaName, duaArabic, transliteration, translation, refference, audio }) => {
    return (
        <>

            <section className="mb-8 text-green-600">
                <div className=" flex items-center h-[35px] gap-3">
                    <img src="/icon/ayah.png" alt="" />
                    <h2 className="text-base font-semibold mb-2"><span>{cat}.</span> {duaName}</h2>
                </div>
                <p className="text-gray-700 mb-4 text-base ">
                    {top}
                </p>

                <p className="text-[#393939] mb-4 text-base font-semibold">{duaArabic}</p>

                {transliteration ? <p className="text-gray-700 italic mb-4">
                    <strong>Transliteration:</strong> {transliteration}
                </p> : null}
                {translation ? <p className="text-gray-700 italic mb-4">
                    <strong>Translation:</strong> {translation}
                </p> : null}
                <p className="text-green-600">
                    <strong>Reference:</strong> {refference}
                </p>
            </section>

            <div className={` flex ${audio ? ' items-center justify-between' : 'items-center justify-end'}`}>
                {audio ? <AudioCard audio={audio} /> : null}
                <ActionCard />
            </div>
        </>
    )
}

export default DuaCard
