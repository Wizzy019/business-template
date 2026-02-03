

import Navbar from "../components/Layouts/Navbar"
import HeroImage from '../assets/images/headset.png'
import Hero from "../components/Common/Hero"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import ProductHero from "../components/Common/ProductHero";

  const HomeIcons = ({icon}) => (
    <div className="bg-white size-10 rounded-full flex items-center justify-center cursor-pointer">
    <a href="#"><FontAwesomeIcon icon={icon} className="text-black text-sm"/></a>
  </div>
);

function Home() {
  return (
    <div className='min-h-screen bg-linear-to-b from-blue-300 to-white'>
        <Navbar
        brandName="Phone Accessories"
        links={[
              { name: "Home", path: "/" },
              { name: "Products", path: "/products" },
              { name: "Booking", path: "/booking" },
              { name: "About", path: "/about" },
            ]}
        />
        <ProductHero />
        {/* <div className="overflow-hidden p-2 border-b border-black/50">
        <Hero />
       </div>
       <div className="mt-5 relative h-50">
       <div className="h-96 md:h-auto flex flex-col md:flex-row items-center justify-between p-4 md:items-start md:justify-evenly">
          <div className="size-30 rounded bg-white hidden md:block">

          </div>
          <div className="h-10 w-30 rounded-2xl bg-white">

          </div>
          <div className="flex items-center gap-3 p-2">
            <HomeIcons icon={faGlobe} />
            <HomeIcons icon={faFacebook} />
            <HomeIcons icon={faXTwitter} />
            <HomeIcons icon={faInstagram} />
          </div>
       </div>
       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img src={HeroImage} alt="Hero" className="w-lg md:h-100 mt-4"/>
       </div>
       </div> */}
    </div>
  )
}

export default Home
