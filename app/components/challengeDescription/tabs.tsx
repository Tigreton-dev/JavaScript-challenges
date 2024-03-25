import React, { useEffect, useState, useRef } from 'react';
import { Tabs, Tab, Chip, Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react';
import { DescriptionIcon, VideoIcon, MusicIcon, TestIcon, CheckSolutionIcon } from '../../helpers/Icons';
import { DataContext } from '../../context/dataContext';

export default function TabComponent({ onTabChange }) {
    const { data, updateData } = React.useContext(DataContext);
    const [order, setOrder] = useState(['0', '1', '2', '3']);
    const tabsRef = useRef(null);
    const [selectedKey, setSelectedKey] = useState(order[0]);

    useEffect(() => {
        if (data.passesAllTests === null) return;
        setSelectedKey(order[2]);
        onTabChange(Number(order[2]));
    }, [data.passesAllTests]);

	const tabClickHandler = (index) => {
		setSelectedKey(order[index]);
		onTabChange(index)
	}

    return (
        <Navbar isBlurred={false} maxWidth="full" className="bg-none h-12">
            <div className="flex w-full flex-col">
                <Tabs
                    selectedKey={selectedKey}
                    ref={tabsRef}
                    aria-label="Options"
                    color="primary"
                    variant="underlined"
                    onSelectionChange={key => tabClickHandler(Number(key))}
                    classNames={{
                        tabList: 'gap-6 w-full relative rounded-none p-0  border-divider',
                        cursor: 'w-full bg-cyan-400',
                        tab: 'max-w-fit p-0 h-12',
                        tabContent: 'group-data-[selected=true]:text-cyan-400'
                    }}
                >
                    <Tab
                        key={order[0]}
                        title={
                            <div className="flex items-center space-x-2">
                                <DescriptionIcon />
                                <span>Description</span>
                            </div>
                        }
                    />
                    <Tab
                        key={order[1]}
                        title={
                            <div className="flex items-center space-x-2">
                                <CheckSolutionIcon />
                                <span>Solution</span>
                            </div>
                        }
                    />
                    <Tab
                        key={order[2]}
                        title={
                            <div className="flex items-center space-x-2">
                                <TestIcon />
                                <span>Test Cases</span>
                            </div>
                        }
                    />
                    <Tab
                        key={order[3]}
                        title={
                            <div className="flex items-center space-x-2">
                                <VideoIcon />
                                <span>Video</span>
                            </div>
                        }
                    />
                </Tabs>
            </div>
        </Navbar>
    );
}
