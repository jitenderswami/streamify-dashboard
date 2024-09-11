"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { useQuery } from "@tanstack/react-query";
import { fetchRevenueData } from "../../../../Apis/mockApis";

const chartConfig = {
	desktop: {
		label: "Revenue",
		color: "hsl(var(--foreground))"
	}
} satisfies ChartConfig;

export function RevenueGraph() {
	const { data: chartData } = useQuery({
		queryKey: ["six month revenue"],
		queryFn: () => fetchRevenueData().then((data) => data)
	});
	return (
		<Card>
			<CardHeader>
				<CardTitle>Revenue</CardTitle>
				<CardDescription>January - June 2024</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<BarChart accessibilityLayer data={chartData}>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="month"
							tickLine={false}
							tickMargin={10}
							axisLine={false}
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
						<Bar dataKey="revenue" fill="var(--color-desktop)" radius={8} />
					</BarChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className="flex-col items-start gap-2 text-sm">
				<div className="flex gap-2 font-medium leading-none">
					Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
				</div>
				<div className="leading-none text-muted-foreground">Showing total revenue for the last 6 months</div>
			</CardFooter>
		</Card>
	);
}
