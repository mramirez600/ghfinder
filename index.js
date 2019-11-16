function solution(N) {
  // write your code in JavaScript (Node.js 6.4.0)
  var maxGap = 0;
  var curMaxGap = 0;
  var binStr = N.toString(2);
  var startIndexFromEnd = binStr.length - 1;
  for (startIndexFromEnd; startIndexFromEnd >= 0; startIndexFromEnd--) {
    if (binStr.charAt(startIndexFromEnd) != '0') {
      break;
    }
  }
  for (var i = startIndexFromEnd - 1; i >= 0; i--) {
    if (binStr.charAt(i) == '0') {
      curMaxGap = curMaxGap + 1;
    } else {
      if (curMaxGap > maxGap) {
        maxGap = curMaxGap;
      }
      curMaxGap = 0;
    }
  }
  console.log(maxGap);
}

//solution(32);
// str = 'abc';
// var i = str.length;
// while (i--) {
//   console.log(str.charAt(i));
// }
function solutionq(A, B) {
  // write your code in JavaScript (Node.js 8.9.4)
  // alex = A, 5,8, 6, Q, K bob = J, J, 6, 5, 3, K
  // alex is array 1 return number of times index value is greater than same index value of second array

  // if  player has missing cards
  if (A.length !== B.length)
    return console.log('Players do not have equal amount of cards');

  let countA = 0;

  for (let i = 0; i < A.length; i++) {
    let regex = /[QKA]/;
    let regex2 = /[JT]/;
    // A < K < Q <J <T
    // A1 J4 K2 Q3 T5

    if (
      (A[i].match(regex) && B[i].match(regex)) ||
      (A[i].match(regex2) && B[i].match(regex2))
    ) {
      if (A[i] < B[i]) {
        countA++;
      }
    } else if (A[i].match(regex) && B[i].match(regex2)) {
      countA++;
    } else if (A[i].match(regex2) && B[i].match(regex)) {
      countA += 0;
    } else if (A[i] > B[i]) {
      countA++;
    } else if (A[i] == 'A' && B[i] !== 'A') {
      countA++;
    }
  }
  console.log(`Player one has won ${countA} out of ${A.length} times.`);
}

solutionq('A586QKTTT', 'JJ653KJQ8');
