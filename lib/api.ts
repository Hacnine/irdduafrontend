import type { DuaCategory, Dua } from "@/types"

// Mock data - replace with actual API calls
export async function getDuaCategories(): Promise<DuaCategory[]> {
  return [
    {
      id: "dua-importance",
      name: "Dua's Importance",
      slug: "dua-importance",
      subcategories: [
        {
          id: "servant-dependent",
          name: "The servant is dependent on his Lord",
          slug: "servant-dependent",
        },
        {
          id: "most-important",
          name: "The most important thing to ask Allah for",
          slug: "most-important",
        },
        {
          id: "allah-guidance-1",
          name: "Allah's guidance #1",
          slug: "allah-guidance-1",
        },
        {
          id: "allah-guidance-2",
          name: "Allah's guidance #2",
          slug: "allah-guidance-2",
        },
        {
          id: "allah-guidance-3",
          name: "Allah's guidance #3",
          slug: "allah-guidance-3",
        },
        {
          id: "allah-guidance-4",
          name: "Allah's guidance #4",
          slug: "allah-guidance-4",
        },
        {
          id: "servant-dependent-2",
          name: "The servant is dependent on his Lord #1",
          slug: "servant-dependent-2",
        },
        {
          id: "paradise-protection",
          name: "Ask for paradise & protection from fire",
          slug: "paradise-protection",
        },
      ],
    },
  ]
}

export async function getDuasByCategory(categorySlug: string): Promise<Dua[]> {
  // Mock data - replace with actual API calls
  return [
    {
      id: "1",
      title: "The servant is dependent on his Lord #1",
      arabicText: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
      transliteration: "Iyyaaka na'budu wa iyyaaka nasta'een",
      translation:
        "All human beings depend on Allah for their welfare and prevention of evil in various matters of their religion and world. Allah says (interpretation of the meaning): O mankind, you are those in need of Allah, while Allah is the Free of need, the Praiseworthy.",
      reference: "Surah Al-Fatir 35:15",
      categoryName: "Dua's Importance",
      sectionTitle: "The servant is dependent on his Lord",
    },
    {
      id: "2",
      title: "The servant is dependent on his Lord #1",
      arabicText:
        "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ",
      transliteration:
        "Laa ilaaha illallaahu wahdahu laa shareeka lahu, lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli shay'in qadeer. Allaahumma laa maani'a limaa a'tayta wa laa mu'tiya limaa mana'ta wa laa yanfa'u dhal-jaddi minkal-jadd",
      translation:
        "There is none worthy of worship except Allah alone with no partner or associate. He is the Dominion and to Him be all praise, and He is able to do all things. O Allah, one can withhold what You have given and none can give what You have withheld, and no wealth or fortune can benefit anyone for from You comes all wealth and fortune.",
      reference: "Surah Al-Fatir 35:15",
      categoryName: "Dua's Importance",
      sectionTitle: "The servant is dependent on his Lord",
    },
    {
      id: "3",
      title: "The servant is dependent on his Lord #1",
      arabicText: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
      transliteration:
        "Laa ilaaha illallaahu wahdahu laa shareeka lahu, lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli shay'in qadeer",
      translation:
        "None has the right to be worshipped but Allah alone, Who has no partner. His is the dominion and His is the praise, and He is Able to do all things.",
      reference: "Surah Al-Fatir 35:15",
      categoryName: "Dua's Importance",
      sectionTitle: "The servant is dependent on his Lord",
    },
  ]
}

export async function getAllCategorySlugs(): Promise<string[]> {
  const categories = await getDuaCategories()
  const slugs: string[] = []

  categories.forEach((category) => {
    if (category.subcategories) {
      category.subcategories.forEach((sub) => {
        slugs.push(sub.slug)
      })
    }
  })

  return slugs
}
