/**
 * Splits a string into parts smaller than `maxLength` while attempting to respect line integrity.
 * @param {string} string
 * @param {number} maxLength
 * @returns an array containing the parts
 */
function splitString(string, maxLength) {
    const parts = [];
    while (string.length > 0) {
        if (string.length <= maxLength) {
            parts.push(string);
            string = "";
            break;
        }

        let splitPos = lastNewline(string, maxLength);
        if (splitPos <= 0) {
            // hard split
            parts.push(string.substring(0, maxLength));
            string = string.substring(maxLength, string.length);
            continue;
        }
        parts.push(string.substring(0, splitPos));
        string = string.substring(splitPos + 1, string.length);
    }
    return parts;
}

/**
 * Returns the position of the last newline up to the given limit.
 * @param {string} string 
 * @param {number} limit
 * @returns {number} The position of the last newline up to the limit or -1 if there's no newlines.
 */
function lastNewline(string, limit) {
    let position = -1;
    for (let i = limit; i >= 0; i--) {
        if (string.charAt(i) === '\n') {
            position = i;
            break;
        }
    }
    return position;
}

module.exports = { splitPlan: splitString };