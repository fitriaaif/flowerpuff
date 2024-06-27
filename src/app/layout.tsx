// Import library and styles
import './globals.css';
import { ReactNode } from 'react';
import Head from 'next/head';

// Define interface for layout props
interface LayoutProps {
  children: ReactNode;
}

// Define layout component
const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <Head>
        <title>My Page Title</title>
        <meta name="description" content="My page description" />
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
        {/* Google Analytics gtag.js */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-B20N8LCNY3"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-B20N8LCNY3');
            `,
          }}
        />
        {/* End Google Analytics */}
      </Head>
      <body>
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
