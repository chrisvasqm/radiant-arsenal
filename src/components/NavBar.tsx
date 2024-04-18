import { Container, Typography } from '@mui/material'

const NavBar = () => {
    return (
        <nav className='py-2 mb-3 bg-zinc-800'>
            <Container>
                <Typography variant='h1' fontSize={'2rem'} color={'white'}>Radiant Arsenal</Typography>
            </Container>
        </nav>
    )
}

export default NavBar