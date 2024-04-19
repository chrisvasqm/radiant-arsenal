import { Grid, Stack, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'

interface Props {
    abilities?: { displayName: string, displayIcon: string, description: string }[]
}

const AgentAbilities = ({ abilities }: Props) => {
    return (
        <>
            {abilities?.map(ability =>
                <Grid container spacing={2} py={3}>
                    <Grid item xs={12} sm={3} md={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={ability.displayIcon} height={30} width={80} style={{ objectFit: 'contain' }} />
                    </Grid>
                    <Grid item xs={12} sm={9} md={10}>
                        <Stack>
                            <Typography variant='h6' color={grey[400]}>{ability.displayName}</Typography>
                            <p>{ability.description}</p>
                        </Stack>
                    </Grid>
                </Grid>
            )}
        </>
    )
}

export default AgentAbilities