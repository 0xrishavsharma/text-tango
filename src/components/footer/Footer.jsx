import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex">
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="w-max rounded-full border-[2px] border-gray-200">
            <Image
              className="rounded-full"
              src={"/logo.png"}
              alt=""
              width={40}
              height={40}
            />
          </div>
          <h1 className="text-2xl font-bold">Rishav Sharma</h1>
        </div>
        <span className="text-sm leading-[1.1] text-[var(--softTextColor)]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          at quidem recusandae consequuntur iure. In soluta reprehenderit facere
          illo rem suscipit cum numquam, tempore doloremque similique eius ut
          exercitationem unde.
        </span>
        <div className="flex gap-3">
          <Image
            src="/facebook.png"
            alt="twitter logo"
            width={18}
            height={18}
          />
          <Image
            src="/instagram.png"
            alt="instagram logo"
            width={18}
            height={18}
          />
          <Image src="/tiktok.png" alt="linkedin logo" width={18} height={18} />
          <Image src="/youtube.png" alt="youtube logo" width={18} height={18} />
        </div>
      </div>
      <div className="flex-1">
        <div>
          <ul>
            <Link href={"/"}>Home</Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
