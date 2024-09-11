import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { LOGGED_IN_PATHS, LOGIN_PATHS } from "./constants/Paths";
import { isUserLoggedIn } from "./utils/globalUtils";
import LoggedOutLayout from "./layouts/LoggedOut";
import LoggedInLayout from "./layouts/LoggedIn";
import { AuthHOC } from "./HOCs/AuthHOC";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LucideLoaderCircle } from "lucide-react";

// Lazing loading components pages.
const HomeDashboard = lazy(() => import("./pages/LoggedInPages/HomeDashboard"));
const Analytics = lazy(() => import("./pages/LoggedInPages/Analytics"));
const DataBoard = lazy(() => import("./pages/LoggedInPages/DataBoard"));

const LoginNumberScreen = lazy(() => import("./pages/LoggedOutPages/LoginNumberScreen"));
const LoginOtpScreen = lazy(() => import("./pages/LoggedOutPages/LogingOtpScreen"));

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Router>
				<Suspense
					fallback={
						<div className="h-[100vh] w-[100vw] flex justify-center items-center bg-[#f0f6ff]">
							<LucideLoaderCircle color="#09090B" width={50} height={50} />
						</div>
					}
				>
					<Routes>
						<Route
							path="/"
							element={
								<Navigate to={isUserLoggedIn() ? LOGGED_IN_PATHS.HOME : LOGIN_PATHS.PHONE_NUMBER} />
							}
						/>
						<Route element={<LoggedOutLayout />}>
							<Route path={LOGIN_PATHS.PHONE_NUMBER} element={<LoginNumberScreen />}></Route>
							<Route path={LOGIN_PATHS.OTP} element={<LoginOtpScreen />}></Route>
						</Route>

						<Route
							element={
								<AuthHOC>
									<LoggedInLayout />
								</AuthHOC>
							}
						>
							<Route path={LOGGED_IN_PATHS.HOME} element={<HomeDashboard />}></Route>
							<Route path={LOGGED_IN_PATHS.ANALYTICS} element={<Analytics />}></Route>
							<Route path={LOGGED_IN_PATHS.DATA_BOARD} element={<DataBoard />}></Route>
						</Route>
					</Routes>
				</Suspense>
			</Router>
		</QueryClientProvider>
	);
}

export default App;
