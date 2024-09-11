import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 768;

const useIsDesktop = (): boolean => {
	const [isDesktop, setIsDesktop] = useState<boolean>(true);

	useEffect(() => {
		const checkIsDesktop = (): boolean => {
			if (typeof window === "undefined") {
				return true;
			}
			return window.innerWidth >= MOBILE_BREAKPOINT;
		};

		const handleResize = () => {
			setIsDesktop(checkIsDesktop());
		};

		// Initial check
		handleResize();

		// Add event listener
		window.addEventListener("resize", handleResize);

		// Cleanup
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return isDesktop;
};

export default useIsDesktop;
