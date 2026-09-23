import tailwindcss from 'tailwindcss'
import { Link ,Outlet} from 'react-router-dom'



const Product = () => {
  return (
    <div className='bg-cyan-900 h-200 w-full'>
          <Outlet />

        <div className="bg-yellow-300 h-20 w-full text-black flex flex-row justify-center gap-12
        font-bold text-2xl p-5">

            <Link to="women">Women</Link>
              <Link to="men">Men</Link>
                <Link to="kids">Kids</Link>
        </div>

    </div>
  )
}

export default Product