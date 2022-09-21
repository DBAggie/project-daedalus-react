
export function randomNumber() {
    const ranNum = Math.floor(Math.random() * 256);
    if (ranNum < 1) {
        return ranNum + 1;
    }
    return ranNum;
}