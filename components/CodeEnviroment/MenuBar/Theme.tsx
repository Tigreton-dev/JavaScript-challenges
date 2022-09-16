import * as React from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

import { DataContext } from '../../../context/dataContext';
import { DataContextType } from '../../../context/@types.data';

export default function Theme() {
    const { data, updateData } = React.useContext(DataContext) as DataContextType;
    const currentTheme = data.currentTheme;
    const lightTheme = data.lightTheme;
    const darkTheme = data.darkTheme;
    const boxRef = React.useRef<any>(null);

    React.useEffect(() => {
        if (currentTheme.isDarkTheme) boxRef.current.style.transform = 'translateX(2.5rem)';
        if (!currentTheme.isDarkTheme) boxRef.current.style.transform = 'translateX(0.1rem)';
    }, []);

    const clickHandler = () => {
        const position = boxRef.current.style.transform;
        if (position === 'translateX(2.5rem)') {
            updateData({
                currentTheme: lightTheme
            });
            localStorage.setItem('theme', JSON.stringify(lightTheme));
            boxRef.current.style.transform = 'translateX(0.1rem)';
        } else {
            updateData({
                currentTheme: darkTheme
            });
            localStorage.setItem('theme', JSON.stringify(darkTheme));
            boxRef.current.style.transform = 'translateX(2.5rem)';
        }
    };

    return (
        <>
            <Tooltip TransitionComponent={Zoom} title="Select Theme" arrow>
                <div
                    onClick={() => clickHandler()}
                    style={{
                        width: '5.5rem',
                        height: '2.5rem',
                        boxSizing: 'border-box',
                        borderRadius: '5px',
                        backgroundColor: currentTheme.primary,
                        padding: '0.2rem',
                        cursor: 'pointer',
                        boxShadow: currentTheme.borderShadow
                    }}
                >
                    <div
                        ref={boxRef}
                        style={{
                            width: '2.5rem',
                            height: '2.1rem',
                            background: currentTheme.tertiary,
                            filter: 'brightness(90%)',
                            position: 'relative',
                            transition: 'all 0.3s ease',
                            borderRadius: '3px'
                        }}
                    />
                    <div
                        style={{
                            height: 'cover',
                            position: 'relative',
                            top: '-85%',
                            alignItems: 'center',
                            display: 'flex',
                            flexWrap: 'wrap'
                        }}
                    >
                        <LightModeIcon
                            style={{
                                width: '2.5rem',
                                color: currentTheme.color
                            }}
                        />
                        <DarkModeIcon
                            style={{
                                width: '2.5rem',
                                color: currentTheme.color
                            }}
                        />
                    </div>
                </div>
            </Tooltip>
        </>
    );
}
