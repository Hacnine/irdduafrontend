export interface DuaCategory {
  id: string
  name: string
  slug: string
  subcategories?: DuaSubcategory[]
}

export interface DuaSubcategory {
  id: string
  name: string
  slug: string
}

export interface Dua {
  id: string
  title: string
  arabicText: string
  transliteration: string
  translation: string
  reference: string
  categoryName: string
  sectionTitle: string
}
