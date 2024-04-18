import { Stack, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'

interface Props {
    abilities?: { displayName: string, displayIcon: string, description: string }[]
}

const AgentAbilities = ({ abilities }: Props) => {
    return (
        <>
            {abilities?.map(ability =>
                <Stack direction={'row'} spacing={4} marginY={2}>
                    <img src={ability.displayIcon} height={30} width={80} style={{ objectFit: 'contain' }} />
                    <Stack>
                        <Typography variant='h6' color={grey[400]}>{ability.displayName}</Typography>
                        <p>{ability.description}</p>
                    </Stack>
                </Stack>
            )}
        </>
    )
}

export default AgentAbilities