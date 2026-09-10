
import './App.css'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import Footer from './Component/Footer'
import AllTechnologies from './Component/AllTechnologies'
import type { Tech } from './Component/type'
import { Suspense } from 'react'
 
const fetchedData= async ():Promise<Tech[]> => {
  const res= await fetch("/Data.json")
  const data =await res.json()
  return data;
  
}
function App() {
 

  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <Suspense fallback={<p>Loading.....</p>}>
      <AllTechnologies fetchedData={fetchedData()}/>
    </Suspense>
    
    <Footer></Footer>
    
    </>
  )
}

export default App
