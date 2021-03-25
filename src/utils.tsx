export function shuffle<T>(array: T[]) {
    const copy: T[] = []
    let n = array.length
    let i: number

    // While there remain elements to shuffle…
    while (n) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * array.length)

        // If not already shuffled, move it to the new array.
        if (i in array) {
            copy.push(array[i])
            delete array[i]
            n--
        }
    }

    return copy
}
