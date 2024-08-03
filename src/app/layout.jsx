import { Roboto } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import CallToActionButtons from "../app/CallToActionButtons"; // Adjust the path as necessary

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Gulf Appliances Repairs",
  description:
    "Gulf Appliances Repairs is your one-stop destination for all your home repair and renovation needs in the United Arab Emirates.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Include gtag.js script */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-11323917006" />

        {/* Include gtag.js initialization script */}
        <Script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-11323917006');
        ` }} />
        <Script id="clickmagick-cmc-script" strategy="beforeInteractive">
          {`
            window.clickmagick_cmc = {
              uid: '197930',
              hid: '1550199704',
              cmc_project: 'We Will Fix Home UAE',
              vid_info: 'on',
            }
          `}
        </Script>

        <Script dangerouslySetInnerHTML={{ __html: `
          function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
              'send_to': 'AW-11323917006/W6xMCKnXhsQZEM6F1Zcq',
              'event_callback': callback
            });
            return false;
          }
        ` }} />

        {/* Other head elements... */}
        {/* Google Tag Manager - Global base code */}
        <Script dangerouslySetInnerHTML={{ __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-THZLDJ4V');
        ` }} />
        
      </head>
      <body className={roboto.className}>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-THZLDJ4V" height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
     
        </noscript>
        {children}
        <CallToActionButtons />
      </body>
    </html>
  );
}
