import { Typography } from '@mui/material'
import { Agent } from '../models/Agent'

interface Props {
    agent: Agent
}

const AgentCard = ({ agent }: Props) => {
    return (
        <Typography key={agent.uuid}>{agent.displayName}</Typography>
    )
}

export default AgentCard