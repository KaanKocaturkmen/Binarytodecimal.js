
let binary = "1000000000000011";

function binaryToDecimal(binary) {
    let total = 0;
    let top = 0;
    for (let i = binary.length - 1; i >= 0; i--) {
        if(Number(binary.charAt(i))!=0){
        total += Number(binary.charAt(i)) * Math.pow(2,top);}
        top++;
    }
    console.log("Result : " + total);
}

binaryToDecimal(binary);