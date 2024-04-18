import AgentCard from '../components/AgentCard';
import useAgents from "../hooks/useAgents";

const AgentsPage = () => {
    const { data: agents, isLoading, error } = useAgents()

    if (isLoading) return <p>Loading...</p>

    if (error) return <p>{error.message}</p>

    return (
        <div className='flex space-x-4'>
            {agents?.data.map(agent => (
                agent.isPlayableCharacter &&
                <AgentCard agent={agent} />
            ))}
        </div>
    )
}

export default AgentsPage
