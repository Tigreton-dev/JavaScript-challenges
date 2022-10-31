import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { DataContext } from '../../context/dataContext';
import { DataContextType } from '../../context/@types.data';

import { Array, LinkedList, Queue, Stack, HashTable, Graphs, Tree, BinarySearch } from '../../data/DataStructureInfo';
import {
    SlidingWindow,
    TwoPointers,
    FastSlowPointers,
    MergeIntervals,
    CyclicSort,
    InPlaceReversalOfLinkedList,
    BFS
} from '../../data/AlgorithmsPatters';

export default function AlertDialog() {
    const { data, updateData } = React.useContext(DataContext) as DataContextType;
    const [dataStructureType, setDataStructureType] = React.useState(<Array />);

    React.useEffect(() => {
        switch (data.dataStructureInfoSelected) {
            case 'Array':
                setDataStructureType(<Array />);
                break;
            case 'LinkedList':
                setDataStructureType(<LinkedList />);
                break;
            case 'Queue':
                setDataStructureType(<Queue />);
                break;
            case 'Stack':
                setDataStructureType(<Stack />);
                break;
            case 'HashTable':
                setDataStructureType(<HashTable />);
                break;
            case 'Graphs':
                setDataStructureType(<Graphs />);
                break;
            case 'Tree':
                setDataStructureType(<Tree />);
                break;
            case 'BinarySearch':
                setDataStructureType(<BinarySearch />);
                break;
            case 'SlidingWindow':
                setDataStructureType(<SlidingWindow />);
                break;
            case 'TwoPointers':
                setDataStructureType(<TwoPointers />);
                break;
            case 'FastSlowPointers':
                setDataStructureType(<FastSlowPointers />);
                break;
            case 'MergeIntervals':
                setDataStructureType(<MergeIntervals />);
                break;
            case 'CyclicSort':
                setDataStructureType(<CyclicSort />);
                break;
            case 'InPlaceReversalOfLinkedList':
                setDataStructureType(<InPlaceReversalOfLinkedList />);
                break;
            case 'BFS':
                setDataStructureType(<BFS />);
                break;
            default:
                setDataStructureType(<Array />);
        }
    }, [data.dataStructureInfoSelected]);

    const handleClose = () => {
        updateData({ displayDataStructureInfo: false });
    };

    return (
        <div>
            <Dialog
                open={data.displayDataStructureInfo}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="md"
            >
                <DialogTitle id="alert-dialog-title" style={{ color: data.currentTheme.color, textAlign: 'left' }}>
                    {data.dataStructureInfoSelected}
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: theme => theme.palette.grey[500]
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText
                        id="alert-dialog-description"
                        style={{ color: data.currentTheme.color, textAlign: 'left' }}
                    >
                        {dataStructureType}
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
}
