import Sidebar from "@/app/components/organisms/Sidebar";
import Header from "@/app/components/organisms/Header";
import Footer from "@/app/components/organisms/Footer";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-y-auto">
          <main className="flex-1 bg-[var(--color-background)] p-[16px] text-[var(--color-primary)]">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
