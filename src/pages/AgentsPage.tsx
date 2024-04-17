import { Typography } from '@mui/material'
import useAgents from "../hooks/useAgents"
import AgentCard from '../components/AgentCard'
import Grid from '@mui/material/Unstable_Grid2';

const AgentsPage = () => {
    const { data: agents, isLoading, error } = useAgents()

    if (isLoading) return <p>Loading...</p>

    if (error) return <p>{error.message}</p>

    return (
        <>
            <Typography variant='h2' fontSize={'1.5rem'}>Agents</Typography>
            <Grid container spacing={2} columns={{ xs: 1, sm: 8, md: 12 }}>
                {agents?.data.map(agent => (
                    agent.isPlayableCharacter &&
                    <Grid xs={2} sm={4} md={4} key={agent.uuid}>
                        <AgentCard agent={agent} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default AgentsPage