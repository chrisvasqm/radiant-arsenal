import { Typography } from '@mui/material'
import { Agent } from '../models/Agent'

interface Props {
    agent?: Agent
}

const AgentDetails = ({ agent }: Props) => {
    return (
        <Typography>{agent?.displayName}</Typography>
    )
}

export default AgentDetails