import Sidebar from "../../components/Sidebar";
import "../globals.css";

export default function RootLayout({ children }) {
  return (
      <div
        className={`flex`}
      >
        <Sidebar />
        <div className="flex-1 p-7">
          {children}
        </div>
      </div>
  );
}
