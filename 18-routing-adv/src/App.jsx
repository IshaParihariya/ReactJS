
import tailwindcss from 'tailwindcss'
import {Route,Routes,useNavigate} from "react-router-dom";

import Home from "./pages/Home";
import About  from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import { Link } from 'react-router-dom';

import Women from "./pages/Women";
import Men from "./pages/Men";
import Kids from "./pages/Kids";
import Nf404 from "./pages/Nf404";
import ContactDetails from "./pages/ContactDetails"

/*
nested routes and dynamic ones as well
also going back and next buttons 
using navigate()
*/

const App = () => 
{

    const navigate1=useNavigate();

  return (
    <div className='flex flex-col justify-between'>

      <div className='flex flex-row justify-between bg-black text-white p-5'>

      <h2 className='text-2xl font-bold'>This is Navbar</h2>

      <div className='flex flex-row gap-3.5'>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/product">Product</Link>
      </div>

      </div>

{/* buttons with navigate() */}
      <div className='bg-red-950 h-15 w-full flex flex-row'>
        <button className='bg-amber-300 text-2xl h-8 w-28 active:scale-95 rounded-2xl m-3 ' onClick={
            ()=>
            {
                navigate1(-1)
            }
        }>
        Back
        </button>
        <button className='bg-amber-300 text-2xl h-8 w-28 rounded-2xl m-3 active:scale-95' onClick={
            ()=>
            {
                navigate1(+1)
            }
        }>
        Next
        </button>
      </div>
        <Routes>
            <Route path="/" element={<Home/>}/>

            <Route path="/about" element={<About/>}/>

            <Route path="/contact" element={<Contact/>}>

            {/* dynamic one with parent child thing 
             contact/xyz anything will go to this one..
            */}
            <Route path=':id' element={<ContactDetails/>}/>

            </Route>

            <Route path="/product" element={<Product/>}>
            <Route path="men" element={<Men/>}/>
            <Route path="women" element={<Women/>}/>
            <Route path="kids" element={<Kids/>}/>
            </Route>

             {/* other than fixed ones  */}
            <Route path="*" element={<Nf404/>}/>




        </Routes>
        <h2 className='text-2xl font-bold bg-black text-white p-5'>This is Footer</h2>
    </div>
  )
}

export default App