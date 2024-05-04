import { Roboto } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { phoneNumber } from "@/libs/phoneNumber";
import Script from "next/script";


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
</head>
     
      <body className={roboto.className}>
        {children}
        <div className="fixed bottom-4 right-3 z-50 flex flex-col gap-y-2 justify-center items-center md:right-4">
          <Link
            href={`tel:${phoneNumber}`}
            target="_blank"
            className="p-2 bg-black/40 rounded-full"
          >
            <Image src={"/phone.svg"} width={50} height={50} />
          </Link>
          <Link
            href={`https://wa.me/${phoneNumber}?text=Hello%20I%20need%20your%20help%20with%20my%20appliance%20repairs`}
            target="_blank"
            className="bg-green-300 rounded-full p-2"
          >
            <Image src={"/whatsapp.svg"} width={50} height={50} />
          </Link>
        </div>
      </body>
    </html>
  );
}
