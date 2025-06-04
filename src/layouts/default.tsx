import { Navbar } from "@/components/navbar";
import LazyComponent from "@/components/lazy-component";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <LazyComponent component="particles" />
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <p className="text-default-500 text-sm">
          © {new Date().getFullYear()} Gregoire Caseaux. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
