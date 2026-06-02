// export const formatSize = bytes => {
//     if (bytes < 1024) return `${bytes} B`
//     if (bytes < 1_048_576) return `${(bytes / 1024).toFixed(1)} KB`
//     return `${(bytes / 1_048_576).toFixed(1)} MB`
// }

export const formatSize = (bytes) => {
    if (bytes === 0) return '0 B';
    if (bytes < 0) return 'Invalid size';

    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const unitIndex = Math.min(i, sizes.length - 1);

    return `${Math.round(bytes / Math.pow(k, unitIndex))} ${sizes[unitIndex]}`;
};
