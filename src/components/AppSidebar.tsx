import { ShieldQuestion } from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail
} from '@/components/ui/sidebar'
import { getSidebarItems } from '@/lib/sidebar'
import { useTranslations } from '@/i18n/utils'
import type { ui } from '@/i18n/ui'
import { getRelativeLocaleUrl } from 'astro:i18n'

export function AppSidebar({ lang }: { lang: string }) {
  const { pathname } = window.location
  const sidebarItems = getSidebarItems(lang)
  const t = useTranslations(lang as keyof typeof ui)

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="text-balance">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="h-11">
              <span className="hover:bg-inherit">
                <ShieldQuestion /> {sidebarItems.reduce((acc, curr) => acc + curr.qna.length, 0)} {t('nav.title')}
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{t('nav.category')}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => {
                const url = getRelativeLocaleUrl(lang, item.id)
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={pathname.includes(item.id)}>
                      <a href={url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                    <SidebarMenuBadge>{item.qna.length}</SidebarMenuBadge>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
