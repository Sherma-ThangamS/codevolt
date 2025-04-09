import './App.css';
import Footer from './component/Footer';
import Hero from './component/Hero';
import Navbar from './component/Navbar';
import Service from './component/Service';
import Testimonials from './component/Testimonials';
import Working from './component/Working';

function App() {
  return (
    <div className="px-[4vw] overflow-hidden pt-[4vh] max-sm:p-[2vh]">
      <Navbar/>
      <Hero/>
      <Service/>
      <Working/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
