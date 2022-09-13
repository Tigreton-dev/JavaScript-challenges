import React from 'react';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

export default function Initial() {
    return (
        <div
            style={{
                width: '100vw',
                height: '500px',
                position: 'relative',
                background: '#001E26'
            }}
        >
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
                <div
                    style={{
                        width: '600px',
                        height: '300px',
                        zIndex: '1',
                        marginTop: '40px'
                    }}
                >
                    <Typography
                        variant="h4"
                        component="h3"
                        sx={{
                            color: 'white',
                            fontSize: '50px',
                            marginBottom: '20px'
                        }}
                    >
                        JavaScript Challenges
                    </Typography>
                    <Typography
                        variant="body1"
                        component="p"
                        sx={{
                            color: 'white',
                            fontSize: '20px',
                            marginBottom: '20px'
                        }}
                    >
                        List of data structures & algorithms challenges that I have resolved with an online coding
                        platform to practice those challenges.
                    </Typography>
                </div>
                <Image
                    style={{
                        position: 'absolute',
                        top: '0px',
                        right: '5vw',
                        width: '600px',
                        height: '350px',
                        opacity: '1'
                    }}
                    src="/images/editorDark.png"
                    alt="Picture of the author"
                />
            </div>
        </div>
    );
}
