var ele = document.getElementById("app");
var position = 0;
var chaArr = [];
var feed = 50;
var str = "";
var positionArr = [31,32,33,34];
function stage(){
    for( var i = 0; i<100; i++ ){
        if( positionArr.indexOf( i ) !=-1 ){
            str +="<span class='color'>" + i +"</span>" 
        }else{
            str +="<span>" + i +"</span>" 
        }
        
    }
    ele.innerHTML = str; 
}

stage();


function kill(){
    var ten = Math.floor(positionArr[0] / 10);
    var ge = positionArr[0] % 10; 
    return {
        ten:ten,
        ge:ge
    }
}


function allJian(){
    var obj = kill();
    if( ( obj.ten != 0 && obj.ge == 0) || ( obj.ten == 0 && obj.ge == 0 ) ){
        alert("game over")
        return;
    }
    for( var i = positionArr.length -1;i >= 1 ; i-- ){
        positionArr[i] = positionArr[i-1];
        //console.log(positionArr[i])
    }
    positionArr[0] = positionArr[0] - 1;
    str = "";
    stage();
}

function allAdd(){
    var obj = kill();
    if( ( obj.ten != 0 && obj.ge == 9) || ( obj.ten == 0 && obj.ge == 9 ) ){
        alert("game over")
        return;
    }
    for( var i = positionArr.length -1;i >= 1 ; i-- ){
        positionArr[i] = positionArr[i-1];
        //console.log(positionArr[i])
    }
    positionArr[0] = positionArr[0] + 1;
    kill()
    str = "";
    stage();
}

function up(){
    var obj = kill();
    if( ( obj.ten == 0 && obj.ge !=0 ) || ( obj.ten == 0 && obj.ge == 9 ) || ( obj.ten == 0 && obj.ge == 0 ) ){
        alert("game over")
        return;
    }
    for( var i = positionArr.length -1;i >= 1 ; i-- ){
        positionArr[i] = positionArr[i-1];
        //console.log(positionArr[i])
    }
    positionArr[0] = positionArr[0] -10 ;
    kill()
    str = "";
    stage();
}

function down(){
    var obj = kill();
    if( ( obj.ten == 9 && obj.ge !=9 ) || ( obj.ten == 9 && obj.ge == 9 ) ){
        alert("game over")
        return;
    }
    for( var i = positionArr.length -1;i >= 1 ; i-- ){
        positionArr[i] = positionArr[i-1];
        //console.log(positionArr[i])
    }
    positionArr[0] = positionArr[0] + 10;
    kill()
    str = "";
    stage();
}

document.addEventListener("keydown",function(e){
    switch( e.keyCode ){
        case 37:
            allJian();
            break;
        case 38:
            up();
            break;
        case 39:
            allAdd();
            break;
        case 40:
            down()
            break;
    }
})


// 17 keyCode 37 = Left
// 18 keyCode 38 = Up
// 19 keyCode 39 = Right
// 20 keyCode 40 = Down





// 四个小方块  第一个是头 第四个是尾





