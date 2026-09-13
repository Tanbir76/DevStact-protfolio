
import { Suspense } from 'react'
import './App.css'
import Banner from './assets/component/Banner'
import ExploreTec from './assets/component/ExploreTec'
import Nav from './assets/component/Nav'
import type { CatagoryType } from './assets/type/CatagoryType'
import Footer from './assets/component/Footer'
import FooterCopy from './assets/component/FooterCopy'

const asyncPromise = async():Promise<CatagoryType[]> =>{
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
}

function App() {
     const exploreData = asyncPromise();

  return (
    <>
      <div>
        <Nav />
        <Banner />
        <Suspense fallback={<h1>Loding....</h1>}>
        <ExploreTec exploreData ={exploreData} />
        </Suspense>
        <Footer />
        <FooterCopy />
      </div>
    </>
  )
}

export default App
