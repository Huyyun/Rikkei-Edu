let year = +prompt("Nhập năm: ");

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
    console.log(`Năm ${year} là năm nhuận`);
} else {
    console.log(`Năm ${year} là năm không nhuận`);
}