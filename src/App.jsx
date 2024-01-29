import { useState,lazy,Suspense } from 'react'
const Layout = lazy (()=>import   ('./pages/Layout'))
import { MainProvider } from './context/MainContext'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
const Home = lazy (()=> import ('./pages/Home'))
const About = lazy (()=> import ('./pages/About'))

const routes = createBrowserRouter([

  {
    element:<Layout/>,
    children:[
      {
        path:'/',
        element: <Home/>,
      },
      {
        path:'about',
        element: <About/>
      }
    ]
  }
])

function App() {

  return (
    <>
    <Suspense fallback={<div className='h-screen grid place-content-center'>
      <div className=' animate-spin rounded-full  h-[2rem] w-[4rem] border-l-[.5rem] mx-auto border-r-[.5rem] border-blue-500'></div>
    </div>}>
    <MainProvider>
    <RouterProvider router ={routes}/>
    </MainProvider>
    </Suspense>
    </>
  )
}

export default App
