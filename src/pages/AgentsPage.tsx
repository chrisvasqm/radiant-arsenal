import useAgents from "../hooks/useAgents"
import { Text } from "@chakra-ui/react"

const AgentsPage = () => {
    const { data: agents, isLoading, error } = useAgents()

    if (isLoading) return <p>Loading...</p>

    if (error) return <p>{error.message}</p>

    return (
        <>
            <div>AgentsPage</div>
            {agents?.data.map(agent => <Text key={agent.uuid}>{agent.displayName}</Text>)}
        </>
    )
}

export default AgentsPage