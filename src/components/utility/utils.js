let nextId = 0;
export function generateId() {
    const result = nextId;
    nextId += 1;
    return result;
}

export function randomNumber() {
    const ranNum = Math.floor(Math.random() * 256);
    if (ranNum < 1) {
        return ranNum + 1;
    }
    return ranNum;
}