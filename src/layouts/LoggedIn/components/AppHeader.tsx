import { useNavigate } from "react-router-dom";
import StreamifyIcon from "../../../assets/StreamifyIcon";
import { LogOut } from "lucide-react";
import { LOGGED_IN_PATHS, LOGIN_PATHS } from "../../../constants/Paths";
import { LOCAL_STROAGE_KEYS } from "../../../constants/LocalStroageKeys";

const AppHeader = () => {
	const navigate = useNavigate();

	const handleLogoutClick = () => {
		localStorage.removeItem(LOCAL_STROAGE_KEYS.USER_ID);
		navigate(LOGIN_PATHS.PHONE_NUMBER);
	};

	const handleAppLogoClick = () => {
		navigate(LOGGED_IN_PATHS.HOME);
	};
	return (
		<div className="w-full flex items-center justify-between p-[12px]">
			<div className="flex gap-[12px] items-center">
				<div className="w-[50px] h-[50px] " onClick={handleAppLogoClick}>
					<StreamifyIcon />
				</div>
				<div className="text-3xl font-bold text-muted-foreground tracking-widest italic">
					Streamify Dashboard
				</div>
			</div>

			<div onClick={handleLogoutClick}>
				<LogOut />
			</div>
		</div>
	);
};

export default AppHeader;
