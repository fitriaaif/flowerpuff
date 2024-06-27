import Image from "next/image";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import PageBreak from "../Components/PageBreak";
import Content from "../Components/Content";
import CardList from "../Components/CardProductList";
import CardReviewList from "../Components/CardReviewList";
import Location from "../Components/Location";
import Footer from "../Components/Footer";
import Script from 'next/script';

export default function Home() {
  return (
    <main>
      <div>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-CQFRF5Y66E`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CQFRF5Y66E', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <Navbar/>
        <Hero/>
        <PageBreak/>
        <Content/>
        <div className="mt-28">
          <CardList/>
        </div>
        <CardReviewList/>
        <Location/>
        <Footer/>
      </div>
    </main>
  );
}
