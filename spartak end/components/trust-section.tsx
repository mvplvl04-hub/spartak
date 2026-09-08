import { FileCheck, ShieldCheck, Handshake, Users, CalendarCheck } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const ITEMS = [
  {
    icon: FileCheck,
    title: 'Работаем официально',
    text: 'На каждую сдачу металла выдаем документы и квитанции.',
  },
  {
    icon: ShieldCheck,
    title: 'Есть лицензия',
    text: 'Лицензия на заготовку, хранение и переработку лома черных и цветных металлов.',
  },
  {
    icon: Handshake,
    title: 'Особые условия',
    text: 'Разрабатываем особые условия для оптовых клиентов и предприятий: индивидуальные цены, регулярный вывоз по графику и работа по договору.',
  },
  {
    icon: Users,
    title: 'Постоянные клиенты',
    text: 'С нами на регулярной основе работают предприятия и оптовые поставщики лома.',
  },
]

export function TrustSection() {
  return (
    <section id="trust" className="border-y border-border bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mb-12">
          <p className="font-display text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Надежность
          </p>
          <h2 className="mt-2 font-display text-4xl font-bold uppercase tracking-tight text-milk sm:text-5xl">
            Почему нам доверяют
          </h2>
        </Reveal>

        <Reveal
          delay={50}
          className="mb-10 flex flex-wrap items-center gap-4 border border-gold/40 bg-graphite/60 px-6 py-5"
        >
          <span aria-hidden="true" className="clip-shield h-12 w-12 shrink-0 bg-gold p-[3px]">
            <span className="clip-shield flex h-full w-full items-center justify-center bg-graphite-light">
              <CalendarCheck className="h-6 w-6 text-gold" aria-hidden="true" />
            </span>
          </span>
          <p className="font-display text-lg font-semibold uppercase tracking-wide text-milk sm:text-xl">
            Многолетний опыт на рынке приема металлолома — ответственный контрагент
            с историей и репутацией.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ icon: Icon, title, text }, index) => (
            <Reveal
              key={title}
              delay={index * 80}
              className="group relative border border-border bg-card p-8 transition-colors hover:border-gold/50"
            >
              <div aria-hidden="true" className="clip-shield h-16 w-16 bg-gold p-[3px]">
                <div className="clip-shield flex h-full w-full items-center justify-center bg-graphite-light">
                  <Icon className="h-7 w-7 text-gold" />
                </div>
              </div>
              <h3 className="mt-6 font-display text-xl font-bold uppercase tracking-wide text-milk">
                {title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
