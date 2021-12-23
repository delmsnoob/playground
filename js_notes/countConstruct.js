const countConstruct = (target, wordBank, memo={}) => {
  if (target in memo) return memo[target]
  if (target === '') return 1

  let totalCount = 0

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const numWayForRest =  countConstruct(target.slice(word.length), wordBank, memo)
      totalCount += numWayForRest
    }
  }
  memo[target] = totalCount
  return totalCount
}

console.log(countConstruct('abcdef', ['abc', 'ab', 'cd', 'def', 'abcd']))
console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(countConstruct('enterapotenpot', ['a', 'p', 'enter', 'ent', 'ot', 'o', 't', 'enterapot', 'p', 'enterapoten']))
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eeee', 'eeeeeeee', 'eeeeeeeeeeeee']));