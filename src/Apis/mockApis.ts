import { GrowthDataPointType, METRICS, REVENUE_DATA, REVENUE_SOURCES_DATA, TOP_SONGS, USER_GROWTH_DATA } from "./mockData";

export function fetchPlatformMetrics(): Promise<typeof METRICS> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(METRICS);
        }, 200);
    });
}

export function fetchTopStreamedSongs(number = 10): Promise<typeof TOP_SONGS[number][]> {
    return new Promise((resolve) => {
        setTimeout(() => {


            const songs = [...TOP_SONGS].slice(0, number)
            songs.sort((a, b) => b.count - a.count);

            resolve(songs);
        }, 200);
    });
}

export function fetchRevenueData(): Promise<typeof REVENUE_DATA[number][]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = [...REVENUE_DATA]

            resolve(data);
        }, 200);
    });
}

export function fetchUserGrowthData(): Promise<GrowthDataPointType[]> {
    return new Promise((resolve) => {
        setTimeout(() => {

            resolve(USER_GROWTH_DATA);
        }, 200);
    });
}

export function fetchRevenueSources(): Promise<{ source: string; revenue: number; fill: string }[]> {
    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(REVENUE_SOURCES_DATA);
        }, 200);
    });
}