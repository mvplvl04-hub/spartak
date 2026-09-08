"use client"

import { useState } from 'react'
import { Phone, Menu, X } from 'lucide-react'

const NAV = [
  { label: 'Преимущества', href: '/#advantages' },
  { label: 'Надежность', href: '/#trust' },
  { label: 'Контакты', href: '/#contacts' },
]

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 relative">
        
        {/* Логотип */}
        <a
          href="/#top"
          className="group flex items-center gap-0.5 transition-transform duration-300 hover:scale-[1.04]"
        >
          <img
            src="/spartak-logo.png"
            alt="Логотип Спартак — спартанский воин"
            className="h-14 w-14 object-contain drop-shadow-[0_0_14px_oklch(0.52_0.2_22_/_0.45)] transition-transform duration-300 group-hover:scale-110"
          />
          <span className="font-display text-xl font-bold uppercase tracking-widest text-milk">
            Спартак
          </span>
        </a>

        {/* Навигация для ПК (на телефонах hidden) */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              className="font-display text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Правая часть: Телефон + Бургер-кнопка */}
        <div className="flex items-center gap-3">
          <a 
            href="tel:+79278240424"
            className="flex items-center gap-2 bg-primary px-4 py-2 font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Позвонить</span>
          </a>

          {/* КНОПКА МЕНЮ ДЛЯ МОБИЛОК (Показывается только на экранах меньше md) */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-9 w-9 items-center justify-center text-milk hover:text-primary transition-colors md:hidden focus:outline-none cursor-pointer"
            aria-label="Открыть меню"
          >
            {isOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* ВЫПАДАЮЩАЯ ШТОРКА МЕНЮ ДЛЯ ТЕЛЕФОНОВ */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-[#090a0d] border border-[#16221f] rounded-2xl p-5 flex flex-col gap-4 shadow-[0_15px_30px_rgba(0,0,0,0.8)] md:hidden z-50 animate-in fade-in slide-in-from-top-4 duration-200">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="font-display text-sm font-semibold tracking-wider text-milk/80 hover:text-gold border-b border-[#16221f]/40 pb-2.5 transition-colors uppercase"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}

      </div>
    </header>
  )
}
