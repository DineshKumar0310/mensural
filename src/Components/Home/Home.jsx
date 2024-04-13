import React from 'react'
import NavBar from '../Navbar/NavBar'
import SectionLinks from '../Clanderdiv/Clander'
import Footer from '../Footer/Footer'
import Greeting from '../Footer/Greetings'

import ShoppingPage from '../HistoryPage/Shopping'





const Home = () => {
  return (
    <div> 
 <NavBar/>
 <Greeting/>
 <SectionLinks/>
 <ShoppingPage/>




 <Footer/>

    </div>
  )
}

export default Home