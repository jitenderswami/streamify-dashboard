import { useState } from "react";
import View from "./View";
import { useNavigate } from "react-router-dom";
import { LOGIN_PATHS } from "../../../constants/Paths";
import { DashBoardStore } from "../../../store/Store";

const Container = () => {
	const navigate = useNavigate();
	const [phoneNumber, setPhoneNumber] = useState<string>("");
	const { setPhoneNumber: setUserPhoneNumber } = DashBoardStore();

	const handleTextFieldInputChange = (val: string) => {
		if (/^\d*$/.test(val) && val.length <= 10) {
			setPhoneNumber(val);
		}
	};

	const handleNextClick = () => {
		setUserPhoneNumber(phoneNumber);
		navigate(LOGIN_PATHS.OTP);
	};
	return (
		<View
			phoneNumber={phoneNumber}
			handleTextFieldInputChange={handleTextFieldInputChange}
			handleNextClick={handleNextClick}
		/>
	);
};

export default Container;
