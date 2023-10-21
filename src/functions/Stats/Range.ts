/**
 * Difference between the biggest number and the smallest number
 * @param arr Array of numbers
 */
export function range(arr: number[]): number {
    arr.sort((a, b) => a - b);

    return arr[arr.length - 1] - arr[0];
}
