let a = +prompt("Nhập a: ");
let b = +prompt("Nhập b: ");
let c = +prompt("Nhập c: ");

if (a === 0){
    if (b === 0){
        if (c === 0){
            console.log("Phương trình có vô số nghiệm");
        } else {
            console.log("Phương trình vô nghiệm");
        }
    } else {
        let x = -c / b;
        console.log(`Phương trình bậc nhất 1 nghiệm là x = ${x.toFixed(2)}`);
    }
} else {
    let delta = (b ** 2) - (4 * a * c);
    if (delta > 0){
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log(`Phương trình có 2 nghiệm phân biệt là: x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`);
    } else if (delta === 0) {
        let x = -b / (2 * a)
        console.log(`Phương trình có nghiệm kép x = ${x.toFixed(2)}`);
    } else {
        console.log("Phương trình vô nghiệm");
    }
}