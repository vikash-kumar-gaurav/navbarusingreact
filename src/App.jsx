import { useState } from 'react'
import Navbar from './componenents/Navbar';
import soundbox from './media files/soundbox.webp';
import printer from './media files/printer.webp';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <div className='w-full h-screen'><img src={soundbox} alt="nhi" /></div>
    <div className='w-full h-screen'><img src={printer} alt="nhi" /></div>
    </>
  )
}

export default App
