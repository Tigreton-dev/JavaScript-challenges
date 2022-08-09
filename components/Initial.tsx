import React from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'

export default function Initial() {

    return (
        <div style={{ width: "100vw", height: "500px", position: "relative", background: "#001E26" }}>
            <div style={{
                width: "100%",
                maxWidth: "1200px",
                height: "300px",
                boxSizing: "border-box",
                position: "absolute",
                display: "flex",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
            }}>
                <div style={{ width: "40%", height: "300px", zIndex: "1", marginTop: "40px" }}>
                    <Typography variant="h4" component="h3" sx={{ color: "white" }}>Increase your algorithms skills</Typography>
                    <Typography variant="body1" component="p" sx={{ color: "white", margin: "15px 0" }}>Build durable and robust knowledge of data structures & algorithms with Structy. Build durable and robust knowledge of data structures & algorithms with Structy.</Typography>
                    <Button size="large" variant="contained" sx={{ marginTop: "10px" }}>Challenges</Button>
                </div>
                <img
                    style={{
                        position: "absolute",
                        top: "-50px",
                        left: "450px",
                        width: "800px",
                        height: "500px",
                        transform: "perspective(1000px) rotateY(340deg)",
                    }}
                    src="/images/editorDark.png"
                    alt="bride and groom smooching"
                />
            </div>
        </div>
    )
}