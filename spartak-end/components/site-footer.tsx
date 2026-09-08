import Link from 'next/link'
import { Reveal } from '@/components/reveal'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center sm:flex-row sm:justify-between sm:text-left sm:px-6">
        <Reveal className="flex items-center gap-0.5">
          <img
            src="/spartak-logo.png"
            alt="Логотип Спартак — спартанский воин"
            className="h-14 w-14 object-contain"
          />
          <span className="font-display text-lg font-bold uppercase tracking-widest text-milk">
            Спартак
          </span>
        </Reveal>
        <Reveal delay={60} className="text-sm text-muted-foreground">
          Прием металлолома · ул. Промышленная, 35 · 8:00–18:00 без перерывов и выходных
        </Reveal>
        <Reveal
          delay={120}
          className="font-display text-xs uppercase tracking-widest text-muted-foreground"
        >
          © {new Date().getFullYear()} ООО «Спартак». Все права защищены.
        </Reveal>
      </div>

      <Reveal
        delay={160}
        className="mx-auto mt-6 max-w-6xl px-4 text-center sm:px-6 sm:text-left"
      >
        <Link
          href="/privacy"
          className="text-xs text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-gold"
        >
          Политика конфиденциальности
        </Link>
      </Reveal>
    </footer>
  )
}
