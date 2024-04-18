import { Paper, Typography } from '@mui/material';
import { Agent } from '../models/Agent';
import { grey } from '@mui/material/colors';

interface Props {
    agent: Agent;
}

const AgentCard = ({ agent }: Props) => {
    return (
        <Paper
            className="p-4 space-y-2"
            sx={{
                backgroundColor: grey[900],
                backgroundImage: `url(${agent.fullPortrait})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: 300, // Adjust the width as needed
                height: 400, // Adjust the height as needed
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                '&:hover': {
                    backgroundImage: `linear-gradient(to top, rgba(254, 70, 84, 0.8), transparent), url(${agent.fullPortrait})`
                },
            }}
        >
            <div>
                <Typography variant="h2" fontSize="1.3rem" color="white">
                    {agent.displayName}
                </Typography>
            </div>
        </Paper >
    );
};

export default AgentCard;
