// ---------------------
// Define a function max() that takes two numbers as
// arguments and returns the largest of them. Use the
// if-then-else construct available in JavaScript.
// ---------------------

function max(num1, num2) {
  ​
      if (num1 > num2) {
          return num1
      } else {
        return num2
      }
  ​
  }

console.assert(max(2, 3) === 3)
console.assert(max(23, 24) === 24)
console.assert(max(-23, 12) === 12)

// ---------------------
// Define a function maxOfThree() that takes three
// numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(num1, num2, num3) {
  ​
      if (num1 > num2 && num1 > num3) {
          return num1
      } else if (num2 > num1 && num2 > num3) {
          return num2
      } else if (num3 > num1 && num3 > num2) {
          return num3
      } else {
        return num1
      }
  ​
  }

console.assert(maxOfThree(2, 56, 3) === 56)
console.assert(maxOfThree(12, 3, 4) === 12)
console.assert(maxOfThree(-12, 4, -5) === 4)

// ---------------------
// Write a function isVowel() that takes a character (i.e. a
// string of length 1) and returns true if it is a
// vowel, false otherwise.
// ---------------------

function isVowel(char) {
  char = char = ''
  const vowels = 'aeiou'
  return vowels.includes(char.toLowerCase)
}

console.assert(isVowel(0) === false)
console.assert(isVowel("B") === false)
console.assert(isVowel("b") === false)
console.assert(isVowel("a") === true)
console.assert(isVowel("E") === true)
console.assert(isVowel("2") === false)

// ---------------------
// Write a function rovarspraket() that will translate
// a text into "Rovarspraket". That is, double every
// consonant and place an occurrence of "o" in between.
// For example, translate("this is fun") should return
// the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(str {
  str = str + ''
  let result = ''
  const cons = 'bcdfghjklmnpqrstvwxyz'
  for (let i = 0; i < str.length; i++) {let char = str.charAt(i)
    let char = str.charAt(i)
    if (cons.includes(char.toLowerCase())) {
      result += char + 'o' + char
    } else {
      result += char
    }
})

console.assert(rovarspraket("a") === "a")
console.assert(rovarspraket("b") === "bob")
console.assert(rovarspraket("cat") === "cocatot")
console.assert(rovarspraket("javascript") === "jojavovasoscocroripoptot")
console.assert(rovarspraket(0) === "0")

// ---------------------
// Define a function reverse() that computes the reversal
// of a string. For example, reverse("jag testar") should
// return the string "ratset gaj".
// ---------------------

function reverse(str) {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    result = str.charAt(i) + result
  }
  return result
}

console.assert(reverse("books") === "skoob")
console.assert(
  reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew"
)
