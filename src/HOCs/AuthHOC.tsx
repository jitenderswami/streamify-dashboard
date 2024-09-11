import { Navigate } from "react-router-dom";
import { isUserLoggedIn } from "../utils/globalUtils";
import { LOGIN_PATHS } from "../constants/Paths";

interface AuthHOCProps {
	children: React.ReactNode;
}

export const AuthHOC: React.FC<AuthHOCProps> = ({ children }) => {
	if (!isUserLoggedIn()) {
		return <Navigate to={LOGIN_PATHS.PHONE_NUMBER} replace />;
	}

	return <>{children}</>;
};
