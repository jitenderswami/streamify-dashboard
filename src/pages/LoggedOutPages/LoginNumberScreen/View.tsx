import StreamifyIcon from "../../../assets/StreamifyIcon";
import React from "react";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";

interface ViewProps {
	phoneNumber: string;
	handleTextFieldInputChange: (val: string) => void;
	handleNextClick: () => void;
}

const View: React.FC<ViewProps> = ({ phoneNumber, handleTextFieldInputChange, handleNextClick }) => {
	return (
		<div className="w-full p-[24px] flex flex-col items-center jusitfy-center gap-[64px]">
			<div className="flex gap-[8px] items-center jusitfy-center text-xl font-extrabold italic">
				<div className="w-[80px] h-[80px]">
					<StreamifyIcon />
				</div>
			</div>

			<div className="w-full md:w-[400px] md:max-w-[400px] flex flex-col gap-[16px]">
				<div className="text-lg font-semibold">Login/Signup</div>
				<Input value={phoneNumber} onChange={(val) => handleTextFieldInputChange(val.target.value)} />
				<Button onClick={handleNextClick} disabled={phoneNumber.length < 10}>
					Next
				</Button>
			</div>
		</div>
	);
};

export default View;
