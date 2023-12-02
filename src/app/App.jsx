import React, { useState } from 'react'
import './App.css'
import Header from '../components/Header/Header'
import { HProps } from '../components/Header/header.props'
import Main from '../components/Main/Main'
import Footer from '../components/Footer/Footer'
function App() {
  const[headerProp,setHeader] = React.useState(HProps)

  React.useEffect(()=>{
    setHeader(HProps)
  },[headerProp])

  return (
    <div className='App'>
      <div className="wrap">
        <Header titles={headerProp}/>
        <Main/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
