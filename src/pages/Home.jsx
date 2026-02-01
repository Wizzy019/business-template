

import Navbar from "../components/Layouts/Navbar"
import HeroImage from '../assets/images/background.png'

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
    </div>
  )
}

export default Home
