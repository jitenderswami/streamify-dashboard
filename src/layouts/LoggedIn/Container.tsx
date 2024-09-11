import { Outlet, useLocation, useNavigate } from "react-router-dom";
import View from "./View";
import { DASHBOARD_TABS } from "./constants/constants";
import { useEffect, useState } from "react";

const Container = () => {
	const [activeTab, setActiveTab] = useState<(typeof DASHBOARD_TABS)[number]>(DASHBOARD_TABS[0]);
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		setActiveTab(
			DASHBOARD_TABS.find((tab) => tab.path === location.pathname) || ({} as (typeof DASHBOARD_TABS)[number])
		);
	}, [location.pathname]);

	const handleTabClick = (tab: (typeof DASHBOARD_TABS)[number]) => {
		navigate(tab.path);
		setActiveTab(activeTab);
	};
	return (
		<View handleTabClick={handleTabClick} activeTab={activeTab}>
			<Outlet />
		</View>
	);
};

export default Container;
