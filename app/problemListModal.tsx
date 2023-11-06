import React from "react";
import { Listbox, ListboxItem, ListboxSection, cn, Chip, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Dropdown, DropdownTrigger, DropdownSection, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { ListIcon, CheckedIcon, CheckIcon, ErrorIcon, DeleteDocumentIcon, CopyDocumentIcon, ArrowDropDownIcon, EditDocumentIcon, AddNoteIcon } from "../app/Icons"

export default function ProblemList() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button onPress={onOpen} variant="bordered" aria-label="Take a photo" size="md" radius="sm" className="border border-default-200 dark:border-default-100">
                <ListIcon />
                Problem list
            </Button>

            <Modal
                scrollBehavior="inside"
                size="lg"
                classNames={{
                    base: "overflow-hidden border border-default-200 bg-gradient-to-br from-white to-default-100 dark:from-black dark:to-default-50 h-[90vh]",
                    header: "border-b-[1px] border-default-200 p-0",
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
                            <div className="flex items-center sticky top-0 left-0 px-4 z-10 justify-between h-8 bg-code-background w-full bg-default-100 dark:bg-default-50"><div className="flex items-center gap-2 basis-1/3"><div className="w-3 h-3 rounded-full bg-red-500"></div><div className="w-3 h-3 rounded-full bg-yellow-500"></div><div className="w-3 h-3 rounded-full bg-green-500"></div></div><div className="flex basis-1/3 h-full justify-center items-center"></div><div className="flex basis-1/3"></div></div>

                            <ModalHeader className="flex flex-col gap-1 items-center">
                                <DropDownContainer />
                            </ModalHeader>

                            <ModalBody>
                                <ListBoxComponent />
                            </ModalBody>
                            <ModalFooter>

                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}


function ListBoxComponent() {
    const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";
    const arr = Array.from({ length: 50 })
    return (
        <div className="w-full">
            <Listbox variant="faded" aria-label="Listbox menu with sections">
                <ListboxSection title="String">
                    {arr.map((e) => {
                        return (
                            <ListboxItem
                                key="new"
                                description="String base algorithm"
                                startContent={<ErrorIcon className={iconClasses} />}
                                endContent={<Chip color="primary" variant="bordered" size="sm">Easy</Chip>}

                            >
                                123. Palindrome permutation
                            </ListboxItem>
                        )
                    })}
                </ListboxSection>
            </Listbox>
        </div>
    );
}

const DropDownContainer = () => {
    const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";
    return (
        <Dropdown
            showArrow
            classNames={{
                base: "py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black",
                arrow: "bg-default-200",
            }}
        >
            <DropdownTrigger>
                <Button variant="bordered" size="lg" className="w-[100%] h-16 border-none text3xl rounded-none">
                    String
                    <ArrowDropDownIcon />
                </Button>

            </DropdownTrigger>
            <DropdownMenu variant="faded" aria-label="Dropdown menu with description" className="h-96 overflow-scroll">
                <DropdownSection title="Types">
                    <DropdownItem
                        key="new"
                        shortcut="⌘N"
                        description="String base Algorithms"
                        startContent={<AddNoteIcon className={iconClasses} />}
                    >
                        String
                    </DropdownItem>
                    <DropdownItem
                        key="copy"
                        shortcut="⌘C"
                        description="Array base Algorithms"
                        startContent={<CopyDocumentIcon className={iconClasses} />}
                    >
                        Array
                    </DropdownItem>
                    <DropdownItem
                        key="edit"
                        shortcut="⌘⇧E"
                        description="Linked list base Algorithms"
                        startContent={<EditDocumentIcon className={iconClasses} />}
                    >
                        Linked list
                    </DropdownItem>
                    <DropdownItem
                        key="edit"
                        shortcut="⌘⇧E"
                        description="Stack & Queues base Algorithms"
                        startContent={<EditDocumentIcon className={iconClasses} />}
                    >
                        Stacks & Queues
                    </DropdownItem>
                    <DropdownItem
                        key="edit"
                        shortcut="⌘⇧E"
                        description="Graphs base Algorithms"
                        startContent={<EditDocumentIcon className={iconClasses} />}
                    >
                        Graphs
                    </DropdownItem>
                    <DropdownItem
                        key="edit"
                        shortcut="⌘⇧E"
                        description="Binary tree base Algorithms"
                        startContent={<EditDocumentIcon className={iconClasses} />}
                    >
                        Binary tree
                    </DropdownItem>
                    <DropdownItem
                        key="edit"
                        shortcut="⌘⇧E"
                        description="Dynamic programming base Algorithms"
                        startContent={<EditDocumentIcon className={iconClasses} />}
                    >
                        Dynamic programming
                    </DropdownItem>
                    <DropdownItem
                        key="edit"
                        shortcut="⌘⇧E"
                        description="Recursion base Algorithms"
                        startContent={<EditDocumentIcon className={iconClasses} />}
                    >
                        Recursion
                    </DropdownItem>
                    <DropdownItem
                        key="edit"
                        shortcut="⌘⇧E"
                        description="Searching base Algorithms"
                        startContent={<EditDocumentIcon className={iconClasses} />}
                    >
                        Searching
                    </DropdownItem>
                    <DropdownItem
                        key="edit"
                        shortcut="⌘⇧E"
                        description="Sorting base Algorithms"
                        startContent={<EditDocumentIcon className={iconClasses} />}
                    >
                        Sorting
                    </DropdownItem>
                    <DropdownItem
                        key="edit"
                        shortcut="⌘⇧E"
                        description="List of most famous algorithms"
                        startContent={<EditDocumentIcon className={iconClasses} />}
                    >
                        Famous algorithms
                    </DropdownItem>
                    <DropdownItem
                        key="edit"
                        shortcut="⌘⇧E"
                        description="JavaScript base Algorithms"
                        startContent={<EditDocumentIcon className={iconClasses} />}
                    >
                        JavaScript
                    </DropdownItem>
                </DropdownSection>
            </DropdownMenu>
        </Dropdown>
    )
}

