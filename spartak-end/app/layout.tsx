import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Oswald, Inter } from 'next/font/google'
import './globals.css'

const oswald = Oswald({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald',
})

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
})

const SITE_URL = 'https://metal-dd.ru'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Сдать лом в Димитровграде — приём металлолома «Спартак»',
  description:
    'Пункт приёма металлолома «Спартак» в Димитровграде. Принимаем лом чёрных и цветных металлов по высоким ценам: автовесы, расчёт сразу, вывоз лома и демонтаж. ул. Промышленная, 35. Работаем 8:00–18:00 без выходных.',
  keywords: [
    'сдать лом Димитровград',
    'сдать металл Димитровград',
    'сдать металлолом Димитровград',
    'куда сдать лом Димитровград',
    'где сдать металл Димитровград',
    'приём металлолома Димитровград',
    'приём лома Димитровград',
    'металлолом Димитровград',
    'пункт приёма металлолома Димитровград',
    'скупка металлолома Димитровград',
    'вывоз металлолома Димитровград',
    'приём цветного металла Димитровград',
    'приём чермета Димитровград',
    'приём цветмета Димитровград',
    'цена на лом Димитровград',
    'демонтаж металлоконструкций Димитровград',
    'сдать лом ДД',
    'приём лома ДД',
    'металлолом ДД',
    'сдать лом Ульяновская область',
  ],
  applicationName: 'Спартак',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: SITE_URL,
    siteName: 'Спартак — приём металлолома в Димитровграде',
    title: 'Сдать лом в Димитровграде — приём металлолома «Спартак»',
    description:
      'Принимаем лом чёрных и цветных металлов по высоким ценам. Автовесы, моментальный расчёт, вывоз лома и демонтаж. ул. Промышленная, 35, Димитровград. 8:00–18:00 без выходных.',
    images: [
      {
        url: '/spartak-logo.png',
        width: 1024,
        height: 1024,
        alt: 'Спартак — пункт приёма металлолома в Димитровграде',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'business',
}

export const viewport: Viewport = {
  themeColor: '#16181a',
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  additionalType: 'https://schema.org/RecyclingCenter',
  '@id': `${SITE_URL}/#organization`,
  name: 'Спартак',
  alternateName: [
    'Спартак — пункт приёма металлолома',
    'Приём металлолома Спартак Димитровград',
    'Спартак ДД',
  ],
  description:
    'Пункт приёма металлолома в Димитровграде (ДД). Приём и скупка лома чёрных и цветных металлов — чермет, цветмет, вывоз лома и демонтаж металлоконструкций. Сдать лом и металл в Димитровграде по высоким ценам.',
  knowsLanguage: 'ru',
  url: SITE_URL,
  image: `${SITE_URL}/spartak-logo.png`,
  logo: `${SITE_URL}/spartak-logo.png`,
  telephone: '+79278240424',
  currenciesAccepted: 'RUB',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ул. Промышленная, 35',
    addressLocality: 'Димитровград',
    addressRegion: 'Ульяновская область',
    postalCode: '433504',
    addressCountry: 'RU',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 54.211861,
    longitude: 49.568337,
  },
  areaServed: [
    { '@type': 'City', name: 'Димитровград' },
    { '@type': 'AdministrativeArea', name: 'Ульяновская область' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '08:00',
      closes: '18:00',
    },
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Приём лома чёрных металлов',
        areaServed: 'Димитровград',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Приём лома цветных металлов',
        areaServed: 'Димитровград',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Вывоз металлолома',
        areaServed: 'Димитровград',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Демонтаж металлоконструкций',
        areaServed: 'Димитровград',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${oswald.variable} ${inter.variable} bg-background`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
