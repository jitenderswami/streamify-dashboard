"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
	ChartConfig,
	ChartContainer,
	ChartLegend,
	ChartLegendContent,
	ChartTooltip,
	ChartTooltipContent
} from "@/components/ui/chart";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GrowthDataPointType } from "../../../../Apis/mockData";

export const description = "An interactive area chart";

const chartConfig = {
	visitors: {
		label: "Visitors"
	},
	total: {
		label: "Total users",
		color: "hsl(var(--card-foreground))"
	},
	active: {
		label: "Active users",
		color: "hsl(var(--muted-foreground))"
	}
} satisfies ChartConfig;

interface UserGrowthChartProps {
	chartData: GrowthDataPointType[];
}
export const UserGrowthChart: React.FC<UserGrowthChartProps> = ({ chartData }) => {
	const [timeRange, setTimeRange] = React.useState("7d");

	const filteredData = React.useMemo(() => {
		if (timeRange === "90d") return chartData.slice(0, 91);
		if (timeRange === "30d") return chartData.slice(0, 31);
		if (timeRange === "7d") return chartData.slice(0, 8);
	}, [timeRange]);

	return (
		<Card>
			<CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
				<div className="grid flex-1 gap-1 text-center sm:text-left">
					<CardTitle>User growth chart</CardTitle>
					<CardDescription>Showing total and active users for the last 3 months</CardDescription>
				</div>
				<Select value={timeRange} onValueChange={setTimeRange}>
					<SelectTrigger className="w-[160px] rounded-lg sm:ml-auto" aria-label="Select a value">
						<SelectValue placeholder="Last 3 months" />
					</SelectTrigger>
					<SelectContent className="rounded-xl">
						<SelectItem value="90d" className="rounded-lg">
							Last 3 months
						</SelectItem>
						<SelectItem value="30d" className="rounded-lg">
							Last 30 days
						</SelectItem>
						<SelectItem value="7d" className="rounded-lg">
							Last 7 days
						</SelectItem>
					</SelectContent>
				</Select>
			</CardHeader>
			<CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
				<ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full">
					{React.useMemo(
						() => (
							<AreaChart data={filteredData}>
								<defs>
									<linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
										<stop offset="5%" stopColor="var(--color-total)" stopOpacity={0.8} />
										<stop offset="95%" stopColor="var(--color-total)" stopOpacity={0.1} />
									</linearGradient>
									<linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
										<stop offset="5%" stopColor="var(--color-active)" stopOpacity={0.8} />
										<stop offset="95%" stopColor="var(--color-active)" stopOpacity={0.1} />
									</linearGradient>
								</defs>
								<CartesianGrid vertical={false} />
								<XAxis
									dataKey="date"
									tickLine={false}
									axisLine={false}
									tickMargin={8}
									minTickGap={32}
									tickFormatter={(value) => {
										const date = new Date(value);
										return date.toLocaleDateString("en-US", {
											month: "short",
											day: "numeric"
										});
									}}
								/>
								<ChartTooltip
									cursor={false}
									content={
										<ChartTooltipContent
											labelFormatter={(value) => {
												return new Date(value).toLocaleDateString("en-US", {
													month: "short",
													day: "numeric"
												});
											}}
											indicator="dot"
										/>
									}
								/>
								<Area
									dataKey="active"
									type="natural"
									fill="url(#fillActive)"
									stroke="var(--color-active)"
									stackId="a"
								/>
								<Area
									dataKey="total"
									type="natural"
									fill="url(#fillTotal)"
									stroke="var(--color-total)"
									stackId="a"
								/>
								<ChartLegend content={<ChartLegendContent />} />
							</AreaChart>
						),
						[filteredData]
					)}
				</ChartContainer>
			</CardContent>
		</Card>
	);
};
