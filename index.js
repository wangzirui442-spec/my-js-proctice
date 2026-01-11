let age = 91;
console.log(age);
age = 78;
console.log(age);
let $power = 200000;
let $Power = 100000;
console.log($power);
console.log($Power);
const max_health = 999999;//这是一个常量
let levels = 75;//这是一个变量
console.log('I Love China');
//                                                     Day 2                                                                 //
let greeting = 'Hello';
let target ='Web3';
let result = greeting + ' ' + target;
console.log(result);
let sentence = 'Today';
sentence += ',I leaned programming';
console.log(sentence);
let part1 = 'Web3';
let part2 = 'is very cool';
let part3 = part1.concat(' ', part2);
console.log(part3);
const  projectTittle = "Passion";
let myName = "Rui";
let lastResult = "projectTittle" + "myName"
console.log(lastResult)
console.log(
    
    "\t--- Project Summary ---\n" +
    
    "Project Title: " + projectTittle + "\n" +
    "Student Name: " + myName + "\n" +
    
    "Rui's Motto: \"Knowledge is Power\"\n" + 
    

    "Config Path: C:\\User\\" + myName + "\\config.ini\n" + 
    
    
    "Type of  myName: " + typeof myName
);

const thePrice = 20;
const count = 100;
console.log(`睿哥今天卖出了 ${count}只鸡，总共赚了$${thePrice*count}`)
//test


// 今天的练习：定位我的野心
let goal = "I want to earn 8000 dollars monthly!";
let position = goal.indexOf("8000");

if (position !== -1) {
    console.log("找到目标了！位置在第 " + position + " 位。");
} else {
    console.log("还没找到目标，继续努力！");
}

console.log(goal.indexOf("i")); 
let fruit = "Apple";
let check = fruit.indexOf('Banana');
if (check !== -1) {console.log("找到了！他在位置：" + check)}
else{console.log("没找到，返回值是: " + check)};
//我草
let careerDream = prompt('What are your current career dream?', 'Web3 Developer');
let salaryGoal = prompt('What is your target monthly salary?', '8000 Dallars')
let position2 = careerDream.indexOf('Developer');
if (position2 !== -1) {
console.log('梦想很专业! 位置在: position2');}
else {
console.log ('换个更有挑战的梦想试试');}
console.log(

`我的目标是成为${careerDream},
     赚取${salaryGoal}。
                          要成为没有梦想就会死的王路飞！`)

//charCodeAt practice
console.log ('A'.charCodeAt(0));
console.log ("a".charCodeAt(0));
console.log ("5".charCodeAt(0));
console.log ("!".charCodeAt(0));
//fromCharCode practice 
console.log (String.fromCharCode(77));
console.log (String.fromCharCode(99));
console.log (String.fromCharCode(52));
//又练一拳
let ch = "B";let code = ch.charCodeAt(0);
console.log(code + 1);
console.log(String.fromCharCode(code - 1));
//Includes() practice
let $sentence = "Web3 is the future! ";
console.log(sentence.includes("Web3"));
console.log(sentence.includes("web3"));
console.log(sentence.includes("Web3", 5));
console.log(sentence.includes("Java"));

//
let str = "JavaScript";
let a = str.slice(0, 4);
let b = str.slice(4, 10);
console.log(a);
console.log(b);
let test = "Hello World"
let theResult = test.slice(7);
console.log(theResult);
let msg = "Learning JavaScript";
let lastPart = msg.slice(-10);
let middle = msg.slice(9, -1);
let sentence1 = "I love JavaScript and JavaScript loves me";
let r1 = sentence1.includes('JavaScript');
let r2 = sentence1.includes("JavaScript", 10);
let r3 = sentence1.includes("JavaScript", 20);
console.log(r1);
console.log(r2);
console.log(r3);
let email = "user123@gmail.com";
//提取用户名（@前面）
let username = email.slice(0, email.indexOf("@"));
//判断是不是 gamil 邮箱
let isGamail = email.includes("gmail");
console.log(username);
console.log(isGamail);
//
let fileName = "photo.profile.png";
//提取文件后缀名
let ext = fileName.slice(fileName.lastIndexOf(".") + 1);
console.log(ext);
//
//大小写转换练习
let userInput = "JavaScript";
if(userInput.toLowerCase()=== "javascript") {
    console.log("正确输入");
}
let title = "web3 is cool";
console.log(title.toUpperCase());
let answer = "Yes";
if(answer.toLowerCase() === "yes") console.log(答案正确);
let a1 = "   JavaScript   ";
let a2 = a1.trim();
console.log(a2);
let B = "  Hello Web3";
let B1 = B.trimStart();
console.log(B1);
let C = "   Yes   ";
if(C.trim().toLowerCase() === "no")
     {console.log("拒绝");
}
