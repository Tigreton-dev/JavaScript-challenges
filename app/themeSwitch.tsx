import React, { useEffect } from "react";
import { useSwitch, VisuallyHidden, SwitchProps } from "@nextui-org/react";
import { MoonIcon, SunIcon } from "./helpers/Icons";

const ThemeSwitch = (props: SwitchProps) => {
    const {
        Component,
        slots,
        isSelected,
        getBaseProps,
        getInputProps,
        getWrapperProps
    } = useSwitch(props);

    useEffect(() => {
        const element = Array.from(document.getElementsByTagName("html"))[0]
        const classToRemove = isSelected ? "light" : "dark"
        const classToAdd = isSelected ? "dark" : "light"
        element.classList.remove(classToRemove)
        element.classList.add(classToAdd)
    }, [isSelected])

    return (
        <div className="flex flex-col gap-2">
            <Component {...getBaseProps()}>
                <VisuallyHidden>
                    <input {...getInputProps()} />
                </VisuallyHidden>
                <div
                    {...getWrapperProps()}
                    className={slots.wrapper({
                        class: [
                            "w-10 h-10",
                            "flex items-center justify-center",
                            "rounded-lg bg-default-100",
                            "border border-default-200 dark:border-default-100",
                            "bg-cyan-400 dark:bg-cyan-400"
                        ],
                    })}
                >
                    {isSelected ? <SunIcon /> : <MoonIcon />}
                </div>
            </Component>
        </div>
    )
}


export default ThemeSwitch;
