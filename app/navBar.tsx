"use client"
import React from "react";
import { Input, Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Dropdown, DropdownTrigger, DropdownSection, DropdownMenu, DropdownItem, cn, Switch, ListboxItem, Listbox } from "@nextui-org/react";
import { SettingsIcon, GitHubIcon, SearchIcon, MinusIcon, AddIcon, AddNoteIcon, CopyDocumentIcon, EditDocumentIcon, DeleteDocumentIcon, ArrowDropDownIcon } from "../app/Icons";
import ThemeSwitch from "../app/themeSwitch"
import ProblemList from "./problemListModal";
import SearchModal from "./SearchModal"

export default function NavBar() {

    return (
        <Navbar maxWidth="full">
            <NavbarBrand className="hidden sm:flex gap-4">
                <Button variant="bordered" aria-label="Take a photo" size="md" radius="sm" className="border border-default-200 dark:border-default-100">
                    AC
                </Button>
                <ProblemList />
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <h3 className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-unit-4 min-w-unit-20 h-unit-10 text-small gap-unit-2 rounded-small [&>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors motion-reduce:transition-none bg-transparent text-foreground border border-default-200 dark:border-default-100">123. Palindrome permutation</h3>
            </NavbarContent>

            <NavbarContent justify="end">
               
                <SearchModal />
                <Button isIconOnly variant="bordered" aria-label="Take a photo" size="md" radius="sm" className="border border-default-200 dark:border-default-100">
                    <AddIcon />
                </Button>
                <Button isIconOnly variant="bordered" aria-label="Take a photo" size="md" radius="sm" className="border border-default-200 dark:border-default-100">
                    <MinusIcon />
                </Button>

                <SettingsContainer />
                <ThemeSwitch />
                <Button isIconOnly variant="bordered" aria-label="Take a photo" size="md" radius="sm" className="border border-default-200 dark:border-default-100">
                    <GitHubIcon />
                </Button>
            </NavbarContent>
        </Navbar>
    );
}
const SettingsContainer = () => {
    const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";
    return (
        <Dropdown
            closeOnSelect={false}
            showArrow
            classNames={{
                base: "py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black",
                arrow: "bg-default-200",
            }}
        >
            <DropdownTrigger>
                <Button isIconOnly variant="bordered" aria-label="Take a photo" size="md" radius="sm" className="border border-default-200 dark:border-default-100">
                    <SettingsIcon />
                </Button>
            </DropdownTrigger>
            <DropdownMenu variant="faded" aria-label="Dropdown menu with description">
                <DropdownSection title="SETTINGS">
                    <DropdownItem
                        key="new"
                        endContent={
                            <Dropdown>
                                <DropdownTrigger>
                                    <Button
                                        variant="bordered"
                                    >
                                        Open Menu
                                    </Button>
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Static Actions">
                                    <DropdownItem key="new">New file</DropdownItem>
                                    <DropdownItem key="copy">Copy link</DropdownItem>
                                    <DropdownItem key="edit">Edit file</DropdownItem>
                                    <DropdownItem key="delete" className="text-danger" color="danger">
                                        Delete file
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>}
                    >
                        Font size
                    </DropdownItem>
                    <DropdownItem
                        key="copy"
                        endContent={
                            <Dropdown>
                                <DropdownTrigger>
                                    <Button
                                        variant="bordered"
                                    >
                                        Open Menu
                                    </Button>
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Static Actions">
                                    <DropdownItem key="new">New file</DropdownItem>
                                    <DropdownItem key="copy">Copy link</DropdownItem>
                                    <DropdownItem key="edit">Edit file</DropdownItem>
                                    <DropdownItem key="delete" className="text-danger" color="danger">
                                        Delete file
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>}
                    >
                        Language
                    </DropdownItem>
                    <DropdownItem
                        key="edit"
                        endContent={
                            <Dropdown>
                                <DropdownTrigger>
                                    <Button
                                        variant="bordered"
                                    >
                                        Open Menu
                                    </Button>
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Static Actions">
                                    <DropdownItem key="new">New file</DropdownItem>
                                    <DropdownItem key="copy">Copy link</DropdownItem>
                                    <DropdownItem key="edit">Edit file</DropdownItem>
                                    <DropdownItem key="delete" className="text-danger" color="danger">
                                        Delete file
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>}
                    >
                        Tab size
                    </DropdownItem>
                    <DropdownItem
                        key="edit"
                        endContent={<Switch defaultSelected aria-label="Automatic updates" />}
                    >
                        Syntax highlights
                    </DropdownItem>
                </DropdownSection>
            </DropdownMenu>
        </Dropdown>
    )
}
