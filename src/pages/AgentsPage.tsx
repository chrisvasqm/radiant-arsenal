import useAgents from "../hooks/useAgents"
import { Heading, Text } from "@chakra-ui/react"

const AgentsPage = () => {
    const { data: agents, isLoading, error } = useAgents()

    if (isLoading) return <p>Loading...</p>

    if (error) return <p>{error.message}</p>

    return (
        <>
            <Heading as={"h1"} size={'lg'} mb={4}>Agents</Heading>
            {agents?.data.map(agent => <Text key={agent.uuid}>{agent.displayName}</Text>)}
        </>
    )
}

export default AgentsPage