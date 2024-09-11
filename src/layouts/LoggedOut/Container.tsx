import { Outlet } from "react-router-dom";
import View from "./View";

const Container = () => {
	return (
		<View>
			<Outlet />
		</View>
	);
};

export default Container;
