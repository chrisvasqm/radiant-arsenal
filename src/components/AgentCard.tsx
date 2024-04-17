import { Paper, Typography } from '@mui/material'
import { Agent } from '../models/Agent'

interface Props {
    agent: Agent
}

const AgentCard = ({ agent }: Props) => {
    return (
        <Paper className='p-4 space-y-2'>
            <div className='flex justify-center'>
                <img src={agent.displayIcon} />
            </div>
            <Typography variant='h2' fontSize={'1.3rem'}>{agent.displayName}</Typography>
            <Typography>{agent.description}</Typography>
        </Paper>
    )
}

export default AgentCard