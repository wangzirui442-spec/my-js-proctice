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

//test

