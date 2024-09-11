import { LOGGED_IN_PATHS } from "../../../constants/Paths";

export const DASHBOARD_TABS = Array.from(Object.entries(LOGGED_IN_PATHS))?.map(([key, path]) => ({
    key: key.toLowerCase(),
    path: path,
    label: key.toLowerCase().split('_').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
}))