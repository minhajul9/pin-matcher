document.getElementById('generateButton').addEventListener('click', function(){
    var num = Math.random()*9999;
    num = Math.round(num) +'';
    if(num.length==1){
        num = num+'000';
    }
    else if(num.length==2){
        num = num+'00';
    }
    else if(num.length==3){
        num = num+'0';
    }
    document.getElementById('generateField').value = num;
}) ;
function getPin(){
    return document.getElementById('manualPin').value
}
function printManualPin(num){
    document.getElementById('manualPin').value = num;
}
var numbers = document.getElementsByClassName('button');
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function(){
        var previous = getPin();
        var current = previous + numbers[i].innerText;
        printManualPin(current);
    })
    
}

