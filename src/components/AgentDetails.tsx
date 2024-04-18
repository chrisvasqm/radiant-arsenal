import { Stack, Typography } from '@mui/material'
import { Agent } from '../models/Agent'
import AgentTitle from './AgentTitle'

interface Props {
    agent?: Agent
}

const AgentDetails = ({ agent }: Props) => {
    return (
        <>
            <Stack mt={2} direction={'row'}>
                <img src={agent?.displayIcon} width={'20%'} height={'20%'} />
                <Stack ml={2}>
                    <AgentTitle displayName={agent?.displayName} />
                    <Typography>{agent?.description}</Typography>
                </Stack>
            </Stack>
        </>
    )
}

export default AgentDetails