import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { DataContext } from '../../../context/dataContext';
import { DataContextType } from '../../../context/@types.data';

const FontSize = () => {
    const { updateData } = React.useContext(DataContext) as DataContextType;
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const { data } = React.useContext(DataContext) as DataContextType;

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (font: number) => {
        if (font !== 0) updateData({ fontSize: font });
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                size="large"
                endIcon={<ArrowDropDownIcon />}
                style={{ boxShadow: data.currentTheme.borderShadow }}
            >
                Font Size
            </Button>
            <Menu
                id="basic-menu"
                sx={{ mt: '5px' }}
                anchorEl={anchorEl}
                open={open}
                onClose={() => handleClose(0)}
                MenuListProps={{ 'aria-labelledby': 'basic-button' }}
            >
                <MenuItem onClick={() => handleClose(12)} style={{ minWidth: '130px' }}>
                    12px
                </MenuItem>
                <MenuItem onClick={() => handleClose(14)}>14px</MenuItem>
                <MenuItem onClick={() => handleClose(16)}>16px</MenuItem>
                <MenuItem onClick={() => handleClose(18)}>18px</MenuItem>
                <MenuItem onClick={() => handleClose(20)}>20px</MenuItem>
            </Menu>
        </div>
    );
};

export default FontSize;
