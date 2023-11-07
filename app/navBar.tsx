"use client"
import React, { useEffect, useRef } from "react";
import { Input, Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Dropdown, DropdownTrigger, DropdownSection, DropdownMenu, DropdownItem, cn, Switch, ListboxItem, Listbox } from "@nextui-org/react";
import { SettingsIcon, GitHubIcon, SearchIcon, MinusIcon, AddIcon, AddNoteIcon, CopyDocumentIcon, EditDocumentIcon, DeleteDocumentIcon, ArrowDropDownIcon } from "./helpers/Icons";
import ThemeSwitch from "../app/themeSwitch"
import ProblemList from "./problemListModal";
import SearchModal from "./SearchModal"
import { DataContext } from './context/dataContext';

export default function NavBar() {
    const { data, updateData } = React.useContext(DataContext);
    const navVarRef = useRef(null);
    const problemTitle = data.currentProblem.title;
    const refNumber = data.currentProblem.refNumber;

    useEffect(() => {
        data.isFullScreen ? navVarRef.current.style.display = "none" : navVarRef.current.style.display = "inline"
    }, [data.isFullScreen])

    return (
        <Navbar maxWidth="full" ref={navVarRef}>
            <NavbarBrand className="hidden sm:flex gap-4">
                <Button variant="bordered" aria-label="Take a photo" size="md" radius="sm" className="border border-default-200 dark:border-default-100">
                    AC
                </Button>
                <ProblemList />
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <h3 className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-unit-4 min-w-unit-20 h-unit-10 text-small gap-unit-2 rounded-small [&>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors motion-reduce:transition-none bg-transparent text-foreground border border-default-200 dark:border-default-100">{`${refNumber}. ${problemTitle}`}</h3>
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
            <DropdownMenu variant="light" aria-label="Dropdown menu with description" selectionMode="none" disabledKeys={["Language"]}>
                <DropdownSection title="SETTINGS">
                    <DropdownItem
                        key="fontSize"
                        endContent={
                            <Dropdown>
                                <DropdownTrigger>
                                    <Button variant="bordered">14<ArrowDropDownIcon /></Button>
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Static Actions">
                                    <DropdownItem key="10">10</DropdownItem>
                                    <DropdownItem key="11">11</DropdownItem>
                                    <DropdownItem key="12">12</DropdownItem>
                                    <DropdownItem key="13">13</DropdownItem>
                                    <DropdownItem key="14">14</DropdownItem>
                                    <DropdownItem key="15">15</DropdownItem>
                                    <DropdownItem key="16">16</DropdownItem>
                                    <DropdownItem key="17">17</DropdownItem>
                                    <DropdownItem key="18">18</DropdownItem>
                                    <DropdownItem key="19">19</DropdownItem>
                                    <DropdownItem key="20">20</DropdownItem>

                                </DropdownMenu>
                            </Dropdown>
                        }
                    >
                        Font size
                    </DropdownItem>
                    <DropdownItem
                        key="Language"
                        endContent={
                            <Dropdown>
                                <DropdownTrigger>
                                    <Button variant="bordered">javaScript<ArrowDropDownIcon /></Button>
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Static Actions">
                                    <DropdownItem key="new">javaScript</DropdownItem>
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
                                    <Button variant="bordered">4<ArrowDropDownIcon /></Button>
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Static Actions">
                                    <DropdownItem key="1">1</DropdownItem>
                                    <DropdownItem key="2">2</DropdownItem>
                                    <DropdownItem key="3">3</DropdownItem>
                                    <DropdownItem key="4">4</DropdownItem>
                                    <DropdownItem key="5">5</DropdownItem>
                                    <DropdownItem key="6">6</DropdownItem>
                                    <DropdownItem key="7">7</DropdownItem>
                                    <DropdownItem key="8">8</DropdownItem>
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
