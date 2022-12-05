function chetnueNechetnue(arr) {
    let chetnue = 0
    let nechetnue = 0
    arr.forEach(function (item, index, array){
        if (typeof item ==="number"){
            if (item % 2===1){
                nechetnue = nechetnue + 1
                console.log(item + ' nechetnoe')
            }else{
                chetnue = chetnue + 1
                console.log(item + ' chetnoe')
            }
        }
    })
    console.log(chetnue)
    console.log(nechetnue)
}

let arr = [2, 14, 5, null, 'kek', 33, 7, 'lol']
chetnueNechetnue(arr)
