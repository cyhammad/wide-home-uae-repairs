import { Roboto } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { phoneNumber } from "@/libs/phoneNumber";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Wide Home UAE Repairs",
  description:
    "Wide Home UAE Repairs is your one-stop destination for all your home repair and renovation needs in the United Arab Emirates.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
        <div className="fixed bottom-4 right-0 z-50 flex flex-col gap-y-2 justify-center items-center md:right-4">
          <Link
            href={`tel:${phoneNumber}`}
            target="_blank"
            className="p-2 bg-black/40 rounded-full"
          >
            <Image src={"/phone.svg"} width={50} height={50} />
          </Link>
          <Link
            href={`https://wa.me/${phoneNumber}?text=Hello%20Wide%20Home%20UAE%20Repairs%20I%20need%20your%20help%20with%20my%20appliance%20repair%20service%20in%20Dubai%20and%20Abu%20Dhabi%20UAE`}
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
