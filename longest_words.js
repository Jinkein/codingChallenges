// Requirements:

// Given a sentence with multiple lowercase words separated by spaces, write a Javascript function that finds and returns the longest word in the sentence. If there are multiple words of the same length, choose one that has the highest number of vowels. Ignore any character in the sentence that is not an English letter or a space. Find the most efficient way to achieve this.

// Solution:

function findLongestWord(sentence) {
  let longestWord = ''
  let maxWordLength = 0
  let maxVowelCount = 0
  //   check if sentence is empty
  if (sentence.length === 0) {
    return ''
  }
  // split sentence into array of words
  let words = sentence.split(' ')
  // iterate through words
  for (let i = 0; i < words.length; i++) {
    // remove non-letters
    let cleanedWord = words[i].replace(/[^a-z]/gi, '')
    // count the vowels
    let vowelCount = cleanedWord.match(/[aeiou]/gi).length

    // if word is longer than maxWordLength, set it as longestWord
    if (cleanedWord.length > maxWordLength) {
      longestWord = cleanedWord
      maxWordLength = cleanedWord.length
      maxVowelCount = vowelCount
    }
    // if word is same length as maxWordLength, compare vowel counts
    else if (cleanedWord.length === maxWordLength) {
      if (vowelCount > maxVowelCount) {
        longestWord = cleanedWord
        maxVowelCount = vowelCount
      } else if (vowelCount === maxVowelCount) {
        longestWord = longestWord + ', ' + cleanedWord
      }
    }
  }
  return longestWord
}

// Example usage:
// const sentence =
//   'This is a test of words to find the longest word in the sentence.'
// const longestWord = findLongestWord(sentence)
// console.log('longest word: ', longestWord)

// Empty Input: Testing with an empty string as input is important to ensure the code handles edge cases gracefully.

// Basic Test Scenario: I would start by testing the code with a basic sentence, such as "Hello world." This ensures that the code correctly handles simple input.

// Multiple Words of the Same Length: I'd test a sentence like "This is a test of words to find the longest word in the sentence." to verify that the code correctly selects the word with the highest vowel count when there are multiple words of the same length.

// Mixed Cases: Testing the code with a sentence containing mixed cases, like "ThIs IS a MiXeD CaSe sEnTeNcE," will ensure that it is case-insensitive and still functions correctly.

// Special Characters and number : I'd also test the code with sentences containing special characters, like "Play with code is fun, isn't it?" to ensure it ignores non-alphabet characters.

// Long Sentence: Finally, I'd test the code with a longer sentence to check for efficiency and performance.

function testFindLongestWord() {
  // Initialize an empty object to track test results
  const testResults = {}
  // Scenario 1: Empty Input
  const sentence1 = ''
  const result1 = findLongestWord(sentence1)
  //   console.log(result1 === '' ? 'Pass' : 'Fail')
  testResults['Scenario 1: Empty Input'] = result1 === '' ? 'Pass' : 'Fail'

  // Scenario 2: Basic Test
  const sentence2 = 'Hello world.'
  const result2 = findLongestWord(sentence2)
  testResults['Scenario 2: Basic Test'] = result2 === 'Hello' ? 'Pass' : 'Fail'

  // Scenario 3: Multiple Words of the Same Length
  const sentence3 =
    'This is a test of words to find the longest word in the sentence.'
  const result3 = findLongestWord(sentence3)
  //   console.log(result3 === 'sentence' ? 'Pass' : 'Fail')
  testResults['Scenario 3: Multiple Words of the Same Length'] =
    result3 === 'sentence' ? 'Pass' : 'Fail'

  // Scenario 4: Mixed Cases
  const sentence4 = 'ThIs IS a MiXeD CaSe sEnTeNcE'
  const result4 = findLongestWord(sentence4)
  testResults['Scenario 4: Mixed Cases'] =
    result4.toLowerCase() === 'sentence' ? 'Pass' : 'Fail'

  // Scenario 5: Special Characters and Numbers
  const sentence5 = "Play with code is fun, isn't it?"
  const result5 = findLongestWord(sentence5)
  //   console.log(result5 === 'code' ? 'Pass' : 'Fail')
  testResults['Scenario 5: Special Characters'] =
    result5 === 'code' ? 'Pass' : 'Fail'

  // Scenario 6: Long Sentence
  const sentence6 =
    '“Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers” (Socrates)'
  const result6 = findLongestWord(sentence6)
  //   console.log(result6 === 'experience' ? 'Pass' : 'Fail')
  testResults['Scenario 6: Long Sentence'] =
    result6 === 'experience' ? 'Pass' : 'Fail'
  return testResults
}
console.log(testFindLongestWord())
