import { Typography } from '@mui/material'
import useAgents from "../hooks/useAgents"

const AgentsPage = () => {
    const { data: agents, isLoading, error } = useAgents()

    if (isLoading) return <p>Loading...</p>

    if (error) return <p>{error.message}</p>

    return (
        <>
            <Typography variant='h2' fontSize={'1.5rem'}>Agents</Typography>
            {agents?.data.map(agent => <Typography key={agent.uuid}>{agent.displayName}</Typography>)}
        </>
    )
}

export default AgentsPage