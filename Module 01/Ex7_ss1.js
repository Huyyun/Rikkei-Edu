let a = +prompt("Nhập a: ");
let b = +prompt("Nhập b: ");

if (a === 0){
    if (b === 0){
        console.log("Phương trình có vô số nghiệm");
    } else {
        console.log("Phương trình vô nghiệm");
    }
} else {
    let x = -b / a;
    console.log(`Nghiệm của phương trình là: x = ${x}`);
}