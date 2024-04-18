import { useState } from 'react';
import AgentCard from '../components/AgentCard';
import AgentDetails from '../components/AgentDetails';
import useAgents from "../hooks/useAgents";
import { Agent } from '../models/Agent';

const AgentsPage = () => {
    const { data: agents, isLoading, error } = useAgents()
    const [selectedAgent, setSelectedAgent] = useState<Agent | undefined>();

    if (isLoading) return <p>Loading...</p>

    if (error) return <p>{error.message}</p>

    return (
        <>
            <div className='flex space-x-4 overflow-x-auto'>
                {agents?.data.map(agent => (
                    agent.isPlayableCharacter &&
                    <AgentCard agent={agent} onSelectAgent={agent => setSelectedAgent(agent)} />
                ))}
            </div>

            <AgentDetails agent={selectedAgent} />
        </>
    )
}

export default AgentsPage
