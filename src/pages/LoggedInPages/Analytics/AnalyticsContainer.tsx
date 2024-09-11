import React from "react";
import AnalyticsView from "./AnalyticsView";
import { useQuery } from "@tanstack/react-query";
import { fetchRevenueSources, fetchTopStreamedSongs, fetchUserGrowthData } from "../../../Apis/mockApis";

const AnalyticsContainer: React.FC = () => {
	const { data: userGrowthData } = useQuery({
		queryKey: ["user-growth-data"],
		queryFn: () => fetchUserGrowthData().then((data) => data)
	});
	const { data: revenueSourcesData } = useQuery({
		queryKey: ["revenue-sources-data"],
		queryFn: () => fetchRevenueSources().then((data) => data)
	});

	const { data: topSongs } = useQuery({
		queryKey: ["top songs", 5],
		queryFn: () => fetchTopStreamedSongs(5).then((topSongs) => topSongs)
	});

	return (
		<AnalyticsView userGrowthData={userGrowthData} revenueSourcesData={revenueSourcesData} topSongs={topSongs} />
	);
};

export default AnalyticsContainer;
