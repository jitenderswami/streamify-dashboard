import { useEffect, useState } from "react";

const LoginAnimation = () => {
	const [step, setStep] = useState(0);
	const messages = ["Logging you in...", "Fetching your data...", "Building your dashboard..."];

	useEffect(() => {
		const timer = setInterval(() => {
			setStep((prevStep) => (prevStep + 1) % messages.length);
		}, 2000);

		return () => clearInterval(timer);
	}, []);

	return (
		<div className="flex flex-col items-center justify-center h-screen bg-background">
			<svg width="200" height="200" viewBox="0 0 100 100">
				<circle cx="50" cy="50" r="45" fill="none" stroke="#e0e0e0" strokeWidth="8" />
				<circle
					cx="50"
					cy="50"
					r="45"
					fill="none"
					stroke="#09090B"
					strokeWidth="8"
					strokeDasharray="283"
					strokeDashoffset="283"
					transform="rotate(-90 50 50)"
				>
					<animate attributeName="stroke-dashoffset" from="283" to="0" dur="6s" repeatCount="indefinite" />
				</circle>
				{/* <text x="50" y="50" textAnchor="middle" dy="0.3em" fill="#09090B" fontSize="24" fontWeight="bold">
					{step + 1}
				</text> */}
			</svg>
			<p className="mt-8 text-2xl font-semibold text-[#09090B]">{messages[step]}</p>
		</div>
	);
};

export default LoginAnimation;
