// This is used to use single quotes'', double quotes"", backticks`` at the console area

// var myStr = "I am a "double quoted" string inside  "double quotes"";

var myStr = "I am a \"double quoted\" string inside  \"double quotes\"";
console.log(myStr);


//                          25-Quoting Strings with Single Quote

// This is used to use single quotes'', double quotes"", backticks`` at the console area

// var myStr = "<a href=\"https://www.google.com\">Google Link</a>";  // Double quotes ""

// var myStr = '<a href="https://www.google.com">Google Link</a>'; // single quotes ''

var myStr = `'<a href="https://www.google.com">Google Link</a>'`;  // backticks ``
console.log(myStr);


//                         26-Escape sequences in string

/****
CODE OUTPUT:

\' single quote
\" Double quote
\\ backslash
\n New Line
\r Carriage return
\t Tab
\b backspace
\f form feed

****/

var myStr = "\bFirst line\n\t\\Seond line\nThird line\fFourth line\rFifth line"
console.log(myStr);