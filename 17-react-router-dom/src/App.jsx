
import tailwindcss from 'tailwindcss'
import {Route,Routes} from "react-router-dom";

import Home from "./pages/Home";
import About  from "./pages/About";
import Contact from "./pages/Contact";
import { Link } from 'react-router-dom';
/*

the page will reload each time 
so instead we will use Link

<a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
      */



const App = () => {
  return (
    <div className='flex flex-col justify-between'>
      <div className='flex flex-row justify-between bg-black text-white p-5'>
      <h2 className='text-2xl font-bold'>This is Navbar</h2>
      <div className='flex flex-row gap-3.5'>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      </div>
      </div>
        <Routes>
            <Route path="/" element={<Home/>}/>

            <Route path="/about" element={<About/>}/>

            <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <h2 className='text-2xl font-bold bg-black text-white p-5'>This is Footer</h2>
    </div>
  )
}

export default App