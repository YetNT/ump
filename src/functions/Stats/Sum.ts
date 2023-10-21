/**
 * Sums up all the numbers in the array.
 * @param arr Array of numbers
 */
export function sum(arr: number[]): number {
    let x = 0;

    for (const number of arr) {
        x += number;
    }

    return x;
}
