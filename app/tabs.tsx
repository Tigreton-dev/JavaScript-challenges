import React from "react";
import { Tabs, Tab, Chip, Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { GalleryIcon, VideoIcon, MusicIcon } from "./helpers/Icons";

export default function TabComponent({ onTabChange }) {
	return (
		<Navbar isBlurred={false} maxWidth="full" className="bg-none h-12">
			<div className="flex w-full flex-col">
				<Tabs
					aria-label="Options"
					color="primary"
					variant="underlined"
					classNames={{
						tabList: "gap-6 w-full relative rounded-none p-0  border-divider",
						cursor: "w-full bg-cyan-400",
						tab: "max-w-fit p-0 h-12",
						tabContent: "group-data-[selected=true]:text-cyan-400"
					}}
				>
					<Tab
						key="photos"
						title={
							<div className="flex items-center space-x-2" onClick={() => onTabChange(0)}>
								<GalleryIcon />
								<span>Description</span>
							</div>
						}
					/>
					<Tab
						key="music"
						title={
							<div className="flex items-center space-x-2" onClick={() => onTabChange(1)}>
								<MusicIcon />
								<span>Solution</span>
							</div>
						}
					/>
					<Tab
						key="videos"
						title={
							<div className="flex items-center space-x-2" onClick={() => onTabChange(2)}>
								<VideoIcon />
								<span>Test Cases</span>
							</div>
						}
					/>
					<Tab
						key="bb"
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
