import type { ReactNode } from 'react'
import { AppSidebar } from './AppSidebar'
import { SidebarProvider, SidebarTrigger } from './ui/sidebar'

export const Content = ({ children, lang }: { children: ReactNode; lang: string }) => (
  <SidebarProvider>
    <AppSidebar lang={lang} />
    <main>
      <SidebarTrigger />
      {children}
    </main>
  </SidebarProvider>
)
