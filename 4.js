function twoNumber (a, b){
    const x = setInterval(function () {
        if ( a >= b ){
            clearInterval(x)
        }
        console.log(a)
        a = a+1
    },1000)

}
twoNumber(5, 15)