"use client";

import * as React from "react";
import { Label, Pie, PieChart, Sector } from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartStyle, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RevenueSourcesDataPointType } from "../../../../Apis/mockData";

const chartConfig = {
	revenue: {
		label: "Revenue"
	},
	Ads: {
		label: "Ads",
		color: "hsl(var(--chart-1))"
	},
	Subscriptions: {
		label: "Subscriptions",
		color: "hsl(var(--chart-2))"
	},
	"In-App Purchases": {
		label: "In-App Purchases",
		color: "hsl(var(--chart-3))"
	},
	Merchandise: {
		label: "Merchandise",
		color: "hsl(var(--chart-4))"
	},
	Partnerships: {
		label: "Partnerships",
		color: "hsl(var(--chart-5))"
	}
} satisfies ChartConfig;

type RevenueDistributionChartProps = {
	chartData: RevenueSourcesDataPointType[];
};

export const RevenueDistributionChart: React.FC<RevenueDistributionChartProps> = ({ chartData }) => {
	const id = "pie-interactive";
	const [activeSource, setActiveSource] = React.useState(chartData[0]?.source);

	const activeIndex = React.useMemo(
		() => chartData?.findIndex((item) => item?.source === activeSource),
		[activeSource]
	);
	const sources = React.useMemo(
		() => chartData?.map((item) => ({ key: item?.source, color: item?.fill })),
		[chartData]
	);

	React.useEffect(() => {
		setActiveSource(chartData[0]?.source);
	}, [chartData]);

	return (
		<Card data-chart={id} className="flex flex-col w-full h-full">
			<ChartStyle id={id} config={chartConfig} />
			<CardHeader className="flex-row items-start space-y-0 pb-0">
				<div className="grid gap-1">
					<CardTitle>Revenue distribution chart</CardTitle>
					<CardDescription>Revnue is in $</CardDescription>
				</div>
				<Select value={activeSource} onValueChange={setActiveSource}>
					<SelectTrigger className="ml-auto h-7 w-[130px] rounded-lg pl-2.5" aria-label="Select a value">
						<SelectValue placeholder="Select source" />
					</SelectTrigger>
					<SelectContent align="end" className="rounded-xl">
						{sources?.map((source) => {
							return (
								<SelectItem key={source?.key} value={source?.key} className="rounded-lg [&_span]:flex">
									<div className="flex items-center gap-2 text-xs">
										<span
											className="flex h-3 w-3 shrink-0 rounded-sm"
											style={{
												backgroundColor: `${source?.color}`
											}}
										/>
										{source?.key}
									</div>
								</SelectItem>
							);
						})}
					</SelectContent>
				</Select>
			</CardHeader>
			<CardContent className="flex flex-1 justify-center pb-0">
				<ChartContainer id={id} config={chartConfig} className="mx-auto aspect-square w-full max-w-[300px]">
					<PieChart>
						<ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
						<Pie
							data={chartData}
							dataKey="revenue"
							nameKey="source"
							innerRadius={60}
							strokeWidth={5}
							activeIndex={activeIndex}
							activeShape={({ outerRadius = 0, ...props }: PieSectorDataItem) => (
								<g>
									<Sector {...props} outerRadius={outerRadius + 10} />
									<Sector {...props} outerRadius={outerRadius + 25} innerRadius={outerRadius + 12} />
								</g>
							)}
						>
							<Label
								content={({ viewBox }) => {
									if (viewBox && "cx" in viewBox && "cy" in viewBox) {
										return (
											<text
												x={viewBox.cx}
												y={viewBox.cy}
												textAnchor="middle"
												dominantBaseline="middle"
											>
												<tspan
													x={viewBox.cx}
													y={viewBox.cy}
													className="fill-foreground text-3xl font-bold"
												>
													{chartData[activeIndex]?.revenue.toLocaleString()}
												</tspan>
												<tspan
													x={viewBox.cx}
													y={(viewBox.cy || 0) + 24}
													className="fill-muted-foreground"
												>
													Revenue
												</tspan>
											</text>
										);
									}
								}}
							/>
						</Pie>
					</PieChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
};
