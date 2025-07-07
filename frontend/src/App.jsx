import React from 'react'
import Navbar from './pages/Components/Navbar/Navbar'
import Sec_1 from './pages/Sections/Home_Sections/01_section/Sec_1'
import Sec_2 from './pages/Sections/Home_Sections/02_section/Sec_2'
import Sec_3 from './pages/Sections/Home_Sections/03_section/Sec_3'
function App() {
  return (
    <>
      <div className='mx-30 my-10'>
        <Navbar />
        <Sec_1 />
        <Sec_2 />
        <Sec_3 />
      </div>
    </>
  )
}

export default App