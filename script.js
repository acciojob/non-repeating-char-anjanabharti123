function firstNonRepeatedChar(str) {
 // Write your code here
	const charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Step 2: Find the first character with a count of 1
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // Step 3: Return null if no non-repeated character is found
    return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
