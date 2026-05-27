export const formateTime = (time) => {
    
    const date = new Date(time);
    const now = new Date();

    const diff = now.getTime() - date.getTime();

    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;
    const week = 7 * day;
    const month = 30 * day;
    const year = 365 * day;

    if (diff < 5 * minute) return "Active Now";
    if (diff < hour) return `${Math.floor(diff / (5 * minute)) * 5} minutes ago`;
    if (diff < day) return `${Math.floor(diff / hour)} hours ago`;
    if (diff < week) return `${Math.floor(diff / day)} days ago`;
    if (diff < month) return `${Math.floor(diff / week)} weeks ago`;
    if (diff < year) return `${Math.floor(diff / month)} months ago`;

    return `${Math.floor(diff / year)} years ago`;
}