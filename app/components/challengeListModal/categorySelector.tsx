import React from 'react';
import { Button, Dropdown, DropdownTrigger, DropdownSection, DropdownMenu, DropdownItem } from '@nextui-org/react';
import { ArrowDropDownIcon, AddNoteIcon } from '../../helpers/Icons';
import { categories } from '../../helpers/constants';

export default function CategorySelector({ category, setCategory }) {
    return (
        <Dropdown
            showArrow
            classNames={{
                base: 'py-1 px-1 border border-default-300 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black',
                arrow: 'bg-default-200'
            }}
        >
            <DropdownTrigger>
                <Button variant="bordered" size="lg" className="w-[100%] h-14 border-none text-xl rounded-none">
                    {category}
                    <ArrowDropDownIcon />
                </Button>
            </DropdownTrigger>
            <DropdownMenu variant="faded" aria-label="Dropdown menu with description" className="h-96 overflow-scroll">
                <DropdownSection title="Types">
                    {categories.map((category, i) => {
                        return (
                            <DropdownItem
                                key={`${i} ${category}`}
                                shortcut="⌘N"
                                description={`${category} base Algorithms`}
                                startContent={
                                    <AddNoteIcon className="text-xl text-default-500 pointer-events-none flex-shrink-0" />
                                }
                                onClick={() => setCategory(category)}
                            >
                                {category}
                            </DropdownItem>
                        );
                    })}
                </DropdownSection>
            </DropdownMenu>
        </Dropdown>
    );
}
