import MetricCard from "./components/MetricCard";
import { useQuery } from "@tanstack/react-query";
import { fetchPlatformMetrics, fetchTopStreamedSongs } from "../../../Apis/mockApis";
import { ActivityIcon, DollarSign, Music2Icon, UserIcon } from "lucide-react";
import { Card } from "../../../components/ui/card";
import { RevenueGraph } from "./components/RevenueGraph";
import { METRICS, TOP_SONGS } from "../../../Apis/mockData";
import React from "react";

interface ViewProps {
	metricData: typeof METRICS;
	topSongs: (typeof TOP_SONGS)[number][];
}

const View: React.FC<ViewProps> = () => {
	const { data: metricData } = useQuery({
		queryKey: ["dashboard-metric"],
		queryFn: () => fetchPlatformMetrics().then((metrices) => metrices)
	});
	const { data: topSongs } = useQuery({
		queryKey: ["top songs"],
		queryFn: () => fetchTopStreamedSongs().then((topSongs) => topSongs)
	});

	return (
		<div className="w-full flex flex-col gap-[24px] pb-[32px]">
			<div className="grid gap-4 grid-cols-2 md:grid-cols-3">
				<MetricCard
					header="Total users"
					subtitle={`+${metricData?.totalUsers?.percentIncrement}% from last month`}
					title={metricData?.totalUsers?.count?.toLocaleString() || ""}
					icon={<UserIcon width={16} height={16} />}
				/>
				<MetricCard
					header="Total streams"
					subtitle={`+${metricData?.totalStreams?.percentIncrement}% from last month`}
					title={metricData?.totalStreams?.count?.toLocaleString() || ""}
					icon={<Music2Icon width={16} height={16} />}
				/>
				<MetricCard
					header="Total revenue"
					subtitle={`+${metricData?.revenue?.percentIncrement}% from last month`}
					title={`$${metricData?.revenue?.amount?.toLocaleString() || ""}`}
					icon={<DollarSign width={16} height={16} />}
				/>
				<MetricCard
					header="Active users"
					subtitle={`+${metricData?.activeUsers?.percentIncrement}% since last hour`}
					title={metricData?.totalUsers?.count?.toLocaleString() || ""}
					icon={<ActivityIcon width={16} height={16} />}
				/>

				<MetricCard
					header="Top artist"
					subtitle={`${metricData?.topArtist?.lastMonth} topped last month`}
					title={metricData?.topArtist?.currentMonth?.toLocaleString() || ""}
					icon={<ActivityIcon width={16} height={16} />}
				/>
			</div>
			<div className="w-full flex flex-col h-[min-content] md:flex-row gap-[24px]">
				<div className="w-full md:w-1/2">
					<RevenueGraph />
				</div>
				<Card className="w-full md:w-1/2 p-[24px] aspect-[2/1] md:overflow-y-scroll">
					<div className="flex flex-col gap-[2px]">
						<div className="font-semibold">Top 10 streamed songs</div>
						<div className="text-sm text-muted-foreground">In last 24 hours</div>
					</div>
					<div className="flex flex-col w-full">
						{topSongs &&
							topSongs?.map((song) => (
								<div className="flex justify-between py-[12px] w-full">
									<div className="flex gap-[24px] items-center justify-center">
										<span className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9">
											<img
												className="aspect-square h-full w-full"
												alt="Avatar"
												src={song.artistImage}
											/>
										</span>
										<div>
											<div className="text-sm font-medium leading-none">{song?.name}</div>
											<div className="text-sm text-muted-foreground">{song?.artist}</div>
										</div>
									</div>
									<div className="ml-auto font-medium">{song?.count.toLocaleString()}</div>
								</div>
							))}
					</div>
				</Card>
			</div>
		</div>
	);
};

export default View;
