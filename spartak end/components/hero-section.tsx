import { Phone, Clock } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* industrial backdrop */}
      <div className="absolute inset-0">
        <img
          src="/steel-scrap-texture.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-50 transition-opacity duration-300"
        />
        {/* Затемнение слева направо: под текстом темнее, справа картинка видна полностью */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        {/* Плавный уход в темноту к низу секции для мягкого перехода к следующему блоку */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <Reveal className="mb-6 inline-flex items-center gap-2 border border-gold/40 bg-graphite/60 px-3 py-1.5">
            <span className="clip-shield h-2.5 w-2.5 bg-gold" aria-hidden="true" />
            <span className="font-display text-xs font-medium uppercase tracking-[0.25em] text-gold">
              Скупка металлолома
            </span>
          </Reveal>

          <Reveal
            delay={60}
            as="div"
            className="font-display text-7xl font-bold uppercase leading-[0.9] tracking-tight text-milk text-balance sm:text-8xl lg:text-9xl"
          >
            <h1 className="inline">Спартак</h1>
          </Reveal>

          <Reveal
            delay={110}
            className="mt-5 font-display text-2xl font-medium uppercase tracking-wide text-milk/90 sm:text-3xl"
          >
            Пункт приема металлолома
          </Reveal>

          <Reveal delay={160} className="mt-6 inline-flex items-center gap-3 border-l-2 border-gold pl-4">
            <Clock className="h-5 w-5 text-gold" aria-hidden="true" />
            <span className="font-display text-lg font-semibold uppercase tracking-wider text-gold text-glow-gold">
              8:00 – 18:00, без выходных
            </span>
          </Reveal>

          <Reveal delay={210} className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
            Принимаем лом черных и цветных металлов по высоким ценам.
            Автовесы, моментальных расчет и вывоз лома собственным
            транспортом. Демонтаж сложных объектов.
          </Reveal>

          <Reveal delay={260} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="tel:+79278240424"
              className="group flex items-center gap-3 bg-primary px-7 py-4 font-display text-lg font-bold uppercase tracking-wider text-primary-foreground glow-crimson transition-transform hover:scale-[1.03]"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Позвонить сейчас
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
