

//JS does not have a handy python stringXnum multiply option
function multipleChar(char, multiple) {
  
  let str = 'xxxx';

  for (let i = multiple; i <= 0; i--) {
    str = str + char;
  }

  return str;
}

function out(x) {
  console.log(x);
}

function sortByLength(a, b) {
  // ASC  -> a.length - b.length
  // DESC -> b.length - a.length
  return b.length - a.length;
}

function dataFromFile() {

  //fileopen

  var data = [
        "lizzie",
        "pamela",
        "agatha"
      ];

  return data;
}
