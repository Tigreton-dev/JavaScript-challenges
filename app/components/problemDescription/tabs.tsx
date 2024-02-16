import React from "react";
import { Tabs, Tab, Chip, Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { DescriptionIcon, VideoIcon, MusicIcon, TestIcon, CheckSolutionIcon } from "../../helpers/Icons";


export default function TabComponent({ onTabChange }) {
	return (
		<Navbar isBlurred={false} maxWidth="full" className="bg-none h-12">
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
						tabContent: "group-data-[selected=true]:text-cyan-400",
					}}
				>
					<Tab
						key="0"
						title={
							<div className="flex items-center space-x-2">
								<DescriptionIcon />
								<span>Description</span>
							</div>
						}
					/>
					<Tab
						key="1"
						title={
							<div className="flex items-center space-x-2">
								<CheckSolutionIcon />
								<span>Solution</span>
							</div>
						}
					/>
					<Tab
						key="2"
						title={
							<div className="flex items-center space-x-2">
								<TestIcon />
								<span>Test Cases</span>
							</div>
						}
					/>
					<Tab
						key="3"
						title={
							<div className="flex items-center space-x-2">
								<VideoIcon />
								<span>Video</span>
							</div>
						}
					/>
				</Tabs>

			</div>
		</Navbar>
	);
}
