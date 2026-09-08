import { Scale, Banknote, Truck, MapPin } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const ITEMS = [
  {
    icon: Scale,
    title: 'Электронные весы',
    text: 'Поверенное оборудование с точностью до грамма. Взвешивание при вас — честно и прозрачно.',
  },
  {
    icon: Banknote,
    title: 'Моментальный расчет',
    text: 'Оплата сразу после взвешивания. Без задержек и удержаний.',
  },
  {
    icon: Truck,
    title: 'Вывоз лома',
    text: 'Собственный транспорт и грузчики. Демонтаж и вывоз металла с вашего объекта.',
  },
  {
    icon: MapPin,
    title: 'Удобное расположение',
    text: 'Наш пункт приема расположен в транспортной доступности. Удобные подъездные пути для легкового и большегрузного транспорта.',
  },
]

export function AdvantagesSection() {
  return (
    <section id="advantages" className="border-y border-border bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mb-12">
          <p className="font-display text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Почему мы
          </p>
          <h2 className="mt-2 font-display text-4xl font-bold uppercase tracking-tight text-milk sm:text-5xl">
            Преимущества
          </h2>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
              <h3 className="mt-6 font-display text-2xl font-bold uppercase tracking-wide text-milk">
                {title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{text}</p>
              <span
                aria-hidden="true"
                className="absolute right-6 top-6 font-display text-4xl font-bold text-graphite-light"
              >
                {`0${index + 1}`}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
