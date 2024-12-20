import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Members from './components/members/Members';
import Gallery from './components/Gallery';
import Media from './components/Media';
import Events from './components/events/Events';
import Contact from './components/Contact';
import Footer from './components/footer/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Members />
      <Gallery />
      <Media />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
}