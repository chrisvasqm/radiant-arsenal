import { Container, Typography } from '@mui/material'

const NavBar = () => {
    return (
        <div className='bg-zinc-900'>
            <Container>
                <Typography variant='h1' fontSize={'2rem'} color={'white'}>Radiant Arsenal</Typography>
            </Container>
        </div>
    )
}

export default NavBar