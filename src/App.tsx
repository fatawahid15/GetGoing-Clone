import Header from './components/Header';
import Hero from './components/Hero';
import PopularGuides from './components/PopularGuides';
import Quote from './components/Quote';
import PrivateTrip from './components/PrivateTrip';
import PopularCities from './components/PopularCities';
import Testimonials from './components/Testimonials';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <PopularGuides />
        <Quote />
        <PrivateTrip />
        <PopularCities />
        <Testimonials />
        <BlogSection />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}

export default App;
