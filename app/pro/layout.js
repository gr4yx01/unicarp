'use client'

import Sidebar from "@/components/pro/Sidebar";
import "../globals.css";
import usePage from "@/store/page";
import { useEffect } from "react";
import useProMembers from "@/store/proMember";

export default function RootLayout({ children }) {
    const setCurrentPage = usePage((state) => state.setCurrentPage)
    const setCurrentState = useProMembers((state) => state.setCurrentState)

    useEffect(() => {
        setCurrentPage('groups')
        setCurrentState('member')
    },[])

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
