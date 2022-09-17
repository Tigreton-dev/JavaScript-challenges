import { Typography } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface TitleProps {
    title: string;
    refName: string;
}

const Title = (props: TitleProps) => {
    const { title, refName } = props;
    const isProblemSubmitted = localStorage.getItem(refName);

    return (
        <div style={{ display: 'flex', height: '45px', marginTop: '15px', marginBottom: '10px' }}>
            {isProblemSubmitted ? (
                <CheckCircleIcon fontSize="large" color="success" />
            ) : (
                <CancelIcon fontSize="large" color="error" />
            )}
            <Typography variant="h4" component="h4" style={{ minWidth: 'max-content', marginLeft: '10px' }}>
                {title}
            </Typography>
        </div>
    );
};

export default Title;
