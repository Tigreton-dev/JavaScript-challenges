import React, { useEffect, useState } from "react";
import { Tabs, Tab, Listbox, ListboxItem, ListboxSection, cn, Chip, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Dropdown, DropdownTrigger, DropdownSection, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { ListIcon, ErrorIcon, ArrowDropDownIcon, AddNoteIcon } from "../../helpers/Icons"
import { getCurrentProblemList, getProblemByRefNumber } from "../../data/getData";
import { DataContext } from '../../context/dataContext';


import { useRouter } from 'next/navigation';

export default function ProblemList({ openOnRender }) {
    const { data } = React.useContext(DataContext);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [list, setList] = useState([])
    const [currentCategory, setCurrentCategory] = useState("String")
    const [currentDifficulty, setDifficulty] = useState("All")

    useEffect(() => {
        const currentList = getCurrentProblemList(currentCategory);
        if (currentDifficulty !== "All") {
            const updateList = currentList.filter(element => element.difficulty === currentDifficulty)
            setList(updateList)
        } else {
            setList(currentList)
        }
    }, [isOpen, currentCategory])

    const setCategory = (category) => {
        setCurrentCategory(category)
    }

    const filterListByDifficulty = (difficulty) => {
        setDifficulty(difficulty)
        const currentList = getCurrentProblemList(currentCategory);
        if (difficulty === "All") {
            setList(currentList)
        } else {
            const updateList = currentList.filter(element => element.difficulty === difficulty)
            setList(updateList)
        }
    }

    useEffect(() => {
        if (openOnRender) onOpen()
    }, [openOnRender]);

    return (
        <>
            <Button onPress={onOpen} variant="bordered" aria-label="Take a photo" size="md" radius="sm" className="border border-default-300 dark:border-default-100">
                <ListIcon />
                Problem list
            </Button>

            <Modal
                scrollBehavior="inside"
                size="xl"
                classNames={{
                    wrapper: "overflow-hidden",
                    base: "overflow-hidden border border-default-300 bg-[white] dark:bg-[black] min-h-[95vh]",
                    header: "border-b-[1px] border-default-300 p-0",
                    footer: "justify-center border-t-[1px] border-default-300"
                }}
                backdrop="opaque"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                motionProps={{
                    variants: {
                        enter: {
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.3,
                                ease: "easeOut",
                            },
                        },
                        exit: {
                            y: -20,
                            opacity: 0,
                            transition: {
                                duration: 0.2,
                                ease: "easeIn",
                            },
                        },
                    }
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 items-center">
                            <div className="flex items-center sticky top-0 left-0 px-4 z-10 justify-between h-8 bg-code-background w-full bg-default-100 dark:bg-default-50"><div className="flex items-center gap-2 basis-1/3"><div className="w-3 h-3 rounded-full bg-red-500"></div><div className="w-3 h-3 rounded-full bg-yellow-500"></div><div className="w-3 h-3 rounded-full bg-green-500"></div></div><div className="flex basis-1/3 h-full justify-center items-center"></div><div className="flex basis-1/3"></div></div>
                                <DropDownContainer currentCategory={currentCategory} setCategory={(category) => setCategory(category)} />
                            </ModalHeader>

                            <ModalBody>
                                <ListBoxComponent list={list} currentCategory={currentCategory} onClose={onClose} />
                            </ModalBody>
                            <ModalFooter>
                                <Tabs 
                                    variant="bordered" 
                                    aria-label="Options"
                                    onSelectionChange={(val) => filterListByDifficulty(val)}
                                    classNames={{
                                        tabList: "bg-white dark:bg-black border border-default-300 dark:border-default-100",
                                    }}
                                >
                                    <Tab key="All" title="All" />
                                    <Tab key="Easy" title="Easy" />
                                    <Tab key="Medium" title="Medium" />
                                    <Tab key="Hard" title="Hard" />
                                </Tabs>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}


function ListBoxComponent({ list, currentCategory, onClose }) {
    const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";
    const { updateData } = React.useContext(DataContext);
    const router = useRouter();

    const setCurrentProblem = (refNumber) => {
        const problem = getProblemByRefNumber(refNumber)
        router.push(`/problems/${problem.refName}`)
        onClose()
    }

    const ChipColor = (tagName: string) => {
        let color = '#1976d2';
        if (tagName === 'Easy') color = 'success';
        if (tagName === 'Medium') color = 'warning';
        if (tagName === 'Hard') color = 'danger';
        if (tagName === 'Extreme Hard') color = 'default';
        return color;
    };

    return (
        <div className="w-full">
            <Listbox variant="faded" aria-label="Listbox menu with sections">
                <ListboxSection>
                    {list.map((challenge) => {
                        return (
                            <ListboxItem
                                key="new"
                                description={`${currentCategory} base algorithm`}
                                startContent={<ErrorIcon size="2rem" className={iconClasses} />}
                                endContent={<Chip color={ChipColor(challenge.difficulty)} variant="bordered" size="sm">{challenge.difficulty}</Chip>}
                                onClick={() => setCurrentProblem(challenge.refNumber)}
                            >
                                {`${challenge.refNumber}. ${challenge.title}`}
                            </ListboxItem>
                        )
                    })}
                </ListboxSection>
            </Listbox>
        </div>
    );
}

const DropDownContainer = ({ currentCategory, setCategory }) => {
    const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";
    const categories = ["String", "Array", "Linked List", "Stacks & Queues", "Graphs", "Binary Tree", "Dynamic Programming", "Recursion", "Searching", "Sorting", "Famous algorithms", "JavaScript"]
    return (
        <Dropdown
            showArrow
            classNames={{
                base: "py-1 px-1 border border-default-300 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black",
                arrow: "bg-default-200",
            }}
        >
            <DropdownTrigger>
                <Button variant="bordered" size="lg" className="w-[100%] h-14 border-none text-xl rounded-none">
                    {currentCategory}
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
                                startContent={<AddNoteIcon className={iconClasses} />}
                                onClick={() => setCategory(category)}
                            >
                                {category}
                            </DropdownItem>
                        )
                    })}
                </DropdownSection>
            </DropdownMenu>
        </Dropdown>
    )
}

