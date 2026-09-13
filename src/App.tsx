
import { Suspense } from 'react'
import './App.css'
import Banner from './assets/component/Banner'
import ExploreTec from './assets/component/ExploreTec'
import Nav from './assets/component/Nav'
import type { CatagoryType } from './assets/type/CatagoryType'
import Footer from './assets/component/Footer'
import FooterCopy from './assets/component/FooterCopy'

const asyncPromise = async (): Promise<CatagoryType[]> => {
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
        <Suspense fallback={<h1 className='container mx-auto  text-center text-xl text-[#DB2777]'> <span className="loading loading-spinner text-error"></span>
          Loding<span className="loading loading-dots loading-xs"></span></h1>}>
          <ExploreTec exploreData={exploreData} />
        </Suspense>
        <Footer />
        <FooterCopy />
      </div>
    </>
  )
}

export default App
