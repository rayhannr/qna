import type { ReactNode } from 'react'
import { AppSidebar } from './AppSidebar'
import { SidebarProvider, SidebarTrigger } from './ui/sidebar'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { languages } from '@/i18n/ui'

export const Content = ({ children, lang }: { children: ReactNode; lang: string }) => (
  <SidebarProvider>
    <AppSidebar lang={lang} />
    <main className="w-full">
      <div className="flex justify-between items-center flex-wrap p-2 sticky top-0 max-lg:backdrop-blur-sm z-10">
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
            {Object.entries(languages).map(([key, value]) => (
              <SelectItem value={key} key={key}>
                {value}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {children}
    </main>
  </SidebarProvider>
)
