import { getSidebarMap } from '@/lib/sidebar'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'

export const AccordionQnA = ({ lang }: { lang: string }) => {
  const { pathname } = window.location
  const sidebarMap = getSidebarMap(lang)

  return (
    <Accordion type="single" collapsible defaultValue="0" className="lg:w-[700px]">
      {sidebarMap.get(pathname.replace(/\/+$/, '').split('/').at(-1) || '')?.qna.map((item, index) => (
        <AccordionItem value={String(index)} key={item.question}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent className="space-y-3 text-muted-foreground">{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
