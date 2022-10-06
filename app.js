var checkerboard = function (rows) {
  var n = 0;
  var letters = ["A", "B", "C", "D", "E", "F"];
  var colors1 = ["dark", "light", "dark", "light", "dark", "light"];
  var colors2 = ["light", "dark", "light", "dark", "light", "dark"];

  for (var row = 0; row < rows; row++) {
    var start = "light";
    var cb = "";

    for (var col = 0; col < rows; col++) {
      if (row == 0 && col == 0) {
        cb += "<div class='no-outline square'></div>";
      } else if (row == 0) {
        cb += "<div class='square'><p>" + col + "</div>";
      } else if (row > 0 && col == 0) {
        cb += "<div class='square'><p>" + letters[row - 1] + "</div>";
      } else if (row % 2 == 0) {
        cb += "<div class='" + colors1[col - 1] + " square'></div>";
      } else {
        cb += "<div class='" + colors2[col - 1] + " square'></div>";
      }
    }
    document.querySelector("#checker-board").innerHTML += cb;
  }
};

checkerboard(7);
