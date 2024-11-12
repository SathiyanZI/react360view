import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';

const Viewer360 = () => {
    const controlsRef = useRef();

    // Rotate view to the left
    const handleLeftClick = () => {
        if (controlsRef.current) {
            controlsRef.current.setAzimuthalAngle(controlsRef.current.getAzimuthalAngle() + 0.1); // Rotate left
            controlsRef.current.update();
        }
    };

    // Rotate view to the right
    const handleRightClick = () => {
        if (controlsRef.current) {
            controlsRef.current.setAzimuthalAngle(controlsRef.current.getAzimuthalAngle() - 0.1); // Rotate right
            controlsRef.current.update();
        }
    };

    // Rotate view upward
    const handleUpClick = () => {
        if (controlsRef.current) {
            controlsRef.current.setPolarAngle(Math.max(0.1, controlsRef.current.getPolarAngle() - 0.1)); // Rotate up
            controlsRef.current.update();
        }
    };

    // Rotate view downward
    const handleDownClick = () => {
        if (controlsRef.current) {
            controlsRef.current.setPolarAngle(Math.min(Math.PI - 0.1, controlsRef.current.getPolarAngle() + 0.1)); // Rotate down
            controlsRef.current.update();
        }
    };

    return ( <
        div style = {
            { width: '100vw', height: '60vh', position: 'relative' } } > { /* Render the Canvas */ } <
        Canvas >
        <
        Environment background = { true } // Set the environment as the background
        files = "/room_360.jpg" // Path to your panoramic image
        /
        > { /* OrbitControls to enable 360 rotation, with zoom disabled */ } <
        OrbitControls ref = { controlsRef }
        enableZoom = { false }
        /> <
        /Canvas>

        { /* Left and Right Buttons */ } <
        button style = {
            { position: 'absolute', top: '50%', left: '10px', zIndex: 1 } }
        onClick = { handleLeftClick } >
        Left <
        /button> <
        button style = {
            { position: 'absolute', top: '50%', right: '10px', zIndex: 1 } }
        onClick = { handleRightClick } >
        Right <
        /button>

        { /* Up and Down Buttons */ } <
        button style = {
            { position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)', zIndex: 1 } }
        onClick = { handleUpClick } >
        Up <
        /button> <
        button style = {
            { position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', zIndex: 1 } }
        onClick = { handleDownClick } >
        Down <
        /button> <
        /div>
    );
};

export default Viewer360;