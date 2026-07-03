//1832. Check if the Sentence Is Pangram

let sentence = "thequickbrownfoxjumpsoverthelazydog";

function Pangram(sentence) {
    return new Set(sentence).size === 26;
}
console.log(Pangram(sentence));

/*
    I use a Set because it automatically removes duplicate characters. If the number of unique characters is 26, then the sentence contains every letter from a to z, so it's a pangram.

    new Set(sentence) → Stores only unique letters (removes duplicates).
.size → Counts how many unique letters are in the sentence.
=== 26 → Checks if all 26 English letters (a–z) are present.
*/