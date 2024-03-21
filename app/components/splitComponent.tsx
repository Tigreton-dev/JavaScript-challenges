'use client';

import React, { useEffect, useRef, useContext } from 'react';
import Split from 'react-split';
import { DataContext } from '../context/dataContext';

export default function SplitComponent({ children }) {
    const { data, updateData } = useContext(DataContext);
    const isFullScreen = data.isFullScreen;
    const sliptRef = useRef(null);

    useEffect(() => {
        if (sliptRef.current === null) return;
        isFullScreen
            ? sliptRef.current.parent.classList.add('splitFullScreen')
            : sliptRef.current.parent.classList.remove('splitFullScreen');
    }, [isFullScreen]);

    return (
        <Split
            ref={sliptRef}
            className="split grow overflow-hidden"
            sizes={[45, 55]}
            minSize={100}
            expandToMin={false}
            gutterSize={10}
            gutterAlign="center"
            snapOffset={30}
            dragInterval={1}
            direction="horizontal"
            cursor="col-resize"
        >
            {children}
        </Split>
    );
}
