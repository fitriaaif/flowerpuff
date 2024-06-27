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
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
      />

      <Script id="ga-script" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
              `}
      </Script>
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
