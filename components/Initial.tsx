import React from 'react';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

export default function Initial() {
    return (
        <div style={{ width: '100vw', height: '550px', position: 'relative', background: '#001E26' }}>
            <div
                style={{
                    width: '100%',
                    maxWidth: '1300px',
                    height: '350px',
                    boxSizing: 'border-box',
                    position: 'absolute',
                    display: 'flex',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'left'
                }}
            >
                <div style={{ width: '600px', height: '300px', zIndex: '1', marginTop: '40px' }}>
                    <Typography component="h3" sx={{ color: 'white', fontSize: '50px', marginBottom: '20px' }}>
                        JavaScript Challenges
                    </Typography>
                    <Typography
                        component="p"
                        sx={{ fontWeight: 'bold', color: 'white', fontSize: '20px', marginBottom: '20px' }}
                    >
                        Coding out algorithm problems is the best way to increase your algorithms skills!!!
                    </Typography>
                    <Typography component="p" sx={{ color: 'white', fontSize: '20px', marginBottom: '20px' }}>
                        This Online Code platform provide over 160 coding questions classified in 8 Categories and 3
                        difficulty levels to maximize the understanding of algorithms and data structures.
                    </Typography>
                </div>
                <Image
                    style={{ position: 'absolute', top: '0px', right: '5vw', opacity: '1' }}
                    width={650}
                    height={400}
                    src="/images/editor.png"
                    alt="Picture of the author"
                />
            </div>
        </div>
    );
}
