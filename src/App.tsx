import React, { useState } from 'react'
import 'antd/dist/antd.less'
import {Button} from 'antd'
import SiderDemo from './components/Meun'


function App() {
  const [count, setCount] = useState(0)
  const btnClick = ()=>{
    setCount((v)=> 1 + v)
  }
  return (
    <SiderDemo></SiderDemo>
  )
}

export default App
