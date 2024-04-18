import { Stack, Typography } from '@mui/material'
import { Agent } from '../models/Agent'
import AgentTitle from './AgentTitle'
import AgentAbilities from './AgentAbilities'

interface Props {
    agent?: Agent
}

const AgentDetails = ({ agent }: Props) => {
    return (
        <>
            <Stack mt={2} direction={'row'}>
                <img src={agent?.displayIcon} width={'20%'} height={'20%'} />
                <Stack ml={2}>
                    <Stack direction={'row'} gap={2}>
                        <Typography fontWeight={'bold'} color={'#DA414E'}>{agent?.role.displayName}</Typography>
                        <Typography>|</Typography>
                        <AgentTitle displayName={agent?.displayName} />
                    </Stack>
                    <Typography>{agent?.description}</Typography>
                </Stack>
            </Stack>

            <Stack mt={4}>
                <Typography variant='h3' fontWeight={'bold'} color={'#DA414E'}>Abilities</Typography>

                <AgentAbilities abilities={agent?.abilities} />
            </Stack>
        </>
    )
}

export default AgentDetails