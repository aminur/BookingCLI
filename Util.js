

//JS does not have a handy python stringXnum multiply option
function multipleChar(char, num_chars) {
  
  let str = '';

  //32                 //not true//go down
  for (let i = num_chars; i > 0; i--) {
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
        "pala",
        "agatha",
        "Nelson Fernandez"
      ];

  return data;
}


// creates the Top border, solution done by Jeffrey
// function topBorder(){
//  var top_border =[];
//  for(let x=table_padding+1; x>0; --x){
    
//     top_border = top_border + h_border_char + table_padding_char  
//     if (x==1){
//     out( top_border)
//     };
 
//  };



// }

//creates Bottom border, Solution done by Jeffrey
// function bottomBorder(){
//  var bottom_border =[];
//  for(let x=table_padding+1; x>0; --x){
    
//     bottom_border = bottom_border + h_border_char + table_padding_char  
//     if (x==1){
//     out (bottom_border)
//     };
 
//  };