import * as React from 'react';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { DataContext } from '../../../context/dataContext';
import { DataContextType } from '../../../context/@types.data';

const Hints = () => {
    const { data } = React.useContext(DataContext) as DataContextType;
    const currentProblem = data.currentProblem;
    const currentTheme = data.currentTheme;

    const fontStyles = {
        borderBottom: `1px solid ${currentTheme.color}`,
        marginTop: '40px',
        marginBottom: '20px'
    };

    return (
        <div>
            <Typography variant="h5" style={fontStyles}>
                Hints
            </Typography>
            {Object.entries(currentProblem.hints).map(([key, value]) => {
                return (
                    <Accordion
                        key={key}
                        style={{
                            backgroundColor: currentTheme.primary,
                            borderRadius: '8px'
                        }}
                    >
                        <AccordionSummary
                            expandIcon={
                                <ExpandMoreIcon
                                    sx={{
                                        color: currentTheme.color
                                    }}
                                />
                            }
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography variant="h6">{key.replaceAll('_', ' ')}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{value}</Typography>
                        </AccordionDetails>
                    </Accordion>
                );
            })}
        </div>
    );
};

export default Hints;
