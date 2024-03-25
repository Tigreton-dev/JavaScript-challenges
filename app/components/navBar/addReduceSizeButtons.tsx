import React, { useContext } from 'react';
import { Button, NavbarItem } from '@nextui-org/react';
import { DataContext } from '../../context/dataContext';
import { MinusIcon, AddIcon } from '../../helpers/Icons';

export default function AddReduceSizeButtons() {
    const { data, updateData } = useContext(DataContext);
    const isFullScreen = data.isFullScreen;

    const zoomIn = () => {
        updateData(prevState => {
            const newAppSize = prevState.appSize + 1;
            const htmlElement = document.getElementById('htmlElement') as HTMLElement;
            htmlElement.style.fontSize = `${newAppSize}px`;
            return {
                ...prevState,
                appSize: newAppSize
            };
        });
    };

    const zoomOut = () => {
        updateData(prevState => {
            const newAppSize = prevState.appSize - 1;
            const htmlElement = document.getElementById('htmlElement') as HTMLElement;
            htmlElement.style.fontSize = `${newAppSize}px`;
            return {
                ...prevState,
                appSize: newAppSize
            };
        });
    };
    return (
        <NavbarItem>
            <Button
                isIconOnly
                variant="bordered"
                aria-label="Take a photo"
                size="md"
                radius="sm"
                className="border border-default-300 dark:border-default-100 mr-2"
                onClick={zoomIn}
            >
                <AddIcon />
            </Button>
            <Button
                isIconOnly
                variant="bordered"
                aria-label="Take a photo"
                size="md"
                radius="sm"
                className="border border-default-300 dark:border-default-100"
                onClick={zoomOut}
            >
                <MinusIcon />
            </Button>
        </NavbarItem>
    );
}
