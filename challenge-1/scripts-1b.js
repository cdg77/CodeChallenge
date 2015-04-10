

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



function averageAwesome(array) {
  var programmers = 0;
  var totalAwesome = 0;
  var average = 0;

  for (var i = 0; i < array.length; i++) {
    if ((array[i].occupation === 'programmer')) {
      programmers++;
      totalAwesome += array[i].awesomeIndex;
      average = totalAwesome / programmers;
    } else {

    }
  }
  return average;
}

var awesomenessAverage = averageAwesome(peopleArray);

console.log('awesomenessAverage: ' + awesomenessAverage);


// ****************************************************************************
// Yet another way:
//
//var awesomenessAverage =

// function averageAwesome(array) {
//   var programmers = 0;
//   var totalAwesome = 0;
//   var average = 0;

//   for (var i = 0; i <= array.length; i++) {
//     if ((array[i].occupation === 'programmer')) {
//       programmers++;
//       totalAwesome += array[i].awesomeIndex;
//       average = totalAwesome / programmers;
//     }else {}
//     console.log('average: ' + average);
//   }
//   return average;
// }(peopleArray);










