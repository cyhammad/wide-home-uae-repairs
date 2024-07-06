"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { phoneNumber } from "@/libs/phoneNumber";
import { useRouter } from "next/navigation";

export default function CallToActionButtons() {
  const router = useRouter();

  const handleCallClick = (event) => {
    event.preventDefault();
    gtag_report_conversion(`tel:${phoneNumber}`);
    router.push(`tel:${phoneNumber}`);
  };

  const handleWhatsAppClick = (event) => {
    event.preventDefault();
    gtag_report_conversion(`https://wa.me/${phoneNumber}?text=Hello%20I%20need%20your%20help%20with%20my%20appliance%20repairs`);
    router.push(`https://wa.me/${phoneNumber}?text=Hello%20I%20need%20your%20help%20with%20my%20appliance%20repairs`);
  };

  return (
    <div className="fixed bottom-4 right-3 z-50 flex flex-col gap-y-2 justify-center items-center md:right-4">
      <Link
        href={`tel:${phoneNumber}`}
        target="_blank"
        className="p-2 bg-black/40 rounded-full"
        onClick={handleCallClick}
      >
        <Image src={"/phone.svg"} width={50} height={50} alt="Phone" />
      </Link>
      <Link
        href={`https://wa.me/${phoneNumber}?text=Hello%20I%20need%20your%20help%20with%20my%20appliance%20repairs`}
        target="_blank"
        className="bg-green-300 rounded-full p-2"
        onClick={handleWhatsAppClick}
      >
        <Image src={"/whatsapp.svg"} width={50} height={50} alt="WhatsApp" />
      </Link>
    </div>
  );
}
