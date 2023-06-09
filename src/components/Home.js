import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className=' flex flex-col justify-center font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... p-5 mb-5'>
      <p className='text-white text-[23px] ml-[25px] '>THE</p>
        <h2 className='
        text-[yellow] 
        text-[45px] mt-[-33px]'>Optimistic</h2>
        <p className='text-white mt-[-40px] ml-[3px] text-[50px] '>Award</p>
      </div>


      <div className='px-5'>
        <h3 className='text-[25px] text-[#ff8080]'>Female Categories</h3>
        <ul className='m-5'>
          <li className='bg-[#bf80ff] rounded p-3 my-2 w-[220px]'>
            <Link to="/f-beautiful">Most Beautiful lady</Link>
          </li>
          <li className='bg-[#e6f0ff] p-3 my-2 w-[220px]'>
            <Link to="/f-bestdress">Best dressed</Link>
          </li>
          <li className='bg-[#bf80ff] rounded p-3 my-2 w-[220px]'>
            <Link to="/f-expensive">Most expensive</Link>
          </li>
          <li className='bg-[#e6f0ff] p-3 my-2 w-[220px]'>
            <Link to="/f-reserved">Most Reserved</Link>
          </li>
          <li className='bg-[#bf80ff] rounded p-3 my-2 w-[220px]'>
            <Link to="/f-entrepreneur">Entrepreneur of the Year</Link>
          </li>
          <li className='bg-[#e6f0ff] p-3 my-2 w-[220px]'>
            <Link to="/f-politicalicon">Political Icon</Link>
          </li>
          <li className='bg-[#bf80ff] rounded p-3 my-2 w-[220px]'>
            <Link to="/f-punctual">Most Punctual</Link>
          </li>
          <li className='bg-[#e6f0ff] p-3 my-2 w-[220px]'>
            <Link to="/f-popular">Most Popular</Link>
          </li>
          <li className='bg-[#bf80ff] rounded p-3 my-2 w-[220px]'>
            <Link to="/f-classic">Most classic</Link>
          </li>
          <li className='bg-[#e6f0ff] p-3 my-2 w-[220px]'>
            <Link to="/f-bigbold">Big, Bold, and Beautiful</Link>
          </li>
          <li className='bg-[#bf80ff] rounded p-3 my-2 w-[220px]'>
            <Link to="/f-bestbrand">Best Brand of the Year</Link>
          </li>
          <li className='bg-[#e6f0ff] p-3 my-2 w-[220px]'>
            <Link to="/f-bestpersonality">Best Personality</Link>
          </li> 
        </ul>

        <h3 className='text-[25px] text-[#ff8080]'>Male Categories</h3>
        <ul className='m-5'>
          <li className='bg-[#bf80ff] rounded p-3 my-2 w-[220px]'>
              <Link to="/m-handsome">Most Handsome Guy</Link>
            </li>
            <li className='bg-[#e6f0ff] p-3 my-2 w-[220px]'>
              <Link to="/m-bestdress">Best dressed</Link>
            </li>
            <li className='bg-[#bf80ff] rounded p-3 my-2 w-[220px]'>
              <Link to="/m-expensive">Most expensive</Link>
            </li>
            <li className='bg-[#e6f0ff] p-3 my-2 w-[220px]'>
              <Link to="/m-reserved">Most Reserved</Link>
            </li>
            <li className='bg-[#bf80ff] rounded p-3 my-2 w-[220px]'>
              <Link to="/m-entrepreneur">Entrepreneur of the Year</Link>
            </li>
            <li className='bg-[#e6f0ff] p-3 my-2 w-[220px]'>
              <Link to="/m-politicalicon">Political Icon</Link>
            </li>
            <li className='bg-[#bf80ff] rounded p-3 my-2 w-[220px]'>
              <Link to="/m-punctual">Most Punctual</Link>
            </li>
            <li className='bg-[#e6f0ff] p-3 my-2 w-[220px]'>
              <Link to="/m-popular">Most Popular</Link>
            </li>
            <li className='bg-[#bf80ff] rounded p-3 my-2 w-[220px]'>
              <Link to="/m-classic">Most classic</Link>
            </li>
            <li className='bg-[#e6f0ff] p-3 my-2 w-[220px]'>
              <Link to="/m-bestband">Best Brand of the Year</Link>
            </li>
            <li className='bg-[#bf80ff] rounded p-3 my-2 w-[220px]'>
              <Link to="/m-bestpersonality">Best Personality</Link>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Home