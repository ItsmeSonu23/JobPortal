export const setItem = (key: string, value: string) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const getItem = (key: string) => {
    const item = localStorage.getItem(key);
    if (item && item !== "undefined") { // Check for "undefined" as a string
        try {
            return JSON.parse(item);
        } catch (e) {
            console.error(`Error parsing JSON for key ${key}:`, e);
            return null;
        }
    }
    return null; // Return null if the item is not found, or it's "undefined"
};


export const removeItem = (key: string) => {
    localStorage.removeItem(key)
}