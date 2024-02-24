"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@nextui-org/react";

const SigninButton = () => {
    const { data: session } = useSession();

    if (session && session.user) {
        return (
            <Button onClick={() => signOut()} variant="bordered" aria-label="Take a photo" size="md" radius="sm" className="border border-default-300 dark:border-default-100">
                Sign Out
            </Button>
        );
    }
    return (
        <Button onClick={() => signIn("google")} variant="bordered" aria-label="Take a photo" size="md" radius="sm" className="border border-default-300 dark:border-default-100">
            Sign In
        </Button>

    );
};

export default SigninButton;