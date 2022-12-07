function isProstoe(a) {
    if (a === 0 || a === 1) {
        console.log("Веденное число,не может быть равно 0 или 1 ")
        return
    }
    if (a > 1000) {
        console.log("Данные неверны")
        return;
    }
    for (let i = 2; i < a; i++) {
        console.log(i)
        if (a % i === 0) {
            console.log(a + ' число не простое')
            return;
        }

    }
    console.log(a + ' число простое')
}

isProstoe(109)