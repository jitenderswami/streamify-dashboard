import React from "react";
import StreamifyIcon from "../../../assets/StreamifyIcon";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../../../components/ui/input-otp";

interface LogingOtpScreenViewProps {
	otpValue: string;
	otpError: string;
	handleOtpInputChange: (val: string) => void;
}

const LogingOtpScreenView: React.FC<LogingOtpScreenViewProps> = ({ otpValue, handleOtpInputChange }) => {
	return (
		<div className="w-full p-[24px] flex flex-col items-center jusitfy-center gap-[64px]">
			<div className="flex gap-[8px] items-center jusitfy-center text-xl font-extrabold italic">
				<div className="w-[80px] h-[80px]">
					<StreamifyIcon />
				</div>
			</div>
			<div className="space-y-2">
				<InputOTP maxLength={4} value={otpValue} onChange={(value) => handleOtpInputChange(value)}>
					<InputOTPGroup>
						<InputOTPSlot index={0} />
						<InputOTPSlot index={1} />
						<InputOTPSlot index={2} />
						<InputOTPSlot index={3} />
					</InputOTPGroup>
				</InputOTP>
			</div>
		</div>
	);
};

export default LogingOtpScreenView;
