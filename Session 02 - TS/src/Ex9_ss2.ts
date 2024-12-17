function isPalindrome(s: string): boolean {
    // Chuyển tất cả ký tự về chữ thường và chỉ giữ lại các ký tự chữ và số
    let filteredString = '';
    for (let i = 0; i < s.length; i++) {
        let char = s[i].toLowerCase();
        // Kiểm tra nếu ký tự là chữ cái hoặc số
        if (char.match(/[a-z0-9]/)) {
            filteredString += char;
        }
    }

    // Kiểm tra nếu chuỗi đã lọc là palindrome
    let left = 0;
    let right = filteredString.length - 1;

    while (left < right) {
        if (filteredString[left] !== filteredString[right]) {
            return false;  // Nếu có sự khác biệt, không phải là palindrome
        }
        left++;
        right--;
    }

    return true;  // Nếu không có sự khác biệt, là palindrome
}

// Ví dụ sử dụng hàm:
let s1 = "racecar";
console.log(isPalindrome(s1));  // Output: true

let s2 = "raceacar";
console.log(isPalindrome(s2));  // Output: false

let s3 = "A man, a plan, a canal, Panama!";
console.log(isPalindrome(s3));  // Output: true

let s4 = "hello";
console.log(isPalindrome(s4));  // Output: false
