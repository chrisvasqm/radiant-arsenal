import { useState, useEffect } from 'react';
import AgentCard from '../components/AgentCard';
import AgentDetails from '../components/AgentDetails';
import useAgents from "../hooks/useAgents";
import { Agent } from '../models/Agent';
import { Box } from '@mui/material';

const AgentsPage = () => {
    const { data: agents, isLoading, error } = useAgents()
    const [selectedAgent, setSelectedAgent] = useState<Agent | undefined>();

    useEffect(() => {
        setSelectedAgent(agents?.data[0])
    }, [agents?.data])


    if (isLoading) return <p>Loading...</p>

    if (error) return <p>{error.message}</p>

    const sortedAgents = agents?.data.sort((current, next) => current.displayName.localeCompare(next.displayName))

    return (
        <>
            <Box className='flex space-x-4 overflow-x-auto' sx={{
                scrollbarWidth: 'thin',
                '&::-webkit-scrollbar': {
                    width: '0.4em',
                },
                '&::-webkit-scrollbar-track': {
                    background: "#f1f1f1",
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: '#888',
                },
                '&::-webkit-scrollbar-thumb:hover': {
                    background: '#555'
                }
            }}>
                {sortedAgents?.map(agent => (
                    agent.isPlayableCharacter &&
                    <AgentCard agent={agent} onSelectAgent={agent => setSelectedAgent(agent)} />
                ))}
            </Box>

            <AgentDetails agent={selectedAgent} />
        </>
    )
}

export default AgentsPage
