import React from 'react';
import { Tabs, Tab } from '@nextui-org/react';

export default function DifficultySelector({ filterListByDifficulty }) {
    return (
        <Tabs
            variant="bordered"
            aria-label="Options"
            onSelectionChange={val => filterListByDifficulty(val)}
            classNames={{
                tabList: 'bg-white dark:bg-black border border-default-300 dark:border-default-100'
            }}
        >
            <Tab key="All" title="All" />
            <Tab key="Easy" title="Easy" />
            <Tab key="Medium" title="Medium" />
            <Tab key="Hard" title="Hard" />
        </Tabs>
    );
}
