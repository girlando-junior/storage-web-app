import Sidebar from '@/app/components/organisms/Sidebar';
import Header from '@/app/components/organisms/Header';
import Footer from '@/app/components/organisms/Footer';

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="bg-[var(--color-background)] p-4 overflow-y-auto">{children}</main>
        <Footer />
      </div>
    </div>
  )
}