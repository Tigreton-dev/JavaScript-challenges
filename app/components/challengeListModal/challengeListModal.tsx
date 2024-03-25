'use client';

import React, { useEffect, useState } from 'react';
import { Tabs, Tab, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from '@nextui-org/react';
import { MackOsTitleBar } from '../../helpers';
import CategorySelector from './categorySelector';
import ChallengeList from './challengeList';
import challenges from '../../data/challengeList.json';
import DifficultySelector from './DifficultySelector';

export default function ChallengeListModal({ openOnRender, onClose }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [list, setList] = useState(challenges.All.All);
    const [difficulty, setDifficulty] = useState('All');
    const [category, setCategory] = useState('All');

    const filterListByDifficulty = newDifficulty => {
        setDifficulty(newDifficulty);
        setList(challenges[category][newDifficulty]);
    };

    const filterByCategory = newCategory => {
        setCategory(newCategory);
        challenges[newCategory] === undefined ? setList(undefined) : setList(challenges[newCategory][difficulty]);
    };

    useEffect(() => {
        if (openOnRender) onOpen();
    }, [openOnRender]);

    useEffect(() => {
        onClose();
    }, [onOpenChange]);

    return (
        <>
            <Modal
                scrollBehavior="inside"
                size="xl"
                classNames={{
                    wrapper: 'overflow-hidden',
                    base: 'overflow-hidden border border-default-300 bg-[white] dark:bg-[black] min-h-[95vh]',
                    header: 'border-b-[1px] border-default-300 p-0',
                    footer: 'justify-center border-t-[1px] border-default-300'
                }}
                backdrop="opaque"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                motionProps={{
                    variants: {
                        enter: {
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.3,
                                ease: 'easeOut'
                            }
                        },
                        exit: {
                            y: -20,
                            opacity: 0,
                            transition: {
                                duration: 0.2,
                                ease: 'easeIn'
                            }
                        }
                    }
                }}
            >
                <ModalContent>
                    {onClose => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 items-center">
                                {/* <MackOsTitleBar /> */}
                                <CategorySelector
                                    category={category}
                                    setCategory={category => filterByCategory(category)}
                                />
                            </ModalHeader>
                            <ModalBody>
                                <ChallengeList list={list} category={category} onClose={onClose} />
                            </ModalBody>
                            <ModalFooter>
                                <DifficultySelector filterListByDifficulty={dif => filterListByDifficulty(dif)} />
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
