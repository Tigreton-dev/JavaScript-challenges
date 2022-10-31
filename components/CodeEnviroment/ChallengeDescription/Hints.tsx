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
                    <Button variant="outlined" onClick={() => clickHandler('Array')} style={{ margin: '3px' }}>
                        Array
                    </Button>
                    <Button variant="outlined" onClick={() => clickHandler('LinkedList')} style={{ margin: '3px' }}>
                        LinkedList
                    </Button>
                    <Button variant="outlined" onClick={() => clickHandler('Queue')} style={{ margin: '3px' }}>
                        Queue
                    </Button>
                    <Button variant="outlined" onClick={() => clickHandler('Stack')} style={{ margin: '3px' }}>
                        Stack
                    </Button>
                    <Button variant="outlined" onClick={() => clickHandler('HashTable')} style={{ margin: '3px' }}>
                        HashTable
                    </Button>
                    <Button variant="outlined" onClick={() => clickHandler('Graphs')} style={{ margin: '3px' }}>
                        Graphs
                    </Button>
                    <Button variant="outlined" onClick={() => clickHandler('Tree')} style={{ margin: '3px' }}>
                        Tree
                    </Button>
                    <Button variant="outlined" onClick={() => clickHandler('BinarySearch')} style={{ margin: '3px' }}>
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
                    <Button variant="outlined" onClick={() => clickHandler('SlidingWindow')} style={{ margin: '3px' }}>
                        Sliding Window
                    </Button>
                    <Button variant="outlined" onClick={() => clickHandler('TwoPointers')} style={{ margin: '3px' }}>
                        Two Pointers
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() => clickHandler('FastSlowPointers')}
                        style={{ margin: '3px' }}
                    >
                        Fast and Slow pointers
                    </Button>
                    <Button variant="outlined" onClick={() => clickHandler('MergeIntervals')} style={{ margin: '3px' }}>
                        Merge Intervals
                    </Button>
                    <Button variant="outlined" onClick={() => clickHandler('CyclicSort')} style={{ margin: '3px' }}>
                        Cyclic sort
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() => clickHandler('InPlaceReversalOfLinkedList')}
                        style={{ margin: '3px' }}
                    >
                        In-place reversal of linked list
                    </Button>
                    <Button variant="outlined" onClick={() => clickHandler('BFS')} style={{ margin: '3px' }}>
                        Tree BFS
                    </Button>
                    <Button variant="outlined" onClick={() => clickHandler('DFS')} style={{ margin: '3px' }}>
                        Tree DFS
                    </Button>
                    <Button variant="outlined" onClick={() => clickHandler('TwoHeaps')} style={{ margin: '3px' }}>
                        Two heaps
                    </Button>
                    <Button variant="outlined" onClick={() => clickHandler('Subsets')} style={{ margin: '3px' }}>
                        Subsets
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() => clickHandler('ModifiedBinarySearch')}
                        style={{ margin: '3px' }}
                    >
                        Modified binary search
                    </Button>
                    <Button variant="outlined" onClick={() => clickHandler('TopKElements')} style={{ margin: '3px' }}>
                        Top K elements
                    </Button>
                    <Button variant="outlined" onClick={() => clickHandler('K-way Merge')} style={{ margin: '3px' }}>
                        K-way Merge
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() => clickHandler('Topological sort')}
                        style={{ margin: '3px' }}
                    >
                        Topological sort
                    </Button>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default Hints;
