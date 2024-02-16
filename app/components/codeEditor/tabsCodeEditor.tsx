import React from "react";
import { Tabs, Tab, Navbar, Button } from "@nextui-org/react";
import { DescriptionIcon, GalleryIcon, MusicIcon, CodeIcon, CopyIcon, ReloadIcon, FullScreenIcon } from "../../helpers/Icons";

export default function TabCodeEditorComponent({ onTabChange, prettifyCode, resetCode, copyCode, setFullScreen }) {
    return (
        <Navbar isBlurred={false} maxWidth="full" className="h-12">
            <div className="flex w-full flex-col">
                <Tabs
                    aria-label="Options"
                    color="primary"
                    variant="underlined"
                    onSelectionChange={(key) => onTabChange(Number(key))}
                    classNames={{
                        tabList: "gap-6 w-full relative rounded-none p-0  border-divider",
                        cursor: "w-full bg-cyan-400",
                        tab: "max-w-fit p-0 h-12",
                        tabContent: "group-data-[selected=true]:text-cyan-400"
                    }}
                >
                    <Tab
                        key="0"
                        title={
                            <div className="flex items-center space-x-2">
                                <DescriptionIcon />
                                <span>Your Solution</span>
                            </div>
                        }
                    />

                </Tabs>

            </div>
            <div className="w-72 flex justify-end">
                <Button isIconOnly variant="bordered" aria-label="Take a photo" size="sm" radius="sm" className="ml-2 border border-default-300 dark:border-default-100" onClick={() => prettifyCode()}>
                    <CodeIcon />
                </Button>
                <Button isIconOnly variant="bordered" aria-label="Take a photo" size="sm" radius="sm" className="ml-2 border border-default-300 dark:border-default-100" onClick={() => resetCode()}>
                    <ReloadIcon />
                </Button>
                <Button isIconOnly variant="bordered" aria-label="Take a photo" size="sm" radius="sm" className="ml-2 border border-default-300 dark:border-default-100" onClick={() => setFullScreen()}>
                    <FullScreenIcon />
                </Button>
                <Button isIconOnly variant="bordered" aria-label="Take a photo" size="sm" radius="sm" className="ml-2 border border-default-300 dark:border-default-100" onClick={() => copyCode()}>
                    <CopyIcon />
                </Button>
            </div>
        </Navbar>
    );
}
