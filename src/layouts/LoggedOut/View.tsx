import React from "react";
import useIsDesktop from "../../hooks/useIsDesktop";
import StreamifyIcon from "../../assets/StreamifyIcon";

interface ViewProps {
	children: React.ReactNode;
}

const View: React.FC<ViewProps> = ({ children }) => {
	const isDesktop = useIsDesktop();

	if (!isDesktop) {
		return <div className="h-[100vh] w-[100vw] flex items-center justify-center bg-[#f0f6ff]">{children}</div>;
	}

	return (
		<div className="flex h-[100vh] w-[100vw]">
			<div className="flex items-center justify-center bg-foreground w-1/2 h-full">
				<div>
					<div className="w-[200px] aspect-1">
						<StreamifyIcon />
					</div>
					<div className="text-3xl font-bold text-muted tracking-widest italic">Streamify</div>
				</div>
			</div>
			<div className="flex items-center justify-center bg-background w-1/2  h-full">{children}</div>
		</div>
	);
};

export default View;
