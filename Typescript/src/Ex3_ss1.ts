let firstName: string = "nguyen";
let lastName: string = "Huy";
let substr1: string = " ";
let substr2: string = " ";
for (let i = 0; i <= firstName.length - 1; i++) {
    if (i === 0)
        substr1 += firstName[i].toUpperCase();
    else 
        substr1 += firstName[i];
}
for (let i = 0; i <= lastName.length - 1; i++) {
    if (i === 0)
        substr2 += lastName[i].toUpperCase();
    else 
        substr2 += lastName[i];
}
let fullName: string = substr1 + " " + substr2;
console.log(fullName);