"use client"

import React, {useState} from "react"
import ChallengeListModal from '../ChallengeListModal/ChallengeListModal';
import { Button } from "@nextui-org/react";
import {ListIcon} from "../../helpers/Icons"

export default function ChallengeListButton() {
    const [openModal, setOpenModal] = useState(false)
    return (
        <>
            <Button
                onPress={() => setOpenModal(true)}
                variant="bordered"
                aria-label="open challenge list"
                size="md"
                radius="sm"
                className="border border-default-300 dark:border-default-100"
            >
                <ListIcon />
                Challenge list
            </Button>
            <ChallengeListModal openOnRender={openModal} onClose={() => setOpenModal(false)} />
        </>
    );
}
