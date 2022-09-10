import { Typography } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface TitleProps {
    title: string;
    isProblemSubmitted: boolean;
}

const Title = (props: TitleProps) => {
    const { title, refName } = props;
    const isProblemSubmitted = localStorage.getItem(refName);

    const titleBox = {
        display: "flex",
        height: "45px",
        marginTop: "15px",
        marginBottom: "10px"
    }

    return (
        <div style={titleBox}>
            {isProblemSubmitted ?
                <CheckCircleIcon fontSize="large" color="success" />
                :
                <CancelIcon fontSize="large" color="error" />}
            <Typography variant="h4" component="h4" style={{ minWidth: "max-content", marginLeft:"10px" }}>{title}</Typography>
        </div>
    )
}

export default Title;