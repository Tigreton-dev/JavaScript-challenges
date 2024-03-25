import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Button } from '@nextui-org/react';

export default function SignInButton() {
    const { data: session, status } = useSession();

    if (status === 'authenticated') {
        return (
            <Button
                onClick={() => signOut()}
                variant="bordered"
                aria-label="Take a photo"
                size="md"
                radius="sm"
                className="border border-default-300 dark:border-default-100"
            >
                Sign Out
            </Button>
        );
    }
    return (
        <Button
            onClick={() => signIn('google')}
            variant="bordered"
            aria-label="Take a photo"
            size="md"
            radius="sm"
            className="border border-default-300 dark:border-default-100"
        >
            Sign In
        </Button>
    );
}
