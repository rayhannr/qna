import { defaultLang, type UI, type ui } from '@/i18n/ui'
import { useTranslations, type TranslationKey } from '@/i18n/utils'
import {
  Activity,
  Baby,
  BriefcaseBusiness,
  Film,
  HandHelping,
  Heart,
  House,
  MessagesSquare,
  Snowflake,
  Users,
  Wallet
} from 'lucide-react'
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
    },
    {
      title: t('nav.communication'),
      id: 'communication',
      icon: MessagesSquare,
      qna: getQnA('communication', lang)
    },
    {
      title: t('nav.love'),
      id: 'love',
      icon: Heart,
      qna: getQnA('love', lang)
    },
    {
      title: t('nav.household'),
      id: 'household',
      icon: House,
      qna: getQnA('household', lang)
    },
    {
      title: t('nav.family'),
      id: 'family',
      icon: Users,
      qna: getQnA('family', lang)
    },
    {
      title: t('nav.children'),
      id: 'children',
      icon: Baby,
      qna: getQnA('children', lang)
    },
    {
      title: t('nav.finance'),
      id: 'finance',
      icon: Wallet,
      qna: getQnA('finance', lang)
    },
    {
      title: t('nav.health'),
      id: 'health',
      icon: Activity,
      qna: getQnA('health', lang)
    }
  ]
}

export const getSidebarMap = (lang: string) => {
  const sidebarItems = getSidebarItems(lang)
  return new Map(Object.entries(sidebarItems).map(([_, value]) => [value.id, value]))
}
