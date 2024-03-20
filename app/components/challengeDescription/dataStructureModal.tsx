import React, { useEffect, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

export default function DataStructureModal({ currentDataStructure }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [dataStructureInfo, setDataStructureInfo] = useState("")

    useEffect(() => {
        if (currentDataStructure === "") return
        const importSpecificComponent = async () => {
            const module = await import('../../data/DataStructureInfo');
            setDataStructureInfo(module[currentDataStructure]);
            onOpen()
        };

        importSpecificComponent()
    }, [currentDataStructure])

    return (
        <>
            <Modal
                size="xl"
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
                                ease: "easeOut",
                            },
                        },
                        exit: {
                            y: -20,
                            opacity: 0,
                            transition: {
                                duration: 0.2,
                                ease: "easeIn",
                            },
                        },
                    }
                }}
                className="h-[80vh] border border-default-300 dark:border-default-100 "
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 bg-[white] dark:bg-[black]">{currentDataStructure}</ModalHeader>
                            <ModalBody className="overflow-scroll bg-[white] dark:bg-[black]">
                                {dataStructureInfo}
                            </ModalBody>
                            <ModalFooter className="bg-[white] dark:bg-[black]">
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
