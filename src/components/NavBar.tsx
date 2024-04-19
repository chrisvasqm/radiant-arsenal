import { Container, IconButton, Typography } from '@mui/material'
import { FaGithub } from 'react-icons/fa'

const NavBar = () => {
    return (
        <nav className='py-2 mb-3 bg-zinc-800'>
            <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant='h1' fontSize={'2rem'} color={'white'}>Radiant Arsenal</Typography>
                <IconButton aria-label='github' href='https://github.com/chrisvasqm/radiant-arsenal' target='_blank'>
                    <FaGithub color='white' />
                </IconButton>
            </Container>
        </nav>
    )
}

export default NavBar