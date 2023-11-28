// Generate a random number
export const generateNumber = (): number => Math.floor(Math.random() * 123) + 1;

// Generate a random Id 
export const generateId = (): string => Math.random().toString(36).substring(2, 9);