const  readline = require('readline')

const input = readline.createInterface(process.stdin , process.stdout)


console.log("/***************!начало игры!*************************/")
console.log("/**********вам необходимо отгадать число!*************/")
console.log("/******как только отгадаете , то игра окончится!******/")
console.log("/******************введите первое число!**************/")

input.on('line',(data)=>{

    let qest_number=45

      if (data==qest_number){
        console.log("/*****************************************************/")
        console.log("/********************ПОБЕДА!**************************/")
        console.log("/*****************************************************/")
        process.exit(0);
    }
    else if (data>qest_number)
    {
        console.log("/меньше/")
    }
    else {
        console.log("/больше/")
    }
})
