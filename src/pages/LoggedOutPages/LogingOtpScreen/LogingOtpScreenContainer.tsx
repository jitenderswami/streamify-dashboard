/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import LogingOtpScreenView from "./LogingOtpScreenView";
import LoginAnimation from "./components/LoginAnimation";
import { DashBoardStore } from "../../../store/Store";
import { generateRandomAlphanumeric } from "../../../utils/globalUtils";
import { useNavigate } from "react-router-dom";
import { LOGGED_IN_PATHS } from "../../../constants/Paths";
import { LOCAL_STROAGE_KEYS } from "../../../constants/LocalStroageKeys";

const LogingOtpScreenContainer: React.FC = () => {
	const navigate = useNavigate();
	const { user, setUserDetails } = DashBoardStore();

	const [otpError, setOtpError] = useState<string>("");
	const [otpValue, setOtpValue] = useState<string>("");

	const [showOtpScreen, setShowOtpScreen] = useState(true);
	const handleOtpInputChange = (event: string) => {
		const enteredOTP = event;

		if (enteredOTP?.length > 4) {
			return;
		}
		setOtpValue(enteredOTP);
		if (enteredOTP?.length === 4) {
			setShowOtpScreen(false);
			/**
			 * Mock API call to verify the OTP and loggin the user
			 */
			setTimeout(() => {
				const userId = generateRandomAlphanumeric();
				const name = user?.phoneNumber + userId;
				localStorage.setItem(LOCAL_STROAGE_KEYS.USER_ID, userId);
				setUserDetails({ userId, name });

				navigate(LOGGED_IN_PATHS.HOME);
			}, 6000);
			return;
		}
	};

	return (
		<>
			{!showOtpScreen && <LoginAnimation />}
			{showOtpScreen && (
				<LogingOtpScreenView
					otpValue={otpValue}
					otpError={otpError}
					handleOtpInputChange={handleOtpInputChange}
				/>
			)}
		</>
	);
};

export default LogingOtpScreenContainer;
