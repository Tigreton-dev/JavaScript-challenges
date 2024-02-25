import React, { useEffect, useRef, useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Dropdown, DropdownTrigger, DropdownSection, DropdownMenu, DropdownItem, cn, Switch, ListboxItem, Listbox, useCardContext } from "@nextui-org/react";
import { SettingsIcon, GitHubIcon, MinusIcon, AddIcon, AddNoteIcon, CopyDocumentIcon, EditDocumentIcon, DeleteDocumentIcon, ArrowDropDownIcon } from "../../helpers/Icons";
import ThemeSwitch from "./themeSwitch"
import ProblemList from "./problemListModal";
import SearchModal from "./searchModal"
import { DataContext } from '../../context/dataContext';
import SigninButton from "../signInButton";

export default function NavBar() {
    const { data, updateData } = React.useContext(DataContext);
    const navVarRef = useRef(null);
    const problemTitle = data.currentProblem.title;
    const refNumber = data.currentProblem.refNumber;

    useEffect(() => {
        data.isFullScreen ? navVarRef.current.style.display = "none" : navVarRef.current.style.display = "inline"
    }, [data.isFullScreen])

    const zoomIn = () => {
        updateData(prevState => {
            const newAppSize = prevState.appSize + 1
            return {
                ...prevState,
                appSize: newAppSize
            }
        })
    }

    const zoomOut = () => {
        updateData(prevState => {
            const newAppSize = prevState.appSize - 1
            return {
                ...prevState,
                appSize: newAppSize
            }
        })
    }

    return (
        <Navbar maxWidth="full" ref={navVarRef} className="h-[4rem]">
            <NavbarBrand className="hidden sm:flex gap-4">
                <Button variant="bordered" aria-label="Take a photo" size="md" radius="sm" className="border border-cyan-400 dark:border-cyan-400 text-cyan-400">
                    Challenges
                </Button>
                <ProblemList openOnRender={false} />
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <h3 className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-unit-4 min-w-unit-20 h-unit-10 text-small gap-unit-2 rounded-small [&>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors motion-reduce:transition-none bg-transparent text-foreground border border-default-300 dark:border-default-100">{`${refNumber}. ${problemTitle}`}</h3>
            </NavbarContent>

            <NavbarContent justify="end" className="gap-2">

                <SearchModal />
                <Button isIconOnly variant="bordered" aria-label="Take a photo" size="md" radius="sm" className="border border-default-300 dark:border-default-100" onClick={zoomIn}>
                    <AddIcon />
                </Button>
                <Button isIconOnly variant="bordered" aria-label="Take a photo" size="md" radius="sm" className="border border-default-300 dark:border-default-100" onClick={zoomOut}>
                    <MinusIcon />
                </Button>

                <ThemeSwitch />
                <SigninButton />
                <Button isIconOnly variant="bordered" aria-label="Take a photo" size="md" radius="sm" className="border border-default-300 dark:border-default-100">
                    <GitHubIcon />
                </Button>
            </NavbarContent>
        </Navbar>
    );
}
