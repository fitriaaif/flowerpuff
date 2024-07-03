// src/app/layout.tsx
import { ReactNode } from 'react';
import Head from 'next/head';
import Script from 'next/script';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Head>
      <title>Flowerpuff</title>
      <meta name="description" content="Bucket custom jogja" />
      <link rel="icon" href="/favicon.ico" />
      
      {/* Google Tag Manager */}
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
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TWN2GXHC"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>

      {/* Google Analytics */}
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

      {/* Render children components */}
      {children}
    </body>
  </>
);

export default Layout;
<<<<<<< HEAD



// import './globals.css';
// import { ReactNode } from 'react';
// import Head from 'next/head';
// import Script from 'next/script';

// // Define interface for layout props
// interface LayoutProps {
//   children: ReactNode;
// }

// // Define layout component
// const Layout = ({ children }: LayoutProps) => {
//   return (
//     <html lang="en">
//       <Head>
//         <title>Flowerpuff</title>
//         <meta name="description" content="Flowerpuff | Bucket Bunga Jogja - Menyediakan bucket bunga wisuda, bucket bunga custom, dan bucket bunga murah di Jogja." />
//         <meta name="keywords" content="bucket bunga, bucket bunga jogja, bucket bunga wisuda, bucket bunga custom, bucket bunga murah, flowerpuff" />
//         <meta property="og:title" content="Flowerpuff | Bucket Bunga Jogja" />
//         <meta property="og:description" content="Menyediakan bucket bunga wisuda, bucket bunga custom, dan bucket bunga murah di Jogja." />
//         <meta property="og:image" content="/path-to-your-image.jpg" />
//         <meta property="og:url" content="https://www.your-website.com" />
//         <meta name="twitter:card" content="summary_large_image" />
//         <link rel="icon" href="/favicon.ico" />
//         <Script
//           id="gtm-script"
//           strategy="afterInteractive"
//           dangerouslySetInnerHTML={{
//             __html: `
//               (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//               new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//               j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//               'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//               })(window,document,'script','dataLayer','GTM-TWN2GXHC');
//             `,
//           }}
//         />
//       </Head>
//       <body>
//         <Script
//           strategy="afterInteractive"
//           src="https://www.googletagmanager.com/gtag/js?id=G-B20N8LCNY3"
//         />
//         <Script id="ga-script" strategy="afterInteractive">
//           {`
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());

//             gtag('config', 'G-B20N8LCNY3');
//           `}
//         </Script>
//         <noscript>
//           <iframe
//             src="https://www.googletagmanager.com/ns.html?id=GTM-TWN2GXHC"
//             height="0"
//             width="0"
//             style={{ display: 'none', visibility: 'hidden' }}
//           ></iframe>
//         </noscript>
//         {children}
//       </body>
//     </html>
//   );
// };

// export default Layout;

=======
>>>>>>> 936adb149eaebd108cd5fffed1a6baaf5a05c2e4
