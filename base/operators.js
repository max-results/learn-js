// https://www.sitepoint.com/javascript-operators/
//----- Addition: +
'Hello, ' + 'World!' // Hello, World!
'The number is ' + 42 // 'The number is 42'
'100' + 30 // '10030'

const num1 = BigInt(12345678901234567890);
const num2 = BigInt(12345678901234567890);
num1 + num2 // 24691357802469134336n
num + 1 // Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions


10 + 20 // 30
10 + true // 11 -- true is converted to a value of 1

1 + { a: 1 } // '1[object Object]'


//----- Subtraction: -
10 - 3 // 7
'100' - 30 // 70

const num3 = BigInt('9007199254740993');
const num4 = BigInt('3');
num3 - num4 // 9007199254740990n

10 - 'Jim' // NaN

//----- Multiplication: *
10 * 5 // 50

const num5 = 9007199254740993n;
num5 * 2n // 18014398509481986n

'100' * 30 // 3000
10 * 'Jim' // NaN

//----- Division: /

10 / 2 // 5
10 / '2' // 5

const num6 = 10n;
num6 / 3n // 3n, not 3.333...n


//----- Modulus (remainder): %
10 % 3 // 1
'10' % 3 // 10

//-----
/**
 Bitwise AND assignment (&=)
 Bitwise OR assignment (|=)
 Bitwise XOR assignment (^=)
 Left shift assignment (<<=)
 Right shift assignment (>>=)
 Unsigned right shift assignment (>>>=)

 */


//-----


//-----


//-----


//-----


//-----


//-----

