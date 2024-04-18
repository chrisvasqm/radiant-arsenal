import { Paper } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Agent } from '../models/Agent';
import AgentTitle from './AgentTitle';

interface Props {
    agent: Agent;
    onSelectAgent: (agent: Agent) => void;
}

const AgentCard = ({ agent, onSelectAgent }: Props) => {
    return (
        <div style={{ cursor: 'pointer' }} onClick={() => onSelectAgent(agent)}>
            <Paper
                className="p-4 space-y-2"
                sx={{
                    backgroundColor: grey[900],
                    backgroundImage: `url(${agent.fullPortrait})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: 200,
                    height: 350,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    '&:hover': {
                        backgroundImage: `linear-gradient(to top, rgba(254, 70, 84, 0.8), transparent 60%), url(${agent.fullPortrait})`,
                        border: 'solid 4px rgba(254, 70, 84, 0.8)',
                        borderRadius: 0
                    },
                }}
            >
                <AgentTitle displayName={agent.displayName} />
            </Paper >
        </div>
    );
};

export default AgentCard;
