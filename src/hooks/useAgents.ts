import { useQuery } from "@tanstack/react-query";
import ApiClient from "../api/client";
import { Response } from "../api/client";
import { Agent } from '../models/Agent';

const client = new ApiClient<Response<Agent>>('/agents');

const useAgents = () => useQuery({
    queryKey: ['agents'],
    queryFn: () => client.getAll()
});

export default useAgents