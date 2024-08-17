import { useEffect, useState } from "react";
import HeroSection from "./components/Home/HeroSection";
import NoticeBoard from "./components/Home/NoticeBoard";
import Other from "./components/Home/Other";
import Services from "./components/Home/Services";
import logo from '@/assets/logo.png';
import GoToTopButton from "./components/Home/GoToTop";
import Footer from "./components/Home/Footer";
import Popup from "./components/Home/Popup";



const App = () => {
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(false);
    }, 200);
  }, []);

  if (isLoaded) {
    return <div>
      <img src={logo} alt="" className="animate-pulse lg:mt-[20%] mt-[60%]   lg:ml-[46%] ml-[40%]" />
    </div>;
  }


  return (
    <>
      <HeroSection />
      <NoticeBoard />
      <Services />
      <Other />
      <GoToTopButton/>
      <Popup/>
      <Footer/>
    </>

  );
};

export default App;
