import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('nav')!).render(
  <StrictMode>

  <div className="mx-20 mt-3">
    <nav className="bg-[#1321da] rounded-4xl py-6 px-2 ">
      <ul className="flex items-center justify-between text-2xl">
        <li><a href="#" className="text-[#1321da] font-bold bg-white hover: rounded-3xl py-4 px-8 ">Home</a></li>
        <li><a href="#" className="text-white hover:bg-gray-600 rounded-4xl py-3 px-6">About</a></li>
        <li><a href="#" className="text-white hover:bg-gray-600 rounded-4xl py-3 px-6">Services</a></li>
        <li><a href="#" className="text-white hover:bg-gray-600 rounded-4xl py-3 px-6">Courses</a></li>
        <li><a href="#" className="text-white hover:bg-gray-600 rounded-4xl py-3 px-6">Contact</a></li>

      </ul>
    </nav>
  </div>
      
    </StrictMode>,
)