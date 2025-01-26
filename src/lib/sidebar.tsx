import { type ui } from '@/i18n/ui'
import { useTranslations } from '@/i18n/utils'
import { Snowflake } from 'lucide-react'
import en from '@/i18n/en.json'

const enKeys = Object.keys(en)
enKeys.filter((key) => key.startsWith('ice.breakers'))

const getQnALength = (id: string) => {
  const filteredKeys = enKeys.filter((key) => key.startsWith(id))
}

export const getSidebarItems = (lang: string) => {
  const t = useTranslations(lang as keyof typeof ui)

  return [
    {
      title: t('nav.ice.breakers'),
      id: 'ice-breakers',
      icon: Snowflake,
      qna: [
        {
          question: t('ice.breakers.1.question'),
          answer: t('ice.breakers.1.answer')
        },
        {
          question: t('ice.breakers.2.question'),
          answer: t('ice.breakers.2.answer')
        },
        {
          question: t('ice.breakers.3.question'),
          answer: t('ice.breakers.3.answer')
        }
      ]
    }
  ]
}

export const getSidebarMap = (lang: string) => {
  const sidebarItems = getSidebarItems(lang)
  return new Map(Object.entries(sidebarItems).map(([_, value]) => [value.id, value]))
}
