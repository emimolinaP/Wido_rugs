
import {Routes, Route} from 'react-router'
import Layout from "./layout/layout"
import Home from './pages/Home'
import Login from './pages/Login'
function App() {
  
  return (
    <Routes>
      <Route element = {<Layout/>}> 
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
      </Route>
    </Routes>  
  )
}

export default App
