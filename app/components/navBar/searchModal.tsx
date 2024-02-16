import React from "react";
import { Input, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { SearchIcon } from "../../helpers/Icons"
export default function SearchModal() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	return (
		<>
			<Button onPress={onOpen} variant="bordered" aria-label="Take a photo" size="md" radius="sm" className="border border-default-300 dark:border-default-100">
				<SearchIcon />
				Type to search...
			</Button>
			<Modal
				hideCloseButton={true}
				backdrop="opaque"
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				placement="top"
				classNames={{
					base: "overflow-hidden border border-default-300 bg-gradient-to-br from-white to-default-100 dark:from-black dark:to-default-50 h-[400px]",
					header: "border-b-[1px] border-default-300",
					footer: "border-t-[1px] border-default-300",
					closeButton: "hover:bg-white/5 active:bg-white/10",
				}}
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
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1 p-2">
								<Input
									placeholder="Type to search..."
									variant="bordered"
									startContent={<SearchIcon />}
									classNames={{
										base: "border-none",
										inputWrapper: "border-none",
										innerWrapper: "border-none",
										input: "border-none"
									}}
								/>
							</ModalHeader>
							<ModalBody>

							</ModalBody>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}
