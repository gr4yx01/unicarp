'use client'

import usePage from "@/store/page";
import Sidebar from "../../components/user/Sidebar";
import "../globals.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootLayout({ children }) {

  return (
      <div
        className={`flex`}
      >
          <Sidebar />
          <div className="flex-1 p-8">
          {children}
        </div>
      </div>
  );
}
