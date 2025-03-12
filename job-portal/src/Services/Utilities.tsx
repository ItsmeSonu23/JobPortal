export const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const options = { years: 'numeric' as const, month: 'short' as const }
    return date.toLocaleString('en-US', options)
}

export const timeAgo = (time:string) => {
    const now = new Date();
    const date = new Date(time); // Parse the ISO string into a Date object
    const timeDiff = now.getTime() - date.getTime(); // Difference in milliseconds
    const seconds = timeDiff / 1000;

    // Handle seconds
    if (seconds < 60) {
        return `${Math.floor(seconds)} second${seconds !== 1 ? 's' : ''} ago`;
    }

    // Handle minutes
    const minutes = seconds / 60;
    if (minutes < 60) {
        return `${Math.floor(minutes)} minute${minutes !== 1 ? 's' : ''} ago`;
    }

    // Handle hours
    const hours = minutes / 60;
    if (hours < 24) {
        return `${Math.floor(hours)} hour${hours !== 1 ? 's' : ''} ago`;
    }

    // Handle days
    const days = hours / 24;
    if (days < 30) {
        return `${Math.floor(days)} day${days !== 1 ? 's' : ''} ago`;
    }

    // Handle months (approximate as 30 days per month)
    const months = days / 30;
    if (months < 12) {
        return `${Math.floor(months)} month${months !== 1 ? 's' : ''} ago`;
    }

    // Handle years
    const years = months / 12;
    return `${Math.floor(years)} year${years !== 1 ? 's' : ''} ago`;
}

export const getBase64 =(file:any)=>{
    return new Promise((res,rej)=>{
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload=()=>res(reader.result)
        reader.onerror = error =>rej(error)
    })
}