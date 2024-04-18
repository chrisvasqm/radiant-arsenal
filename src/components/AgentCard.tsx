import { Paper, Typography } from '@mui/material';
import { Agent } from '../models/Agent';
import { grey } from '@mui/material/colors';

interface Props {
    agent: Agent;
}

const AgentCard = ({ agent }: Props) => {
    return (
        <div>
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
                <div>
                    <Typography variant="h2" fontSize="2rem" color="white" mb={2} fontWeight={'bold'}>
                        {agent.displayName}
                    </Typography>
                </div>
            </Paper >
        </div>
    );
};

export default AgentCard;
