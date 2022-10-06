var get_random = function (list) {
  return list[Math.floor(Math.random() * list.length)];
};

var are_equal = function (arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (var i = 0, len = arr1.length; i < len; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

var checkerboard = function (rows) {
  //   var dice1 = ["E4", "E5", "E6", "D5", "F4", "F5"];
  var dice1 = [
    [5, 4],
    [5, 5],
    [5, 6],
    [4, 5],
    [6, 4],
    [6, 5],
  ];

  //   var dice2 = ["B4", "C3", "C4", "D3", "D4", "E3"];
  var dice2 = [
    [2, 4],
    [3, 3],
    [3, 4],
    [4, 3],
    [4, 4],
    [5, 3],
  ];

  //   var dice3 = ["F1", "A6"];
  var dice3 = [
    [6, 1],
    [1, 6],
  ];

  //   var dice4 = ["A1", "C1", "D1", "D2", "E2", "F3"];
  var dice4 = [
    [1, 1],
    [3, 1],
    [4, 1],
    [4, 2],
    [5, 2],
    [6, 3],
  ];

  //   var dice5 = ["B1", "B2", "A2", "A3", "B3", "C2"];
  var dice5 = [
    [2, 1],
    [2, 2],
    [1, 2],
    [1, 3],
    [1, 3],
    [3, 2],
  ];

  //   var dice6 = ["A4", "B5", "C5", "C6", "D6", "F6"];
  var dice6 = [
    [1, 4],
    [2, 5],
    [3, 5],
    [3, 6],
    [4, 6],
    [6, 6],
  ];

  //   var dice7 = ["F2", "F2", "A5", "A5", "B6", "E1"];
  var dice7 = [
    [6, 2],
    [6, 2],
    [1, 5],
    [1, 5],
    [2, 6],
    [5, 1],
  ];

  var roll1 = get_random(dice1);
  var roll2 = get_random(dice2);
  var roll3 = get_random(dice3);
  var roll4 = get_random(dice4);
  var roll5 = get_random(dice5);
  var roll6 = get_random(dice6);
  var full_roll = [roll1, roll2, roll3, roll4, roll5, roll6];
  console.log(full_roll);

  var n = 0;
  var letters = ["A", "B", "C", "D", "E", "F"];
  var colors1 = ["dark", "light", "dark", "light", "dark", "light"];
  var colors2 = ["light", "dark", "light", "dark", "light", "dark"];

  for (var row = 0; row < rows; row++) {
    var start = "light";
    var cb = "";

    for (var col = 0; col < rows; col++) {
      if (row == 0 && col == 0) {
        cb += "<div class='no-outline square'>";
      } else if (row == 0) {
        cb += "<div class='square'>" + col;
      } else if (row > 0 && col == 0) {
        cb += "<div class='square'>" + letters[row - 1];
      } else if (row % 2 == 0) {
        cb += "<div class='" + colors1[col - 1] + " square'>";
      } else {
        cb += "<div class='" + colors2[col - 1] + " square'>";
      }

      var temp_coor = [row, col];
      if (
        are_equal(temp_coor, roll1) ||
        are_equal(temp_coor, roll2) ||
        are_equal(temp_coor, roll3) ||
        are_equal(temp_coor, roll4) ||
        are_equal(temp_coor, roll5) ||
        are_equal(temp_coor, roll6)
      ) {
        cb += "<div class='dot'></div>";
      }
      cb += "</div>";
    }
    document.querySelector("#checker-board").innerHTML += cb;
  }
};

checkerboard(7);
