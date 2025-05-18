import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='bg-[#FFFFFF] min-h-screen flex justify-center items-center pb-5'>
        <Outlet />
    </div>
  )
}

export default Layout