import { Outlet } from 'react-router-dom'
import Navbar from '../Shared/Navbar/Navbar'
import Footer from '../Shared/Footer/Footer'
const Main = () => {
  return (
    <div>
        <Navbar></Navbar>
      <div>
        <Outlet />
        <Footer></Footer>
      </div>
    </div>
  )
}

export default Main
