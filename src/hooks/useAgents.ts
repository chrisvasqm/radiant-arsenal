import { useQuery } from "@tanstack/react-query";
import ApiClient from "../api/client";
import { Response } from "../api/client";

const client = new ApiClient<Response<Agent>>('/agents');

interface Agent {
    uuid: string
    displayName: string
    description: string
}

const useAgents = () => useQuery({
    queryKey: ['agents'],
    queryFn: () => client.getAll()
});

export default useAgents