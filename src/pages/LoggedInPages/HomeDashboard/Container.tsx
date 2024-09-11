import { useQuery } from "@tanstack/react-query";
import View from "./View";
import { fetchPlatformMetrics, fetchTopStreamedSongs } from "../../../Apis/mockApis";
import { METRICS, TOP_SONGS } from "../../../Apis/mockData";

const Container = () => {
	const { data: metricData } = useQuery({
		queryKey: ["dashboard-metric"],
		queryFn: () => fetchPlatformMetrics().then((metrices) => metrices)
	});
	const { data: topSongs } = useQuery({
		queryKey: ["top songs"],
		queryFn: () => fetchTopStreamedSongs().then((topSongs) => topSongs)
	});
	return <View metricData={metricData as typeof METRICS} topSongs={topSongs as (typeof TOP_SONGS)[number][]} />;
};

export default Container;
