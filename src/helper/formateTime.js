export const formateTime = (time) => {
    const date = new Date(time);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    if (diff < 5 * 60 * 1000) return "Active Now";
    if (diff < 60 * 60 * 1000) return `${(Math.floor(diff / (5 * 60 * 1000))) * 5} minutes ago`;
    if (diff < 24 * 60 * 60 * 1000) return `${(Math.floor(diff / (5 * 60 * 60 * 1000))) * 2} hours ago`;
    if (diff < 7 * 24 * 60 * 60 * 1000) return `${(Math.floor(diff / (5 * 24 * 60 * 60 * 1000)))} days ago`;
    if (diff < 30 * 24 * 60 * 60 * 1000) return `${(Math.floor(diff / (5 * 7 * 24 * 60 * 60 * 1000)))} weeks ago`;
    if (diff < 365 * 24 * 60 * 60 * 1000) return `${(Math.floor(diff / (5 * 30 * 24 * 60 * 60 * 1000)))} months ago`;
}