/**
 * Return number in the middle (Sorts the list before doing so)
 * @param arr Array of numbers
 */
export function median(arr: number[]): number {
    arr.sort((a, b) => a - b);
    const median = Math.round(arr.length / 2);
    let answer = 0;

    if (arr.length % 2 == 0) {
        answer = (arr[median - 1] + arr[median - 2]) / 2;
    } else {
        answer = arr[median - 1];
    }

    return answer;
}
