import React, { FC, useRef, useEffect } from "react";
import { create, CreateTypes } from "canvas-confetti";
import { DataContext } from "./context/dataContext";

const Firework: FC = () => {
    const { data, updateData } = React.useContext(DataContext);
    const problemPassesAllTests = data.problemPassesAllTests
    const componentRef = useRef(null)
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const fireRef = useRef<CreateTypes | null>(null);

    useEffect(() => {
        if (canvasRef.current) {
            fireRef.current = create(canvasRef.current, {} as any);
        }
    }, []);

    useEffect(() => {
        if (!problemPassesAllTests) return
        componentRef.current.classList.remove("hidden")
        fire()
        updateData({ problemPassesAllTests: false })
        setTimeout(() => {
            componentRef.current.classList.add("hidden")
        }, 4000);
    }, [problemPassesAllTests])

    const fire = () => {
        if (fireRef.current) {
            fireRef.current({
                particleCount: 200,
                // colors: ["#B22222", "#E25822", "#F1BC31", "#F6F052"],
                shapes: ["square"],
                startVelocity: 40,
                spread: 100,
                decay: 0.94,
                origin: {
                    y: 1,
                    x: 0.5
                }
            });
        }
    };

    return (
        <div className="absolute z-[999] left-[50%] translate-x-[-50%] top-0 hidden" ref={componentRef}>
            <canvas ref={canvasRef} width="800" height="800" />
        </div>
    );
};

export default Firework;
