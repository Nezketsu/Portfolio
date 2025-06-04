import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";
import LoadingScreen from "@/components/loading-screen";
import ScrollToTop from "@/components/scroll-to-top";
import CommandPalette from "@/components/command-palette";
import { ToastProvider } from "@/components/toast";
import ParticlesBackground from "@/components/particles-background";

function App() {
  return (
    <ToastProvider>
      <LoadingScreen />
      <ParticlesBackground />
      <Routes>
        <Route element={<IndexPage />} path="/" />
        <Route element={<AboutPage />} path="/about" />
        <Route element={<ContactPage />} path="/contact" />
      </Routes>
      <ScrollToTop />
      <CommandPalette />
    </ToastProvider>
  );
}

export default App;
