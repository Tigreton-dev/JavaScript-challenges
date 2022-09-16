import * as React from 'react';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import Slide, { SlideProps } from '@mui/material/Slide';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export interface State extends SnackbarOrigin {
    open: boolean;
}

interface Props {
    open: boolean;
    setClose: () => any;
    isSolutionCorrect: boolean;
}

type TransitionProps = Omit<SlideProps, 'direction'>;

function TransitionLeft(props: TransitionProps) {
    return <Slide {...props} direction="left" />;
}

const SolutionCodeModal = (props: Props) => {
    const { open, setClose, isSolutionCorrect } = props;

    const [transition, setTransition] = React.useState<React.ComponentType<TransitionProps> | undefined>(undefined);

    React.useEffect(() => {
        if (open) setTransition(() => TransitionLeft);
    }, [open]);

    const handleClose = () => {
        setClose();
    };

    const text = {
        title: isSolutionCorrect ? 'Well Done!' : 'Ops!',
        subTitle: isSolutionCorrect ? `Your result passed all tests! — ` : `Your result did not pass all tests! — `
    };

    return (
        <div>
            <Snackbar
                open={open}
                onClose={handleClose}
                TransitionComponent={transition}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                key={'1'}
            >
                <Alert
                    variant="filled"
                    severity={isSolutionCorrect ? 'success' : 'error'}
                    style={{
                        fontSize: '1rem',
                        textAlign: 'left'
                    }}
                    action={
                        <IconButton aria-label="close" color="inherit" size="small" onClick={handleClose}>
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}
                >
                    <AlertTitle
                        style={{
                            fontSize: '1.2rem'
                        }}
                    >
                        {text.title}
                    </AlertTitle>
                    {text.subTitle} <strong>check it out!</strong>
                </Alert>
            </Snackbar>
        </div>
    );
};

export default SolutionCodeModal;
