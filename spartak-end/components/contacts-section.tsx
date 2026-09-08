'use client'

import { useState } from 'react'
import { MapPin, Phone, Clock, X, Link, Navigation } from 'lucide-react'
import { Reveal } from '@/components/reveal'

// Ваша точная ссылка на Яндекс.Карты
const MAP_URL = "https://yandex.ru/maps/11155/dimitrovgrad/house/promyshlennaya_ulitsa_35/YEAYcwFoSkYAQFtufX5wcHRlZQ==/?ll=49.568213%2C54.211841&z=19.18"
// Ссылка для автоматического построения маршрута
const ROUTE_URL = "https://yandex.ru/maps/11155/dimitrovgrad/?ll=49.568213%2C54.211841&mode=routes&rtext=~54.211727%2C49.568267&rtt=auto&ruri=~&z=19"

export function ContactsSection() {
  // Состояние для открытия и закрытия модального окна навигации
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="contacts" className="pt-20 pb-14 sm:pt-28 sm:pb-20 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mb-12">
          <p className="font-display text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Где мы
          </p>
          <h2 className="mt-2 font-display text-4xl font-bold uppercase tracking-tight text-milk sm:text-5xl">
            Контакты
          </h2>
        </Reveal>

        <div className="flex flex-col gap-6">
          {/* Карта теперь является прямой ссылкой и сразу открывает Яндекс.Карты */}
          <Reveal as="div">
            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              title="Открыть на Яндекс Картах"
              className="relative block overflow-hidden border border-border group cursor-pointer"
            >
              <img
                src="/spartak-map.png"
                alt="Схема проезда к пункту приема металлолома СПАРТАК"
                className="aspect-[844/594] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/10 transition-colors group-hover:bg-background/0" />
            </a>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {/* Блок адреса открывает модальное окно навигации при клике */}
            <Reveal
              delay={40}
              onClick={() => setIsModalOpen(true)}
              title="Показать варианты навигации"
              className="border border-border bg-card p-5 transition-colors hover:border-primary cursor-pointer"
            >
              <MapPin className="h-5 w-5 text-gold" aria-hidden="true" />
              <p className="mt-3 font-display text-xs uppercase tracking-widest text-muted-foreground">
                Адрес
              </p>
              <p className="mt-1 font-display text-lg font-semibold text-milk">
                ул. Промышленная, 35
              </p>
            </Reveal>

            <Reveal delay={80} className="border border-border bg-card p-5">
              <Clock className="h-5 w-5 text-gold" aria-hidden="true" />
              <p className="mt-3 font-display text-xs uppercase tracking-widest text-muted-foreground">
                Режим работы
              </p>
              <p className="mt-1 font-display text-lg font-semibold text-milk">
                8:00 – 18:00, ежедневно
              </p>
            </Reveal>

            <Reveal delay={120} className="border border-border bg-card transition-colors hover:border-primary">
              <a href="tel:+79278240424" className="block p-5">
                <Phone className="h-5 w-5 text-gold" aria-hidden="true" />
                <p className="mt-3 font-display text-xs uppercase tracking-widest text-muted-foreground">
                  Телефон
                </p>
                <p className="mt-1 font-display text-2xl font-bold text-milk">
                  +7 (927) 824-04-24
                </p>
              </a>
            </Reveal>
          </div>
        </div>
      </div>

      {/* КАРТОЧКА НАВИГАЦИИ (МОДАЛЬНОЕ ОКНО) */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-md border border-border bg-card p-6 shadow-2xl space-y-5 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Кнопка закрытия */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 text-muted-foreground hover:text-milk transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div>
              <h3 className="font-display text-xl font-bold uppercase tracking-wide text-milk">
                Навигация
              </h3>
              
              <div className="mt-4 space-y-3">
                {/* Ссылка на Яндекс Карты */}
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Link className="h-4 w-4 shrink-0 text-primary" />
                  <a 
                    href={MAP_URL} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:underline break-all"
                  >
                    {MAP_URL.substring(0, 40)}...
                  </a>
                </div>

                {/* Построить маршрут */}
                <div className="flex items-center gap-3 text-sm">
                  <Navigation className="h-4 w-4 shrink-0 text-primary" />
                  <a 
                    href={ROUTE_URL} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-milk hover:text-primary transition-colors font-medium"
                  >
                    Построить маршрут
                  </a>
                </div>

                {/* Координаты */}
                <div className="flex items-center gap-3 text-sm text-muted-foreground pl-7">
                  <span>54.211861, 49.568337</span>
                </div>
              </div>
            </div>

            <hr className="border-border" />

            <div>
              <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Адрес
              </h4>
              <p className="mt-1 font-display text-base font-bold text-milk">
                ул. Промышленная, 35
              </p>
              <p className="text-xs text-muted-foreground">
                г. Димитровград, Ульяновская область, 433504
              </p>
            </div>
                   </div>
        </div>
      )}
    </section>
  )
}
