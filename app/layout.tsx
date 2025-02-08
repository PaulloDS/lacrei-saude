import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import StyledComponentsRegistry from '@/lib/registry'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lacrei Saúde',
  description: 'Conectando profissionais de saúde a pessoas LGBTQIAPN+',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={nunito.className}>
        <StyledComponentsRegistry>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}