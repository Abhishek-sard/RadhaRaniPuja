import Sidebar from "./Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100 mt-11">
      <Sidebar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
