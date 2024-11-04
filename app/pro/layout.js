'use client'

import Sidebar from "@/components/pro/Sidebar";
import "../globals.css";

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
