import React from 'react'
import Navbar from '../component/Navbar'
import CategoryMenu from '../component/CategoryMenu'
import Fooditems from '../component/Fooditems';
import Cart from '../component/Cart';

const Home=()=> {
  return (
   <>
   <Navbar/>
   <CategoryMenu/>
   <Fooditems/>
   <Cart/>
   
   </>
  );
};

export default Home
