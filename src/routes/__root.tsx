import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import NavBar from '../components/NavBar'
import { Container } from '@mui/material'

export const Route = createRootRoute({
    component: () => (
        <>
            <NavBar />
            <Container>
                <Outlet />
            </Container>
            <TanStackRouterDevtools />
        </>
    ),
})