import { useState, useEffect } from 'react';
import AgentCard from '../components/AgentCard';
import AgentDetails from '../components/AgentDetails';
import useAgents from "../hooks/useAgents";
import { Agent } from '../models/Agent';

const AgentsPage = () => {
    const { data: agents, isLoading, error } = useAgents()
    const [selectedAgent, setSelectedAgent] = useState<Agent | undefined>();

    useEffect(() => {
        setSelectedAgent(agents?.data[0])
    }, [agents?.data])


    if (isLoading) return <p>Loading...</p>

    if (error) return <p>{error.message}</p>

    const sortedAgents = agents?.data.sort((a, b) => a.displayName.localeCompare(b.displayName))

    return (
        <>
            <div className='flex space-x-4 overflow-x-auto'>
                {sortedAgents?.map(agent => (
                    agent.isPlayableCharacter &&
                    <AgentCard agent={agent} onSelectAgent={agent => setSelectedAgent(agent)} />
                ))}
            </div>

            <AgentDetails agent={selectedAgent} />
        </>
    )
}

export default AgentsPage
