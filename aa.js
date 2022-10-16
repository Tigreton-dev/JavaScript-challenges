function longestPalindromicSubstring(s) {
    let updatedString = '#' + s.split('').join('#') + '#';
    const length = 2 * s.length + 1; // Length of the array that will store the window of palindromic substring
    let p = new Array(length).fill(0); // Array to store the length of each palindrome centered at each element
    let center = 0; // Current center of the longest palindromic string
    let right = 0; // Right boundary of the longest palindromic string
    let maxLength = 0; // Maximum length of the substring
    let position = -1; // Position index
    for (let i = 0; i < length; i++) {
        let mirror = 2 * center - i; // Mirror of the current index
        if (i < right) p[i] = Math.min(right - i, p[mirror]); // Check if the mirror is outside the left boundary of current longest palindrome
        // Indices of the characters to be compared
        let a = i + (1 + p[i]);
        let b = i - (1 + p[i]);
        // Expand the window
        while (a < length && b >= 0 && updatedString[a] === updatedString[b]) {
            p[i]++;
            a++;
            b--;
        }
        // If the expanded palindrome is expanding beyond the right boundary of
        // the current longest palindrome, then update c and r
        if (i + p[i] > right) {
            center = i;
            right = i + p[i];
        }
        if (maxLength < p[i]) {
            maxLength = p[i];
            position = i;
        }
    }

    return s.substring((position - maxLength) / 2, (position + maxLength) / 2);
}
