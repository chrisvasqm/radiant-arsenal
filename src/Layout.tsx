import { Outlet, useNavigate } from "react-router-dom"
import NavBar from "./components/NavBar"
import { useEffect } from "react";

function Layout() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/agents')
  }, [navigate])

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default Layout
