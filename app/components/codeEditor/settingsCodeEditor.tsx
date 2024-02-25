import React, { useEffect, useRef, useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Dropdown, DropdownTrigger, DropdownSection, DropdownMenu, DropdownItem, cn, Switch, ListboxItem, Listbox, useCardContext } from "@nextui-org/react";
import { SettingsIcon, GitHubIcon, MinusIcon, AddIcon, AddNoteIcon, CopyDocumentIcon, EditDocumentIcon, DeleteDocumentIcon, ArrowDropDownIcon } from "../../helpers/Icons";
import ThemeSwitch from "./themeSwitch"
import ProblemList from "./problemListModal";
import SearchModal from "./searchModal"
import { DataContext } from '../../context/dataContext';
import SigninButton from "../signInButton";

export default function SettingsCodeEditor() {
    const { data, updateData } = React.useContext(DataContext);
    const [fontSize, setFontSize] = useState(data.fontSize)
    const [tabSize, setTabSize] = useState(data.tabSize)
    const [isSelected, setIsSelected] = React.useState(true);

    const clickHandler = (newFontSize) => {
        setFontSize(newFontSize)
        updateData({ fontSize: newFontSize })
    }

    const clickTabSizeHandler = (newTabSize) => {
        setTabSize(newTabSize)
        updateData({ tabSize: newTabSize })
    }

    const switchHandler = () => {
        setIsSelected(isSelected => {
            const updateValue = !isSelected
            updateData({ SyntaxHighlighter: updateValue })
            return updateValue
        })
    }

    return (
        <Dropdown
            closeOnSelect={false}
            showArrow
            classNames={{
                base: "py-1 px-1 border border-default-300 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black",
                arrow: "bg-default-200",
            }}
        >
            <DropdownTrigger>
                <Button isIconOnly variant="bordered" aria-label="Take a photo" size="sm" radius="sm" className="ml-2 border border-default-300 dark:border-default-100">
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
                                    <Button variant="bordered">{fontSize}<ArrowDropDownIcon /></Button>
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Static Actions">
                                    <DropdownItem key="10" onClick={() => clickHandler(10)}>10</DropdownItem>
                                    <DropdownItem key="11" onClick={() => clickHandler(11)}>11</DropdownItem>
                                    <DropdownItem key="12" onClick={() => clickHandler(12)}>12</DropdownItem>
                                    <DropdownItem key="13" onClick={() => clickHandler(13)}>13</DropdownItem>
                                    <DropdownItem key="14" onClick={() => clickHandler(14)}>14</DropdownItem>
                                    <DropdownItem key="15" onClick={() => clickHandler(15)}>15</DropdownItem>
                                    <DropdownItem key="16" onClick={() => clickHandler(16)}>16</DropdownItem>
                                    <DropdownItem key="17" onClick={() => clickHandler(17)}>17</DropdownItem>
                                    <DropdownItem key="18" onClick={() => clickHandler(18)}>18</DropdownItem>
                                    <DropdownItem key="19" onClick={() => clickHandler(19)}>19</DropdownItem>
                                    <DropdownItem key="20" onClick={() => clickHandler(20)}>20</DropdownItem>

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
                                    <Button variant="bordered">{tabSize}<ArrowDropDownIcon /></Button>
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Static Actions">
                                    <DropdownItem key="2" onClick={() => clickTabSizeHandler(2)}>2</DropdownItem>
                                    <DropdownItem key="3" onClick={() => clickTabSizeHandler(3)}>3</DropdownItem>
                                    <DropdownItem key="4" onClick={() => clickTabSizeHandler(4)}>4</DropdownItem>
                                    <DropdownItem key="5" onClick={() => clickTabSizeHandler(5)}>5</DropdownItem>
                                    <DropdownItem key="6" onClick={() => clickTabSizeHandler(6)}>6</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>}
                    >
                        Tab size
                    </DropdownItem>
                    <DropdownItem
                        key="edit"
                        endContent={<Switch isSelected={isSelected} onValueChange={() => switchHandler()} aria-label="Automatic updates" />}
                    >
                        Syntax highlights
                    </DropdownItem>
                </DropdownSection>
            </DropdownMenu>
        </Dropdown>
    )
}
