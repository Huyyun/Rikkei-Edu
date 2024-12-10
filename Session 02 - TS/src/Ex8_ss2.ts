function isValid(s: string): boolean {
    let stack: string[] = [];

    for (let i = 0; i < s.length; i++) {
        let currentChar = s[i];
        if (currentChar === '(' || currentChar === '{' || currentChar === '[') {
            stack.push(currentChar);  
        } else {
            if (stack.length === 0) {
                return false; 
            }
            let lastOpen = stack.pop(); 
            if (
                (currentChar === ')' && lastOpen !== '(') ||
                (currentChar === '}' && lastOpen !== '{') ||
                (currentChar === ']' && lastOpen !== '[')
            ) {
                return false;  
            }
        }
    }

    return stack.length === 0;
}

let s = "()";
console.log(isValid(s));  

let s2 = "({[()]})";
console.log(isValid(s2));  

let s3 = "([)]";
console.log(isValid(s3));  
