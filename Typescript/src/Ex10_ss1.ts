let day = prompt("Nhập ngày sinh của bạn:");
let month = prompt("Nhập tháng sinh của bạn:");

let zodiacSign = "";

if (day === null || month === null) {
    alert("Bạn đã hủy trò chơi!");
} else {
    let numDay = +day;
    let numMonth = +month;

    if (isNaN(numDay) || isNaN(numMonth) || numDay < 1 || numDay > 31 || numMonth < 1 || numMonth > 12) {
        alert("Dữ liệu nhập vào không hợp lệ! Vui lòng nhập lại.");
    } else {
        switch(numMonth) {
            case 1:
                if (numDay >= 20) {
                    zodiacSign = "Bảo Bình (Aquarius)";
                } else {
                    zodiacSign = "Ma Kết (Capricorn)";
                }
                break;
            case 2:
                if (numDay >= 19) {
                    zodiacSign = "Song Ngư (Pisces)";
                } else {
                    zodiacSign = "Bảo Bình (Aquarius)";
                }
                break;
            case 3:
                if (numDay >= 21) {
                    zodiacSign = "Bạch Dương (Aries)";
                } else {
                    zodiacSign = "Song Ngư (Pisces)";
                }
                break;
            case 4:
                if (numDay >= 20) {
                    zodiacSign = "Kim Ngưu (Taurus)";
                } else {
                    zodiacSign = "Bạch Dương (Aries)";
                }
                break;
            case 5:
                if (numDay >= 21) {
                    zodiacSign = "Song Tử (Gemini)";
                } else {
                    zodiacSign = "Kim Ngưu (Taurus)";
                }
                break;
            case 6:
                if (numDay >= 21) {
                    zodiacSign = "Cự Giải (Cancer)";
                } else {
                    zodiacSign = "Song Tử (Gemini)";
                }
                break;
            case 7:
                if (numDay >= 23) {
                    zodiacSign = "Sư Tử (Leo)";
                } else {
                    zodiacSign = "Cự Giải (Cancer)";
                }
                break;
            case 8:
                if (numDay >= 23) {
                    zodiacSign = "Xử Nữ (Virgo)";
                } else {
                    zodiacSign = "Sư Tử (Leo)";
                }
                break;
            case 9:
                if (numDay >= 23) {
                    zodiacSign = "Thiên Bình (Libra)";
                } else {
                    zodiacSign = "Xử Nữ (Virgo)";
                }
                break;
            case 10:
                if (numDay >= 23) {
                    zodiacSign = "Bọ Cạp (Scorpio)";
                } else {
                    zodiacSign = "Thiên Bình (Libra)";
                }
                break;
            case 11:
                if (numDay >= 22) {
                    zodiacSign = "Nhân Mã (Sagittarius)";
                } else {
                    zodiacSign = "Bọ Cạp (Scorpio)";
                }
                break;
            case 12:
                if (numDay >= 22) {
                    zodiacSign = "Ma Kết (Capricorn)";
                } else {
                    zodiacSign = "Nhân Mã (Sagittarius)";
                }
                break;
            default:
                zodiacSign = "Ngày tháng không hợp lệ!";
        }

        alert("Cung hoàng đạo của bạn là: " + zodiacSign);
    }
}
