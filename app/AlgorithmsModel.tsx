import React, { useEffect, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

export default function AlgorithmsModel({ currentAlgorithm}) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [algorithmInfo, setAlgorithmInfo] = useState("")

    useEffect(() => {
        if (currentAlgorithm === "") return
        const importSpecificComponent = async () => {
            const module = await import('./data/AlgorithmsPatters');
            setAlgorithmInfo(module[currentAlgorithm]);
            onOpen()
        };

        importSpecificComponent()
    }, [currentAlgorithm])

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
                className="h-[80vh]"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{currentAlgorithm}</ModalHeader>
                            <ModalBody className="overflow-scroll">
                                {algorithmInfo}
                            </ModalBody>
                            <ModalFooter>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
