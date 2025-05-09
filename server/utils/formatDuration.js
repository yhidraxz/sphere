export function formatDuration (durationMs) {
    const seconds = Math.floor( durationMs / 1000);
    const minutes = Math.floor( seconds / 60 );
    const hours = Math.floor( minutes / 60 );

    const remainingSeconds = seconds % 60
    const remainingMinutes = minutes % 60

    if (hours > 0) {
        return `${hours}h ${remainingMinutes}m ${remainingSeconds}s`
    } else if (minutes > 0) {
        return `${minutes}m ${remainingSeconds}s`
    } else if (seconds > 0) {
        return `${remainingSeconds}s`
    }
}