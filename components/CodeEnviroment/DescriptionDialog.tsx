import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { DataContext } from '../../context/dataContext';
import { DataContextType } from '../../context/@types.data';

import { Array, LinkedList, Queue, Stack, HashTable, Graphs, Tree, BinarySearch } from '../../data/DataStructureInfo';

export default function AlertDialog() {
    const { data, updateData } = React.useContext(DataContext) as DataContextType;


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
                <DialogTitle id="alert-dialog-title">{'Arrays'}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Stack />
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
}
