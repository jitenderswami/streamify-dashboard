import React from "react";

const StreamifyIcon = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
			<rect x="0" y="0" width="100" height="100" rx="20" ry="20" fill="#09090B" />

			<path d="M30 20 L30 60 Q30 70 20 70 Q10 70 10 60 Q10 50 20 50 Q23 50 25 51 L25 25 L30 20" fill="#ffffff" />
			<circle cx="20" cy="60" r="10" fill="#09090B" stroke="#ffffff" stroke-width="2" />

			<path d="M80 30 L80 70 Q80 80 70 80 Q60 80 60 70 Q60 60 70 60 Q73 60 75 61 L75 35 L80 30" fill="#ffffff" />
			<circle cx="70" cy="70" r="10" fill="#09090B" stroke="#ffffff" stroke-width="2" />
		</svg>
	);
};

export default StreamifyIcon;
