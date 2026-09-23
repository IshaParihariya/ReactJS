
import tailwindcss from 'tailwindcss';
import { Link ,Outlet} from 'react-router-dom'

const Kids = () => {
  return (
    <div className='bg-amber-600 h-200 w-full'>

         <Outlet />

        <div className="bg-yellow-300 h-20 w-full text-black flex flex-row justify-center gap-12
        font-bold text-2xl p-5">

            <Link to="/product/women">Women</Link>
<Link to="/product/men">Men</Link>
<Link to="/product/kids">Kids</Link>
        </div>
      <h1 className='text-black text-6xl font-bold mx-110 my-50'>This is Kids page</h1>
    </div>
  )
}

export default Kids