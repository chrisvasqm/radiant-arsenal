import Grid from '@mui/material/Unstable_Grid2';
import AgentCard from '../components/AgentCard';
import useAgents from "../hooks/useAgents";

const AgentsPage = () => {
    const { data: agents, isLoading, error } = useAgents()

    if (isLoading) return <p>Loading...</p>

    if (error) return <p>{error.message}</p>

    return (
        <>
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