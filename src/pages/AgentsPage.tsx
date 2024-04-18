import { useState } from 'react';
import AgentCard from '../components/AgentCard';
import useAgents from "../hooks/useAgents";
import { Typography } from '@mui/material';
import { Agent } from '../models/Agent';

const AgentsPage = () => {
    const { data: agents, isLoading, error } = useAgents()
    const [selectedAgent, setSelectedAgent] = useState<Agent | undefined>();

    if (isLoading) return <p>Loading...</p>

    if (error) return <p>{error.message}</p>

    return (
        <>
            <div className='flex space-x-4'>
                {agents?.data.map(agent => (
                    agent.isPlayableCharacter &&
                    <AgentCard agent={agent} onSelectAgent={agent => setSelectedAgent(agent)} />
                ))}
            </div>

            <Typography>{selectedAgent?.displayName}</Typography>
        </>
    )
}

export default AgentsPage
