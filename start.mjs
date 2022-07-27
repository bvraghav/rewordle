import {readFileSync} from 'fs'

const getCorpus = (file) => readFileSync(
  file, {encoding: 'ascii'})
      .split('\n')

, getCharFrequencies = (words) => {
  const chars = words.join('').split('').sort().join('')

  , freq = Array.from(Array(26).keys())
      .map(x => String.fromCharCode('a'.charCodeAt(0) + x))
      .reduce((obj, x) => {
        obj[x] = (
          chars.indexOf(x) != -1
            ? chars.lastIndexOf(x) - chars.indexOf(x) + 1
            : 0
        )
        return obj
      }, {})

  return freq
}

, getScores = (words) => {
  const cfq = getCharFrequencies(words)
  , scores = words.reduce(
    (obj, w) => {
      obj[w] = w.split('')
        .filter((c, i, A) => A.indexOf(c) == i)
        .map(c => cfq[c])
        .reduce((a,b) => a+b, 0)
      return obj
    }, {}
  )

  return scores
}

, getSuggestions = (corpus) =>
      Array.from(Object.entries(getScores(corpus)))
      .sort((a, b) => (b[1] - a[1]))
      .slice(0,50)


export default {
  getCorpus,
  getCharFrequencies,
  getScores,
  getSuggestions
}
