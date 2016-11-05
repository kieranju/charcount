var submit = document.getElementById('submit');
var input = document.getElementById('word');
var output = document.getElementById('result');

function charcount(word) {
  var chars = {};

  // remove whitespace
  // if (/\s/g.test(word))
  // {
  //   word = word.replace(/\W/g, '');
  // }

  // iterate characters
  for (var i = word.length - 1; i >= 0; i--) {
      var char = word[i];
      var val = chars[char];

      // increment count of character
      chars[char] = (typeof val === 'undefined') ? 1 : ++val;
  }

  output.innerHTML = JSON.stringify(chars, null, 4);
}

submit.onclick = function () {
  charcount(input.value);
};
