import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-500">
        <NavBar />
        <div className="flex justify-center items-center overflow-hidden scroll-smooth scroll-hidden  ">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
