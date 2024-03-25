'use client';

import React, { useContext } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Switch } from '@nextui-org/react';
import { GitHubIcon } from '../../helpers/Icons';
import ThemeSwitch from './themeSwitch';
import ProblemList from './problemListModal';
import SearchModal from './searchModal';
import { DataContext } from '../../context/dataContext';
import SignInButton from './signInButton';
import ChallengeListButton from './challengeListButton';
import AddReduceSizeButtons from './addReduceSizeButtons';

export default function NavBar({challengeTitle}) {
    const { data } = useContext(DataContext);
    const isFullScreen = data.isFullScreen;

    return (
        <>
            {!isFullScreen && (
                <Navbar maxWidth="full" className="h-[4rem]">
                    <NavbarBrand className="hidden sm:flex gap-4">
                        <Button
                            variant="bordered"
                            aria-label="Take a photo"
                            size="md"
                            radius="sm"
                            className="border border-cyan-400 dark:border-cyan-400 text-cyan-400"
                        >
                            Challenges
                        </Button>
                        <ChallengeListButton />
                    </NavbarBrand>
                    <NavbarContent className="hidden sm:flex gap-4" justify="center">
                        <NavbarItem>
                            <h3 className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-unit-4 min-w-unit-20 h-unit-10 text-small gap-unit-2 rounded-small [&>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors motion-reduce:transition-none bg-transparent text-foreground border border-default-300 dark:border-default-100">{challengeTitle}</h3>
                        </NavbarItem>
                    </NavbarContent>
                    <NavbarContent justify="end" className="gap-2">
                        <SearchModal />
                        <AddReduceSizeButtons />
                        <ThemeSwitch />
                        <SignInButton />
                        <Button
                            isIconOnly
                            variant="bordered"
                            aria-label="Take a photo"
                            size="md"
                            radius="sm"
                            className="border border-default-300 dark:border-default-100"
                        >
                            <GitHubIcon />
                        </Button>
                    </NavbarContent>
                </Navbar>
            )}
        </>
    );
}
