import type { Metadata } from 'next'
import { Poppins, Roboto } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Les Gardiens de la Vitalité par PHYCOMANIA',
  description: 'Découvrez sur Phycomania.com, boutique officielle, le monde de la phycocyanine avec les produits Chloro B 5K, 10 K et Rhin blue : la meilleure phycocyanine au monde !',
  keywords: 'phycocyanine, chloro b, spiruline, santé, vitalité',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${poppins.variable} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  )
}
