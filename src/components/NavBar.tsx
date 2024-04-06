import { Card, Heading } from "@chakra-ui/react"

const NavBar = () => {
    return (
        <Card boxShadow={'md'} paddingLeft={3}>
            <Heading as={'h1'} fontSize={'xl'}>Radiant Arsenal</Heading>
        </Card>
    )
}

export default NavBar