// // // => ASSIGNMENT # 01 (ALERT)


// // ===  Exercise No.1


// alert('Welcome To The Website !');


// // ===  Exercise No.2


// alert('Error! Please enter a valid password.');


// // ===  Exercise No.3   


// alert('Welcome To JS Land... \n Happy Coding!'); 


// // ===  Exercise No.4  


// alert('Welcome To JS Land...') 
// alert('Happy Coding!')


// // ===  Exercise No.5


// executed through browser's console.


// // ===  Exercise No.6


// already using it in this assignment.


// // ===  Exercise No.7

// executed in index.html but commented.

// // // END // //



// // // => ASSIGNMENT # 02 (VAR FOR STRINGS)



// // ===  Exercise No.1


// var userName = 'Stephen';
// console.log(userName);   

// // ===  Exercise No.2


// var myName = 'Sara Khan';
// console.log(myName);


// // ===  Exercise No.3


// var message = 'Hello World !';
// alert(message);


// // ===  Exercise No.4


// var studentName = 'John Doe';
// alert(studentName);

// var age = '15'
// alert(age + 'years old');

// alert('Certified Mobile Application Development.');


// // ===  Exercise No.5


// alert(' PIZZA \n PIZZ \n PIZ \n PI \n P');


// // ===  Exercise No.6


// var email = 'example@example.com';
// alert('My email address is ' + email); 


// // ===  Exercise No.7


// var book = 'A smarter way to learn JavaScript.';
// alert('I am trying to learn from the Book ' + book);


// // ===  Exercise No.8


// document.write('Yah! I can write HTML content through JavaScript.');


// // ===  Exercise No.9


// var design = '“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”';
// alert(design);


// // // END // //



// // // => ASSIGNMENT # 03 (VAR FOR NUMBERS)



// // ===  Exercise No.1


// var age = 20;
// alert('I am ' + age + ' years old.');


// // ===  Exercise No.2


// var a = '14 times';
// alert('You have visited this site' + a);


// // ===  Exercise No.3


// var birthYear = '1999';
// document.write('My birth year is' + birthYear +'.' + '</br> Data type of my declared variable is number.');  


// // ===  Exercise No.4


// var visitorName = ('John Doe');
// var product = ('T-shirt(s)');
// var quantity = ('5 ');

// document.write('<b>' + visitorName + '</b>'  + ' ordered ' + '<b>' + quantity + product + '</b>' + ' on XYZ Clothing Store.');


// // // END // //



// // // => ASSIGNMENT # 04 (VAR NAEMES: LEGAL AND ILLEGAL)



// // ===  Exercise No.1


// var a = 1 , b = 2 , c = 3;
// console.log(a);


// // ===  Exercise No.2


// // Illegal Variables (5):

// var 1name = 'xyz' , ?name = 'xyz' , break = 'xyz' , Full-name = 'xyz' , full name = 'xyz' 

// // Legal Variables (5):

// var name1 = 'xyz' , $name = 'xyz' , _name = 'xyz' , fullName = 'xyz' , fullName = 'xyz'


// // ===  Exercise No.3


// document.write('<h4>' + 'Rules For Naming JS Variables' + '</h4>'+ '<br/>');

// document.write('Variable names can only contain camelCase , numbers , $ or _ ' + '<br/>' +'<b>' + 'For Example: ' + '</b>' + '$my_1stVariable.' + '<br/>');
// document.write('Variable must begin witth a $ , _ or lowercase' + '<br/>' +'<b>' + 'For Example: ' + '</b>' + '$name , _name or name.' + '<br/>');
// document.write('Variable names are case sensitive.'+ '<br/>');
// document.write('Variable names should not be JS keywords.');


// // // END // //



// // // => ASSIGNMENT # 05 (MATH EXPRESSIONS)



// // ===  Exercise No.1


// var a = 4;
// var b = 6;
// var c = a+b;

// document.write('Sum of ' + a + ' and ' + b + ' is ' + c + '.' + '<br/>');


// // ===  Exercise No.2


// var a = 4;
// var b = 6;
// var c = a-b;

// document.write('Difference of ' + a + ' and ' + b + ' is ' + c + '.' + '<br/>');

// var a = 4;
// var b = 6;
// var c = a*b;

// document.write('Product of ' + a + ' and ' + b + ' is ' + c + '.' + '<br/>');

// var a = 4;
// var b = 6;
// var c = b/a;

// document.write('Quotient of ' + b + ' and ' + a + ' is ' + c + '.' + '<br/>');

// var a = 4;
// var b = 6;
// var c = b%a;

// document.write('Remainder of ' + b + ' and ' + a + ' is ' + c + '.' + '<br/>');


// // ===  Exercise No.3


// var a = ' ';
// document.write('Value after variable declaration is undefined.' + '<br/>');

// var a = 5;
// document.write('Initial value : ' + a + '<br/>');

// var a = 5;
// document.write('Value after increment is : ' + ++a + '<br/>');

// var b = 7+a;
// document.write('Value after addition is  : ' + b + '<br/>');

// var b;
// document.write('Value after ddecrement : ' + --b + '<br/>');

// var c=b/3;
// document.write('The remainder is : ' + c + '<br/>' );


// // ===  Exercise No.4


// var a = 600;
// var b = a*5;

// document.write('Total cost to buy 5 tickets to a movie is ' + b + 'PKR.')


// // ===  Exercise No.5


// document.write('<h1>' + 'TABLE OF 04' + '</h1>')

// for( i = 1 ; i <= 10 ; i++ ){
//     document.write('4 ' + 'x ' + i + ' = ' + i*4 + '<br/>');
// }


// // ===  Exercise No.6


// var a = 25;
// var b = (a*9/5)+32;
// var c = 70;
// var d = (c-32)*(5/9);

// document.write(a + '<sup>' + 'o' + '</sup>' + 'C' + ' is ' + b + '<sup>' + 'o' + '</sup>' + 'F.' + '<br/>') 
// document.write(c + '<sup>' + 'o' + '</sup>' + 'F' + ' is ' + d + '<sup>' + 'o' + '</sup>' + 'C.' + '<br/>')


// // ===  Exercise No.7


// document.write('<h1>' + 'SHOPPING CART' + '</h1>');

// var item1 = 650;
// var q_item1 = 3;
// var item2 = 100;
// var q_item2 = 7;
// var shipping = 100;
// var total = (650*3)+(100*7)+100;


// document.write('Price of item 01 = ' + item1 + '<br/>');
// document.write('Quantity of item 01 = ' + q_item1 + '<br/>');
// document.write('Price of item 02 = '+ item2 + '<br/>');
// document.write('Quantity of item 02 = ' + q_item2 + '<br/>');
// document.write('Shipping Charges ' + ' = ' + shipping + '<br/>' + '<br/>');
// document.write('Total cost of your order is : ' + total + '<br/>');


// // ===  Exercise No.8


// var a = 1100;
// var b = 925;
// var c = (b/a)*100;

// document.write('<h3>' + 'Marksheet' + '</h3>')
// document.write('Marks Obtained ' + b + ' Out Of ' + a + '<br/>' + '<br/>')
// document.write('Percentage : ' + c + '%')


// // ===  Exercise No.9


// var pkr = 104.80;
// var pkr1 = 28;
// var s_Riyal = 25;
// var us_Dollar = 10;
// var a = (pkr1*s_Riyal)+(pkr*us_Dollar);

// document.write('<h3>' + 'Currency In PKR' + '</h3>' + '<br/>');;
// document.write('Total Currency in PKR : ' + a);


// // ===  Exercise No.10


// var a = 2;
// var b = ((a+5)*10)/2;

// document.write('The arithematic output' + ' = ' + b);


// // ===  Exercise No.11


// document.write('<h3>' + 'AGE CALCULATOR' + '</h3>');

// var currentYear = 2020;
// var birthYear = 1996;
// var age = currentYear-birthYear;

// document.write('Current Year :' + currentYear + '<br/>');
// document.write('Birth Year : ' + birthYear + '<br/>');
// document.write('Your Age : ' + age + '<br/>');


// // ===  Exercise No.12


// document.write('<h3>' + 'THE GEOMERIZER' + '</h3>');

// var r = 22;
// var circumference = 2*3.142*r;
// var area = 3.142*r*r;

// document.write('The radius of a circle : ' + r + '<br/>');
// document.write('The circumference : ' + circumference + '<br/>');
// document.write('The area : ' + area + '<br/>');


// // ===  Exercise No.13


// var a = ' Snickers '
// var age = 18;
// var max_age = 70;
// var aPerDay = 2;
// var totala = (70-18)*2;

// document.write('<h3>' + 'THE LIFETIME SUPPLY CALCULATOR' + '</h3>');
// document.write('Favourite Snack :' + a + '.' + '<br/>');
// document.write('Current Age : '+ age + '.' + '<br/>');
// document.write('Estimated Max. Age : ' + max_age + '.' + '<br/>');
// document.write('Amount of snacks/day : ' + aPerDay + '.' + '<br/>');
// document.write('You will need ' + totala + a + 'to last you until the ripe old age of ' + max_age + '.' + '<br/>');


// // // END // //



// // // => ASSIGNMENT # 06 (MATH EXPRESSIONS)



// // ===  Exercise No.1


// var a = 12;

// document.write('<b>' + 'RESULT :' + '</b>' + '<br/>' + '<br/>');
// document.write('The value of "a" is : ' + a + '<br/>' + '<br/>');
// document.write('.......................................' + '<br/>' + '<br/>');

// var b = ++a;

// document.write('The value of "++a" is : ' + a + '<br/>');
// document.write('Now the value of "a" is : ' + b + '<br/>' + '<br/>');

// var  c = b++;

// document.write('The value of "a++" is : ' + c + '<br/>');
// document.write('Now the value of "a" is : ' + b + '<br/>' + '<br/>');

// var d = --b;

// document.write('The value of "--a" is  : ' + b + '<br/>');
// document.write('Now the value of "a" is : ' + d + '<br/>' + '<br/>');

// var e = d--;

// document.write('The value of "a--" is : ' + e + '<br/>');
// document.write('Now the vallue of "a" is : ' + d + '<br/>' + '<br/>');


// // ===  Exercise No.2


// var a = 2;
// var b = 4;

// document.write('The value of "a" is : ' + a + '<br/>');
// document.write('The value of "b" is : ' + b + '<br/>' + '<br/>');

// var c = --a;
// document.write('The output after "--a" is : ' + c  + '<br/>');
// var d = c - --b;
// document.write('The output after "--a - --b" is : ' + d + '<br/>');
// var e = d + ++b;
// document.write('The output after "--a - --b + ++b" is : ' + e + '<br/>');
// var f = e + b--;
// document.write('The output after "--a" is : ' + f + '<br/>' + '<br/>');

// var g = 2;
// var h = 4;

// var result = --g - --h + ++h + h--;
// document.write('Hence, the final output of the arithematic operation "--a - --b + ++b + b--" is : ' + result + '<br/>');


// // ===  Exercise No.3


// var name = prompt ('Enter Your Name');
// name = name.toUpperCase();
// alert('Welcome ! ' + name + '.');


// // ===  Exercise No.4


// var table = +prompt('Which table do you want to study? \n Please enter a number.' , 'Enter the number');

// if (table >= 0 ){
//         document.write('<h4>' + 'TABLE OF ' + table + '</h4>');

//     for( i = 1 ; i <= 12 ; i++ ){
//         document.write(table + 'x' + i + '=' + table*i + '<br/>');
//     }
// }
// else{
//        document.write('<h4>' + 'TABLE OF 5' + '</h4>');

//     for( i = 1 ; i <= 12 ; i++ ){
//         document.write('5' + 'x' + i + '=' + i*5 + '<br/>');
//     }
// }


// // ===  Exercise No.5


// var subject1 = prompt('Enter your subject 1.');
// var obtainedMarks1 = +prompt('Enter your numbers.');

// var subject2 = prompt('Enter your subject 2.');
// var obtainedMarks2 = +prompt('Enter your numbers.');

// var subject3 = prompt('Enter your subject 3.');
// var obtainedMarks3 = +prompt('Enter your numbers.');

// var total = 100;

// var percent1 = (obtainedMarks1/total)*100
// var percent2 = (obtainedMarks2/total)*100
// var percent3 = (obtainedMarks3/total)*100

// document.write('<h4>' + 'Subject Total Marks Obtained Marks Percentage' + '</h4>');

// document.write(subject1 + ' ' + total + ' ' + obtainedMarks1 + ' '  + percent1 + '%' + '<br/>');
// document.write(subject2 + ' ' + total + ' ' + obtainedMarks2 + ' '  + percent2 + '%' + '<br/>');
// document.write(subject3 + ' ' + total + ' ' + obtainedMarks3 + ' '  + percent3 + '%' + '<br/>');
// document.write(' ' + total*3 + ' ' + (obtainedMarks1 + obtainedMarks2 + obtainedMarks3) + ' ' + (percent1 + percent2 + percent3)/3 + '%');


// // END // //



// // // => ASSIGNMENT # 09-10 (USER INPUT AND CONDITIONAL STATEMENT)



// // ===  Exercise No.1


// var city = prompt('Enter City Name');

// if (city = 'Karachi'){
//     alert ('Welcome To City Of Lights!')
// }

// else{
//  alert('Welcome!')
// }


// // ===  Exercise No.2


// var gender = prompt('Enter Your Gender');

// if (gender = 'male'){
//     alert('Good Morning! Sir.') 
// }
// else{
//     alert("Good Morning! Ma'am"+'.') 
// }


// // ===  Exercise No.3
// // ===  Exercise No.4


// var fuel = prompt('How much fuel is remaining in your car ?' , 'Enter the fuel in litres.');    

// if (fuel <= 0.25){
//      alert('"Please refill the fuel in your car."');
// }

// else {
//     alert('"You are good to go."');
// }


// // ===  Exercise No.5


// // // a


// var a = 4;

// if (++a === 5){
//     alert('given condition for a variable "a" is true');
// }

// // // b


// var b = 82;


// if (b++ === 83){
//     alert('given condition for a variable "b" is true');
// }


// // // c


// var c = 12
// if (c++ === 13){
//     alert('condition 1 is true');
// }

// if(c === 13){
//     alert('Condition 2 is true');
// }

// if(++c < 14){
//     alert('Condition 3 is true');
// }

// if(c === 14){
//     alert('Condition is 4 true');
// }


// // // d


// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;

// if (totalCost === laborCost+materialCost){
//     alert('The cost equals');
// }


// // // e


// if (true){
//     alert('True');
// }

// if (false){
//     alert('False');
// }


// // // f


// if ('car' < 'cat'){
//     alert('car is smaller than cat');
// }


// // ===  Exercise No.6


// document.write('<h4>' + 'MARKSHEET' + '</h4>');
 
// var english = +prompt('Enter your marks obtained in English.');
// var maths = +prompt ('Enter your marks obtained in Mathematics.');
// var science = +prompt('Enter your marks obtained in Science.');
// var obtained_marks = english+maths+science;
// var total = +prompt ('Enter your total marks.');
// var percentage = (obtained_marks/total)*100;

// document.write('Total Marks : ' + total + '<br/>');
// document.write('Marks Obtained : ' + obtained_marks + '<br/>');
// document.write('Percentage : ' + percentage + '%' + '<br/>' );

// if (percentage >= 80){
//     document.write('Grade : A-one ' + '<br/>');
//     document.write ('Remarks : Excellent ! ' + '<br/>');
// }

// else if (percentage >= 70){
//     document.write('Grade : A ' + '<br/>');
//     document.write ('Remarks : Good ' + '<br/>');
// }

// else if (percentage >= 60){
//     document.write('Grade : B ' + '<br/>');
//     document.write ('Remarks : You Need To Improve ' + '<br/>');
// }

// else if (percentage < 60){
//     document.write('Grade : Fail ' + '<br/>');
//     document.write ('Remarks : Sorry ' + '<br/>');
// }

// else {
//     alert('Please enter correct marks')
// }


// // ===  Exercise No.7


// var num = 7;
// var guess = +prompt('Guess the secret number.' , 'Enter your number');

// if(guess === num){
//     alert('Bingo! Correct answer.')
// }

// else if(guess === 6 || guess === 8 ){
//     alert('Close enough to the correct answer.');
// }

// else {
//     alert('Try again !');
// }


// // ===  Exercise No.8


// var a = +prompt('Enter a number');

// if (a%3 === 0){
//     alert('The number is divisible by 3.');
// }

// else{
//     alert('The number is not completely divisible by 3.');
// }


// // ===  Exercise No.9


// var a = +prompt('Enter any number of your choice.', 'Enter Here');

// if (a%2 === 0){
//     alert('This is an even number.');
// }

// if (a%3 === 0){
//     alert('This is an odd number.')
// }


// // ===  Exercise No.10


// var temp = +prompt('Please write the temperature.' , 'Enter temperature');

// if (temp >= 40){
//     document.write('It is too hot outside.' + '<br/>');
// }

// else if (temp >= 30){
//     document.write('The Weather today is Normal' + '<br/>');
// }

// else if (temp >= 20){
//     document.write("Today's Weather is cool" + '<br/>');
// }

// else if (temp > 10){
//     document.write("OMG! Today's weather is so Cool." + '<br/>');
// }


// // ===  Exercise No.11


// var a = +prompt('Enter a number you want to be calculated.' , 'Enter Here');
// var c = prompt ('Enter the function you wish to initiate (i.e. + , - , * , / or %)');
// var b = +prompt('Enter a number you want to be calculated.' , 'Enter Here');

// if (c === '+'){
//     alert( (a) + (b) );
// }

// else if (c === '-'){
//     alert( (a) - (b) );
// }

// else if (c === '*'){
//     alert( (a) * (b) );
// }

// else if (c === '/'){
//     alert( (a) / (b) );
// }

// else if (c === '%'){
//     alert( (a) % (b) );
// }


// // // END // //



// // // => ASSIGNMENT # 12-13 (IF, ELSE ... ELSE IF , TESTING SET OF CONDITIONS)


// // ===  Exercise No.1



// // ===  Exercise No.2


// var a = prompt('Enter any integar.' , 'Enter Here');
// var b = prompt('Enter another integar' , 'Enter Here');

// if (a > b){
//     alert(a + ' is greater than ' + b);
// }

// else if (a < b){
//     alert(b + ' is greater than ' + a);
// }
// else if (a = b){
//     alert(a + ' is equal to ' + b);
// }


// // ===  Exercise No.3


// var number = +prompt ('Enter a number.','Enter Here')

// if (number>0){
//     alert('The number is positive.')
// }

// else if (number<0){
//     alert('The number is negative.')
// }

// else if (number === 0){
//     alert('The number is zero.')
// }

// else{
//     alert('Invalid !')
// }


// // ===  Exercise No.4


// var character = prompt('Enter a character.','Enter Here')

// if  (character == 'a' || 'e' || 'i' || 'o' || 'u' || 'A' || 'E' || 'I' || 'O' || 'U'){
//     alert('True')
// }

// else{
//     alert('False')
// }


// // ===  Exercise No.5


// var password = 'storm';
// var no_Password = '';
// var user_Password = prompt('Enter password to proceed.');

// if (user_Password === password){
//     alert('"Correct! The password you entered matches the original password"');
// }

// else if (user_Password === no_Password){
//     alert('"Please enter password to proceed"');
// }

// else if (user_Password !== password){
//     alert('"Incorrect password !"');
// }


// // ===  Exercise No.6


// var greeting;
// var hour = 13;

// if (hour < 18 ){
//     alert(greeting = 'Good Day!');
// }

// else {
//     alert(greeting = 'Good Evening!');
// }

// // === Exercise No.7



// // // END // //



// // // => ASSIGNMENT # 13-15 (ARRAYS)



// // ===  Exercise No.1


// var arr = [];


// // ===  Exercise No.2


// var arr = newArray ();


// // ===  Exercise No.3


// var arr = ['Solid' , 'Liquid' , 'Gas' , 'Plasma' + '<br/>'];

// document.write('String Array : ' + arr);


// // ===  Exercise No.4


// var rr_num = [1 , 2 , 3 , 4 + '<br/>'];

// document.write('Number Array : ' + arr_num);


// // ===  Exercise No.5


// var arr_boolean = [true , false + '<br/>'];

// document.write('Boolean Array : ' + arr_boolean);


// // ===  Exercise No.6


// var arr_mixed = [1 , 'Planet' , true + '<br/>' ];

// document.write('Mixed Array : ' + arr_mixed);


// // ===  Exercise No.7


// document.write('<h2>' + 'QUALIFICATION' + '</h2>')

// var qualification = ['1. SSC' , '2. HSC' , '3. BCS' , '4. BS' , '5. BCOM' , '6. MS' , '7. M.Phil.' , '8. PhD']

// for ( i=0 ; i <= 0 ; i++){
//     document.write(qualification.join('<br/>'));
// }


// // ===  Exercise No.8


// var students = ['Micheal' , 'John' , 'Tony'];

// var obtainedMarks = [320 , 230 , 480];

// var totalMarks = 500;

// document.write('Score of ' + students[0] + ' is ' + obtainedMarks[0] + '.' + 'Percentage: ' + (obtainedMarks[0]/totalMarks)*100 + '%' + '<br/>');
// document.write('Score of ' + students[1] + ' is ' + obtainedMarks[1] + '.' + 'Percentage: ' + (obtainedMarks[1]/totalMarks)*100 + '%' + '<br/>');
// document.write('Score of ' + students[2] + ' is ' + obtainedMarks[2] + '.' + 'Percentage: ' + (obtainedMarks[2]/totalMarks)*100 + '%');


// // ===  Exercise No.9
// // ===  Exercise No.10


// var scores = [320 , 230 , 480 , 120];

// document.write('Scores of Students: ' + scores + '<br/>');

// scores.sort();

// document.write('Ordered Scores of Students: ' + scores);



// // ===  Exercise No.11


// document.write('<h4> Cities list : </h4>')

// var cities = ['Karachi' , 'Lahore' , 'Islamabad' , 'Queeta' , 'Peshawar'];
// document.write(cities);

// document.write('<h4> Selected Cities List : </h4>')

// var slectedCitiesList = cities.slice (2,4);
// document.write(slectedCitiesList);


// // ===  Exercise No.12


// var arr = ['This' , 'is' , 'my' , 'cat.'];

// document.write('<b> Array : </b> <br/>');
// document.write(arr + '<br/>');

// document.write('<b> String : </b> <br/>');
// document.write(arr.join(' ') + '<br/>');


// // ===  Exercise No.13


// document.write('Devices : <br/>');

// var devices = ['Keyboard' , 'Mouse' , 'Printer' , 'Monitor']
// document.write(devices + '<br/>' + '<br/>');

// for (var i= 0 ; i <  4 ; i++ ){
//     document.write('Out :' + '<br/>' + devices[i] + '<br/>');
// }


// // ===  Exercise No.14


// document.write('Devices : <br/>');

// var devices = ['Keyboard' , 'Mouse' , 'Printer' , 'Monitor']
// document.write(devices + '<br/>' + '<br/>');

// for (var i= devices.length - 1 ; i >= 0 ; i-- ){
//     document.write('Out :' + '<br/>' + devices[i] + '<br/>');
// }


// // ===  Exercise No.15


// var arr = ['Apple' , 'Samsung' , 'Motrola' , 'Nokia' , 'Sony' , 'Haier'];

// document.write('<select>');
// for (var i = 0 ; i < arr.length ; i++){
//     document.write('<option>' + arr[i] + '</option>');
// }
// document.write('</select>');


// // // END // //



// // // => ASSIGNMENT # 17-20 (ARRAYS AND LOOPS)



// // ===  Exercise No.1
// // ===  Exercise No.2


// // ===  Exercise No.3


// var i;

// for(i = 1 ; i <= 10 ; i++){
//     document.write(i + '<br/>');
// }


// // ===  Exercise No.4


// var table = prompt("Enter a number to dispaly it's table.");
// var length = prompt('Enter the prefferred length of table');

// document.write('<h3>' + 'Multipilication table of ' + table + '</h3>' + '<h3>' + 'Length : '  + length + '</h3>');

// for(i = 1 ; i <= length ; i++){
//     document.write(table + 'x' + i + '=' + i*table + '<br/>');
// }


// // ===  Exercise No.5


// var fruits = ['apple' , 'banana' , 'mango' , 'orange' , 'strawberry'];

// for(i = 0 ; i < fruits.length; i++){
//     document.write(fruits[i] + '<br/>');
// }

// document.write('<br/>');

// for(i = 0 ; i < fruits.length ; i++){
//     document.write('Element at index ' + i + ' is ' + fruits[i] + '<br/>');
// }


// // ===  Exercise No.6


// var count = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];

// document.write('<h3>' + 'Counting ' + '</h3>' + count + '<br/>');
// document.write('<h3>' + 'Reverse Counting ' + '</h3>' + count.reverse() + '<br/>');

// var i;
// document.write('<h3> Even numbers </h3>');

// for(i = 1 ; i <= 20 ; i++){
//     if(i%2 == 0){
//         document.write(i + ',');
//     }
// }

// var j;
// document.write('<h3>' + 'Odd numbers ' + '</h3>');

// for(j = 0 ; j <= 20 ; j++){
//     if(j%2 !== 0){
//         document.write(j + ',');
//     }
// }

// var k;
// document.write('<h3>' + 'Series ' + '</h3>');

// for(k = 1 ; k <= 20 ; k++){
//     if(k%2 === 0){
//         document.write(k + 'k' + ',');
//     }
// }


// // ===  Exercise No.7


// var bake_Items = ['Cake' , 'Apple Pie' , 'Cookie' , 'Chips' , 'Patties'];
// var userSearch = prompt("Welcome to xyz Bakery. \n What do you want to order sir/ma'am ?");

// if(bake_Items.indexOf(userSearch) !== -1){
//     alert('Yes ' + userSearch + ' is available.');
// }
// else{
//     alert('Sorry ' + userSearch + ' is not available.');
// }


// // ===  Exercise No.8


// var a = [28 , 44 , 89 , 62 , 94];

// document.write(Math.max(...a));


// // ===  Exercise No.9


// var a = [28 , 44 , 89 , 62 , 94];

// document.write(Math.min(...a));


// // ===  Exercise No.10


// var i;

// for(i = 1 ; i <= 20 ; i++){
//     document.write(i*5 + ' , ');
// }


// // // END // //