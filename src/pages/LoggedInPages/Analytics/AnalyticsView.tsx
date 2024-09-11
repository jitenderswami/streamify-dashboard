import React from "react";
import { GrowthDataPointType, RevenueSourcesDataPointType, SongDataPoint } from "../../../Apis/mockData";
import { UserGrowthChart } from "./components/UserGrowthChart";
import { RevenueDistributionChart } from "./components/RevenueDistributionChart";
import { TopFiveStreamChart } from "./components/TopFiveStreamChart";

interface AnalyticsViewProps {
	userGrowthData?: GrowthDataPointType[];
	revenueSourcesData?: RevenueSourcesDataPointType[];
	topSongs?: SongDataPoint[];
}

const AnalyticsView: React.FC<AnalyticsViewProps> = ({ userGrowthData, revenueSourcesData, topSongs }) => {
	return (
		<div className="w-full flex flex-col gap-[24px] pb-[16px]">
			<div className="w-full">
				<UserGrowthChart chartData={userGrowthData || []} />
			</div>
			<div className="w-full flex flex-col md:flex-row gap-[24px]">
				<div className="md:w-1/2 aspect-10/9">
					<RevenueDistributionChart chartData={revenueSourcesData || []} />
				</div>
				<div className="md:w-1/2 md:aspect-10/9">
					<TopFiveStreamChart chartData={topSongs || []} />
				</div>
			</div>
		</div>
	);
};

export default AnalyticsView;
