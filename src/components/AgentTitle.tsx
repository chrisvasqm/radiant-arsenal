import { Typography } from '@mui/material'

interface Props {
    displayName?: string
}

const AgentTitle = ({ displayName }: Props) => {
    return (
        <Typography
            variant="h2"
            fontSize="1.5rem"
            color="white"
            mb={2}
            fontWeight={'bold'}
            letterSpacing={2}>
            {displayName?.toUpperCase()}</Typography>
    )
}

export default AgentTitle