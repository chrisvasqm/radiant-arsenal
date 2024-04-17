import { Paper, Typography } from '@mui/material'
import { Agent } from '../models/Agent'

interface Props {
    agent: Agent
}

const AgentCard = ({ agent }: Props) => {
    return (
        <Paper className='p-4'>
            <Typography>{agent.displayName}</Typography>
            <Typography>{agent.description}</Typography>
        </Paper>
    )
}

export default AgentCard