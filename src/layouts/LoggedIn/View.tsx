import React from "react";
import AppHeader from "./components/AppHeader";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Separator } from "../../components/ui/separator";
import { DASHBOARD_TABS } from "./constants/constants";

interface ViewProps {
	children: React.ReactNode;
	handleTabClick: (tab: (typeof DASHBOARD_TABS)[number]) => void;
	activeTab: (typeof DASHBOARD_TABS)[number];
}

const View: React.FC<ViewProps> = ({ children, handleTabClick, activeTab }) => {
	return (
		<div className="w-[100vw] h-[100vh]">
			<AppHeader />
			<Separator />
			<div className="w-full flex flex-col gap-[12px] px-[8px] pt-[12px]  md:px-[12px] md:pt-[16px]">
				<div className="w-[300px]">
					<Tabs defaultValue={DASHBOARD_TABS[0].key} value={activeTab.key}>
						<TabsList className="flex items-start gap-[20px]">
							{DASHBOARD_TABS.map((tab) => (
								<TabsTrigger value={tab.key} key={tab.path} onClick={() => handleTabClick(tab)}>
									{tab.label}
								</TabsTrigger>
							))}
						</TabsList>
					</Tabs>
				</div>
				{children}
			</div>
		</div>
	);
};

export default View;
