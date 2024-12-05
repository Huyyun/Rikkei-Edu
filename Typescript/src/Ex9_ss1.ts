for (let i = 1; i <= 10; i++) {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let j = 0; j < 6; j++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(`%cMàu sắc đã được thay đổi`, `color: ${color}; font-weight: bold;`);
}