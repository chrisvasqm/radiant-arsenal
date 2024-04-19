import { Grid, Stack, Typography } from '@mui/material'
import { Agent } from '../models/Agent'
import AgentTitle from './AgentTitle'
import AgentAbilities from './AgentAbilities'

interface Props {
    agent?: Agent
}

const AgentDetails = ({ agent }: Props) => {
    return (
        <>
            <Grid container spacing={2} py={2}>
                <Grid item xs={12} sm={5} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={agent?.displayIcon} width={'60%'} />
                </Grid>
                <Grid item xs={12} sm={7} md={8}>
                    <Stack ml={2}>
                        <Stack direction={'row'} gap={2}>
                            <Typography fontWeight={'bold'} color={'#DA414E'}>{agent?.role.displayName}</Typography>
                            <Typography>|</Typography>
                            <AgentTitle displayName={agent?.displayName} />
                        </Stack>
                        <Typography>{agent?.description}</Typography>
                    </Stack>
                </Grid>
            </Grid>

            <Stack mt={4}>
                <Typography variant='h3' fontWeight={'bold'} color={'#DA414E'}>Abilities</Typography>

                <AgentAbilities abilities={agent?.abilities} />
            </Stack>
        </>
    )
}

export default AgentDetails