import { Roboto } from "next/font/google";
import "./globals.css";
import Image from "next/image";

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

        <div className="fixed bottom-4 right-4 z-50 flex flex-col">
          <button className=" mr-2 rounded-full py-5 text-white">
            <Image
              src={"/phone.svg"}
              width={45}
              height={20}
              className="mx-auto flex"
            />
          </button>
          <button className=" rounded-full px-4 py-2 text-white">
            <Image
              src={"/whatsapp.svg"}
              width={50}
              height={20}
              className="mx-auto flex"
            />
          </button>
        </div>
      </body>
    </html>
  );
}
