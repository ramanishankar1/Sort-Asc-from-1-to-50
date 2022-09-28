








function Asc(num) {
    for (let i = 0; i <= num.toString().length; i++) {
        let lastDigit = num % 10;
        num = (num - lastDigit) / 10;
        let lastDigit1 = num % 10;
        if (lastDigit - lastDigit1 < 0) {

            return false
        }

    }
    return true

}
var numbers = Asc(565)
console.log(numbers);


var arr=[]
for(let i=1;i<=50;i++){
    if(Asc(i)){
    arr.push(i)
}
}
console.log(arr);