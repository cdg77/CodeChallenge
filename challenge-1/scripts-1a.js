var _ = require('lodash');

var peopleArray = [
  {
  name: 'Bob',
  occupation: 'programmer',
  awesomeIndex: 7,
  },
  {
  name: 'Alice',
  occupation: 'programmer',
  awesomeIndex: 9,
  },
  {
  name: 'Zaphod',
  occupation: 'President of the Galaxy'
  },
  {
  name: 'Whitney',
  occupation: 'programmer',
  awesomeIndex: 10,
  }
];



var programmerArray = _.filter(peopleArray, function(n) {
  return (n.occupation === 'programmer');
});
console.log(programmerArray);

var awesomenessAverage = _.forEach(programmerArray, function(programmerArray) {
  var programmers = 0;
  var totalAwesome = 0;
  var average = 0;

    programmers++;
    totalAwesome += programmerArray.awesomeIndex;
    average = totalAwesome / programmers;
    console.log(average);
    return average;

});

console.log('awesomenessAverage: ' + awesomenessAverage);




