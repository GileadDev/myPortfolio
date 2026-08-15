import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useLanguage } from './i18n/LanguageProvider';

export default function App() {
  const { t } = useLanguage();

  return (
    <>
      {/* Первое, что получает фокус по Tab, — ссылка «сразу к содержимому» */}
      <a
        href="#about"
        className="bg-brand-600 sr-only rounded-lg px-4 py-2 text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60]"
      >
        {t('nav.about')}
      </a>

      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
