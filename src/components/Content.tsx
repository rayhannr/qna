import type { ReactNode } from 'react'
import { AppSidebar } from './AppSidebar'
import { SidebarProvider, SidebarTrigger } from './ui/sidebar'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { languages } from '@/i18n/ui'

export const Content = ({ children, lang }: { children: ReactNode; lang: string }) => (
  <SidebarProvider>
    <AppSidebar lang={lang} />
    <main className="w-full">
      <div className="flex justify-between items-center flex-wrap p-2">
        <SidebarTrigger />
        <Select
          value={lang}
          onValueChange={(value) => {
            location.href = `${location.origin}/${value === 'en' ? '' : value}`
          }}
        >
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Select Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">{languages.en}</SelectItem>
            <SelectItem value="id">{languages.id}</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {children}
    </main>
  </SidebarProvider>
)
