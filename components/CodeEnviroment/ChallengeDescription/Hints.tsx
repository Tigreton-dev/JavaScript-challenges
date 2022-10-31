import * as React from 'react';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import Button from '@mui/material/Button';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { DataContext } from '../../../context/dataContext';
import { DataContextType } from '../../../context/@types.data';

const Hints = () => {
    const { data, updateData } = React.useContext(DataContext) as DataContextType;
    const currentProblem = data.currentProblem;
    const currentTheme = data.currentTheme;

    const clickHandler = (name: string) => {
        updateData({ displayDataStructureInfo: true, dataStructureInfoSelected: name });
    };

    return (
        <div>
            <Typography
                variant="h5"
                style={{ borderBottom: `1px solid ${currentTheme.color}`, marginTop: '40px', marginBottom: '20px' }}
            >
                Hints
            </Typography>
            {Object.entries(currentProblem.hints).map(([key, value]) => {
                return (
                    <Accordion key={key} style={{ backgroundColor: currentTheme.primary, borderRadius: '8px' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: currentTheme.color }} />}
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
            <Accordion style={{ backgroundColor: currentTheme.primary, borderRadius: '8px' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: currentTheme.color }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography variant="h6">Data Structure Information</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Button variant="outlined" onClick={() => clickHandler('Array')}>
                        Array
                    </Button>
                    <Button variant="outlined" onClick={() => clickHandler('LinkedList')}>
                        LinkedList
                    </Button>
                    <Button variant="outlined" onClick={() => clickHandler('Queue')}>
                        Queue
                    </Button>
                    <Button variant="outlined" onClick={() => clickHandler('Stack')}>
                        Stack
                    </Button>
                    <Button variant="outlined" onClick={() => clickHandler('HashTable')}>
                        HashTable
                    </Button>
                    <Button variant="outlined" onClick={() => clickHandler('Graphs')}>
                        Graphs
                    </Button>
                    <Button variant="outlined" onClick={() => clickHandler('Tree')}>
                        Tree
                    </Button>
                    <Button variant="outlined" onClick={() => clickHandler('BinarySearch')}>
                        BinarySearch
                    </Button>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{ backgroundColor: currentTheme.primary, borderRadius: '8px' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: currentTheme.color }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography variant="h6">Algorithm Patterns</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Button variant="outlined" onClick={() => clickHandler('SlidingWindow')}>
                        Sliding Window
                    </Button>
                    <Button variant="outlined" onClick={() => clickHandler('TwoPointers')}>
                        Two Pointers
                    </Button>
                    <Button variant="outlined" onClick={() => clickHandler('FastSlowPointers')}>
                        Fast and Slow pointers
                    </Button>
                    <Button variant="outlined" onClick={() => clickHandler('MergeIntervals')}>
                        Merge Intervals
                    </Button>
                    <Button variant="outlined" onClick={() => clickHandler('CyclicSort')}>
                        Cyclic sort
                    </Button>
                    <Button variant="outlined" onClick={() => clickHandler('InPlaceReversalOfLinkedList')}>
                        In-place reversal of linked list
                    </Button>
                    <Button variant="outlined" onClick={() => clickHandler('Tree BFS')}>
                        Tree BFS
                    </Button>
                    <Button variant="outlined" onClick={() => clickHandler('Tree BFS')}>
                        Tree DFS
                    </Button>
                    <Button variant="outlined" onClick={() => clickHandler('Two heaps')}>
                        Two heaps
                    </Button>
                    <Button variant="outlined" onClick={() => clickHandler('Subsets')}>
                        Subsets
                    </Button>
                    <Button variant="outlined" onClick={() => clickHandler('Modified binary search')}>
                        Modified binary search
                    </Button>
                    <Button variant="outlined" onClick={() => clickHandler('Top K elements')}>
                        Top K elements
                    </Button>
                    <Button variant="outlined" onClick={() => clickHandler('K-way Merge')}>
                        K-way Merge
                    </Button>
                    <Button variant="outlined" onClick={() => clickHandler('Topological sort')}>
                        Topological sort
                    </Button>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default Hints;
