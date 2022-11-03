// var firstName = prompt("Enter first name: ");
// var lastName = prompt("Enter Last name: ");
// var city = prompt("Enter city", "Karachi");
// console.log(firstName);
// console.log(lastName);
// console.log(city);

var sub1 = prompt("Enter marks 1");
var sub2 = prompt("Enter marks 2");
var sub3 = prompt("Enter marks 3");
var sub4 = prompt("Enter marks 4");
var sub5 = prompt("Enter marks 5");
console.log(sub1);
console.log(sub2);
console.log(sub3);
console.log(sub4);
console.log(sub5);

var total = parseFloat(sub2) + parseFloat(sub2) + parseFloat(sub3) + parseFloat(sub4) + parseFloat(sub5)


var per = parseFloat(total / 500) * 100;
console.log("Total Marks",total);
console.log("Percentage",per);
if(total<600)
{
if(per>90)
{
    console.log("A+");
}
else if(per>70 && per<=90)
{
    console.log("B+");
}
else if(per>60 && per<=70)
{
    console.log("C+");
}
else
{
    console.log("Fail");
}
}
else
{
    console.log("Ziyada marks btare ho bhai");
}

// var officer = "yes";
// if(officer == "yes")
// {
//     console.log("Document submitted");
// }
// else
// {
//     console.log("wapsi");
// }



// var age = prompt("Enter your age");
// var studentCard = false;

// if(age>18)
// {
//     console.log("Student Allow");
// }
// else if(studentCard == true)
// {
//     console.log("Student allow on student card");
// }
// else
// {
//     console.log("Not allow");
// }