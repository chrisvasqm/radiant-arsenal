import { Outlet, useNavigate } from "react-router-dom"
import NavBar from "./components/NavBar"
import { useEffect } from "react";
import { Container } from "@chakra-ui/react";

function Layout() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/agents')
  }, [navigate])

  return (
    <>
      <NavBar />
      <Container>
        <Outlet />
      </Container>
    </>
  )
}

export default Layout
