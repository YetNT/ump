/**
 * Find the most recurring number
 * @param arr Array of numbers
 */
export function mode(arr: number[]): number[] {
    const frequencyMap = new Map();

    // Count the frequency of each element in the array
    for (const element of arr) {
        if (frequencyMap.has(element)) {
            frequencyMap.set(element, frequencyMap.get(element) + 1);
        } else {
            frequencyMap.set(element, 1);
        }
    }

    let maxFrequency = 0;
    let modes: number[] = [];

    // Find the element(s) with the maximum frequency
    for (const [element, frequency] of frequencyMap) {
        if (frequency > maxFrequency) {
            maxFrequency = frequency;
            modes = [element];
        } else if (frequency === maxFrequency) {
            modes.push(element);
        }
    }

    return modes;
}
