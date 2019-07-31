function theBeatlesPlay (musicians, instruments) {
  var array = [];
  for (let i = 0; i < musicians.length; i++) {
      array.push(musicians[i] + ' plays ' + instruments[i]);
    }
  return array;
}

function johnLennonFacts (facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] = facts[i] + '!!!';
    i++
  }
  return facts;
}

function iLoveTheBeatles (number) {
  var array = [];
  var i = 0;
 
function incrementVariable() {
  i = i + 1;
  return i;
}
 
do {
  console.log("doo-bee-doo-bee-doo");
} while (incrementVariable() < 5);
}
