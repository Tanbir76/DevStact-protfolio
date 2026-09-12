
import { Suspense } from 'react'
import './App.css'
import Banner from './assets/component/Banner'
import ExploreTec from './assets/component/ExploreTec'
import Nav from './assets/component/Nav'
import type { CatagoryType } from './assets/type/CatagoryType'



  //  const asyncPromise = async ():Promise<PromiseType[]> =>{
  //    const res = await fetch('/data.json');
  //    const data = await res.json();
  //    return data;
  //   }
const asyncPromise = async():Promise<CatagoryType[]> =>{
  const res = await fetch('/public/data.json');
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
      </div>
    </>
  )
}

export default App
