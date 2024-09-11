"use client";

import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { SongDataPoint } from "../../../../Apis/mockData";

export const description = "A bar chart with a custom label";

// const chartData = [
// 	{ name: "January", count: 186 },
// 	{ name: "February", count: 305 },
// 	{ name: "March", count: 237 },
// 	{ name: "April", count: 73 },
// 	{ name: "May", count: 209 }
// ];

const chartConfig = {
	count: {
		label: "Count",
		color: "hsl(var(--foreground))"
	},
	label: {
		color: "hsl(var(--background))"
	}
} satisfies ChartConfig;

interface TopFiveStreamChart {
	chartData: SongDataPoint[];
}

export const TopFiveStreamChart: React.FC<TopFiveStreamChart> = ({ chartData }) => {
	return (
		<Card className="w-full h-full">
			<CardHeader>
				<CardTitle>Top 5 streamed songs</CardTitle>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig} className="w-full min-h-full">
					<BarChart
						accessibilityLayer
						data={chartData}
						layout="vertical"
						margin={{
							right: 0
						}}
					>
						<CartesianGrid horizontal={false} />
						<YAxis
							dataKey="name"
							type="category"
							tickLine={false}
							tickMargin={10}
							axisLine={false}
							tickFormatter={(value) => value.slice(0, 3)}
							hide
						/>
						<XAxis dataKey="count" type="number" hide />
						<ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
						<Bar dataKey="count" layout="vertical" fill="var(--color-count)" radius={4}>
							<LabelList
								dataKey="name"
								position="insideLeft"
								offset={8}
								className="fill-[--color-label]"
								fontSize={12}
							/>
							<LabelList
								dataKey="count"
								position="insideRight"
								offset={8}
								className="fill-[--color-label]"
								fontSize={12}
							/>
						</Bar>
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
};
