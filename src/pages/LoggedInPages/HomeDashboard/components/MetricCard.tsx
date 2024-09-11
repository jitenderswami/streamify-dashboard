import React from "react";
import { Card } from "../../../../components/ui/card";

type MetricCardProps = {
	header: string;
	title: string;
	subtitle: string;
	icon: JSX.Element;
};

const MetricCard: React.FC<MetricCardProps> = ({ header, title, subtitle, icon }) => {
	return (
		<Card className="w-full p-4">
			<div className="w-full flex justify-between">
				<div className="tracking-light text-sm font-medium">{header}</div>
				{icon}
			</div>
			<div className="w-full flex flex-col gap-[4px]">
				<div className="text-2xl font-bold">{title}</div>

				<div className="text-xs text-muted-foreground">{subtitle}</div>
			</div>
		</Card>
	);
};

export default MetricCard;
