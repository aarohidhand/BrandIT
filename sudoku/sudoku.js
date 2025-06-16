let in12 = document.querySelector('#c12')
let in13 = document.querySelector('#c13')
let in14 = document.querySelector('#c14')
let in15 = document.querySelector('#c15')
let in17 = document.querySelector('#c17')
let in19 = document.querySelector('#c19')

let in21 = document.querySelector('#c21')
let in22 = document.querySelector('#c22')
let in23 = document.querySelector('#c23')
let in25 = document.querySelector('#c25')
let in26 = document.querySelector('#c26')
let in27 = document.querySelector('#c27')
let in29 = document.querySelector('#c29')

let in31 = document.querySelector('#c31')
let in32 = document.querySelector('#c32')
let in33 = document.querySelector('#c33')
let in34 = document.querySelector('#c34')
let in35 = document.querySelector('#c35')
let in36 = document.querySelector('#c36')
let in38 = document.querySelector('#c38')
let in39 = document.querySelector('#c39')

let in41 = document.querySelector('#c41')
let in43 = document.querySelector('#c43')
let in44 = document.querySelector('#c44')
let in45 = document.querySelector('#c45')
let in46 = document.querySelector('#c46')
let in47 = document.querySelector('#c47')
let in48 = document.querySelector('#c48')
let in49 = document.querySelector('#c49')

let in51 = document.querySelector('#c51')
let in52 = document.querySelector('#c52')
let in54 = document.querySelector('#c54')
let in58 = document.querySelector('#c58')
let in59 = document.querySelector('#c59')

let in61 = document.querySelector('#c61')
let in62 = document.querySelector('#c62')
let in63 = document.querySelector('#c63')
let in65 = document.querySelector('#c65')
let in66 = document.querySelector('#c66')
let in67 = document.querySelector('#c67')
let in69 = document.querySelector('#c69')

let in71 = document.querySelector('#c71')
let in72 = document.querySelector('#c72')
let in74 = document.querySelector('#c74')
let in75 = document.querySelector('#c75')
let in77 = document.querySelector('#c77')
let in79 = document.querySelector('#c79')

let in81 = document.querySelector('#c81')
let in82 = document.querySelector('#c82')
let in83 = document.querySelector('#c83')
let in85 = document.querySelector('#c85')
let in86 = document.querySelector('#c86')
let in87 = document.querySelector('#c87')
let in88 = document.querySelector('#c88')
let in89 = document.querySelector('#c89')

let in91 = document.querySelector('#c91')
let in94 = document.querySelector('#c94')
let in96 = document.querySelector('#c96')
let in98 = document.querySelector('#c98')
let in99 = document.querySelector('#c99')

let butt = document.querySelector('button')
let rmsg =document.querySelector('.rmsg')
let wmsg =document.querySelector('.wmsg')

butt.addEventListener("click" ,()=>{
    if(in12.value=='1'
         && in13.value=='2'
         && in14.value=='9'
         && in15.value=='4'
         && in17.value=='6'
         && in19.value=='5'
         && in21.value=='7'
         && in22.value=='5'
         && in23.value=='3'
         && in25.value=='8'
         && in26.value=='2'
         && in27.value=='4'
         && in29.value=='1'
         && in31.value=='6'
         && in32.value=='4'
         && in33.value=='9'
         && in34.value=='1'
         && in35.value=='7'
         && in36.value=='5'
         && in38.value=='8'
         && in39.value=='3'
         && in41.value=='1'
         && in43.value=='4'
         && in44.value=='3'
         && in45.value=='6'
         && in46.value=='9'
         && in47.value=='2'
         && in48.value=='8'
         && in49.value=='7'
         && in51.value=='2'
         && in52.value=='3'
         && in54.value=='8'
         && in58.value=='6'
         && in59.value=='9'
         && in61.value=='8'
         && in62.value=='9'
         && in63.value=='6'
         && in65.value=='2'
         && in66.value=='1'
         && in67.value=='5'
         && in69.value=='4'
         && in71.value=='5'
         && in72.value=='2'
         && in74.value=='4'
         && in75.value=='3'
         && in77.value=='7'
         && in79.value=='6'
         && in81.value=='9'
         && in82.value=='7'
         && in83.value=='4'
         && in85.value=='2'
         && in86.value=='6'
         && in87.value=='3'
         && in88.value=='1'
         && in89.value=='8'
         && in91.value=='3'
         && in94.value=='9'
         && in96.value=='7'
         && in98.value=='5'
         && in99.value=='2'
        ){
            console.log("right")
            rmsg.style.display="block"
            wmsg.style.display="none"


        }else{
            console.log("worng")
            rmsg.style.display="none"
            wmsg.style.display="block"

        }
})