import { defaultLang, type UI, type ui } from '@/i18n/ui'
import { useTranslations, type TranslationKey } from '@/i18n/utils'
import { BriefcaseBusiness, Film, HandHelping, Snowflake } from 'lucide-react'
import en from '@/i18n/en.json'

const enKeys = Object.keys(en)
enKeys.filter((key) => key.startsWith('ice.breakers'))

const getQnA = (id: string, lang: string) => {
  const t = useTranslations(lang as UI)

  const length = Math.floor(enKeys.filter((key) => key.startsWith(id)).length / 2)
  return Array.from({ length }, (_, index) => index + 1).map((idx) => ({
    question: t(`${id}.${idx}.question` as TranslationKey),
    answer: (
      <>
        {t(`${id}.${idx}.answer` as TranslationKey)
          .split('\n')
          .map((text: string) => (
            <p key={text}>{text}</p>
          ))}
      </>
    )
  }))
}

export const getSidebarItems = (lang: string) => {
  const t = useTranslations(lang as UI)

  return [
    {
      title: t('nav.ice.breakers'),
      id: 'ice-breakers',
      icon: Snowflake,
      qna: getQnA('ice.breakers', lang)
    },
    {
      title: t('nav.entertainment'),
      id: 'entertainment',
      icon: Film,
      qna: getQnA('entertainment', lang)
    },
    {
      title: t('nav.work.life'),
      id: 'work',
      icon: BriefcaseBusiness,
      qna: getQnA('work.life', lang)
    },
    {
      title: t('nav.religion'),
      id: 'religion',
      icon: HandHelping,
      qna: getQnA('religion', lang)
    }
  ]
}

export const getSidebarMap = (lang: string) => {
  const sidebarItems = getSidebarItems(lang)
  return new Map(Object.entries(sidebarItems).map(([_, value]) => [value.id, value]))
}
