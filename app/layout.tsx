import { Metadata } from 'next';
import "@fontsource/inter/400.css"
import "@fontsource/inter/700.css"
import { SITE } from '~/config.js';
import Script from 'next/script'
import Providers from '~/components/atoms/Providers';
import Header from '~/components/widgets/Header';
import Footer2 from '~/components/widgets/Footer2';

import { Inter as CustomFont } from 'next/font/google';
import '~/assets/styles/base.css';
import WhatsAppButton from '~/components/WhatsAppButton';

const customFont = CustomFont({ subsets: ['latin'], variable: '--font-custom' });

export interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: `%s — ${SITE.name}`,
    default: SITE.title,
  },
  description: SITE.description,
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`motion-safe:scroll-smooth 2xl:text-[24px] ${customFont.variable} font-sans`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-H43D9FX1ZK" />
      <Script id="google-analytics">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-H43D9FX1ZK');
        `
        }
      </Script>
      <body className="bg-white tracking-tight text-gray-900 antialiased dark:bg-slate-900 dark:text-slate-300">
        <Providers>
          <Header />
          <main>{children}</main>
          <WhatsAppButton/>
          <Footer2 />

        </Providers>
      </body>
    </html>
  );
}
