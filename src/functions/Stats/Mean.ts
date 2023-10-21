/**
 * Find the average number
 * @param arr Array of numbers
 * @param round Round off to the nearest number. Default is false
 */
export function mean(arr: number[], round?: boolean): number {
    let x = 0;

    for (const number of arr) {
        x += number;
    }
    const mean = x / arr.length;
    return round === undefined || round === false ? mean : Math.round(mean);
}
