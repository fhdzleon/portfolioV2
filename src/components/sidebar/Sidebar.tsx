"use client";

import React from "react";
import Image from "next/image";
import { useGlobalStore } from "@/store/globalStore";

const Sidebar = () => {
  const { theme } = useGlobalStore();

  return (
    <div
      className={`w-[350px] p-5 rounded-xl  flex flex-col ${
        theme === "light" ? "bg-bgLight text-black" : "bg-bgDark text-white"
      }`}
    >
      <div>
        <p>Felipe</p>
        <p>Hernández</p>
      </div>

      <div className="bg-bgPicture rounded-xl flex justify-center w-3/4">
        <Image src="/perfil.png" alt="Logo" width={150} height={150} />
      </div>

      <div>
        <p>Fullstack developer</p>
        <p>Especializado</p>
        <p>en frontend</p>
      </div>

      <div>
        <p>Ciudad de México</p>
      </div>

      <div className="flex">
        <Image src="github.svg" alt="gitHub" width={35} height={35} />
        <Image src="linkedin.svg" alt="gitHub" width={35} height={35} />
        <Image src="instagram.svg" alt="gitHub" width={35} height={35} />
      </div>

      <div>
        <button>Contactame</button>
      </div>
    </div>
  );
};

export default Sidebar;
