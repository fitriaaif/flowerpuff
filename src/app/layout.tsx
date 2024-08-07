import './globals.css';
import { ReactNode } from 'react';
import Head from 'next/head';
import Script from 'next/script';

// Define interface for layout props
interface LayoutProps {
  children: ReactNode;
}

// Define layout component
const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <Head>
        <title>Flowerpuf | florist</title>
        <meta name="Custom bucket bunga termurah Jogja" content="custom bucket bunga mulai dari 50ribu" />
        <link rel="icon" href="/favicon.ico" />
        {/* Google Tag Manager script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TWN2GXHC');
            `,
          }}
        />
        {/* End Google Tag Manager */}
      </Head>
      <body>
        {/* Google Analytics gtag.js */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-B20N8LCNY3"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-B20N8LCNY3');
          `}
        </Script>
        {/* End Google Analytics */}
        
        {/* GTM noscript iframe */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TWN2GXHC"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        
        {/* Render children components */}
        {children}
      </body>
    </html>
  );
};

export default Layout;