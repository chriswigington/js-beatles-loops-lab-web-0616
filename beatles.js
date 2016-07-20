function theBeatlesPlay(musicians, instruments) {
  var empty_array = [];
  for (var i = 0; i < musicians.length; i++) {
    empty_array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return empty_array
}

function johnLennonFacts(facts) {
  for (var i = facts.length - 1; i >= 0; i--) {
    facts[i] = facts[i] + "!!!"
  }
  return facts
}

function iLoveTheBeatles(n) {
  var empty_array = []
  do {
    empty_array.push("I love the Beatles!")
    n--
  } while (n >= 0 && n < 15)
  return empty_array
}