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
    printTryLeft(3);
    printManualPin('');
}) ;
function getPin(){
    return document.getElementById('manualPin').value
}
function printManualPin(num){
    document.getElementById('manualPin').value = num;
}
var numbers = document.getElementsByClassName('number');
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function(){
        var previous = getPin();
        var current = previous + numbers[i].innerText;
        printManualPin(current);
    })
    
}


document.getElementById('submit').addEventListener('click', function(){
    var manualPin = getPin();
    var generatedPin = document.getElementById('generateField').value;
    console.log(manualPin);
    console.log(generatedPin);
    if(manualPin == generatedPin){
        document.getElementById('notify-positive').style.display = 'block';
        document.getElementById('notify-negative').style.display = 'none';
    }
    else{
        document.getElementById('notify-negative').style.display = 'block';
        document.getElementById('notify-positive').style.display = 'none';
        var n = document.getElementById('try-left').innerText;
        n = parseInt(n);
        if(n==0){
            alert("You cannot enter anymore");
        }
        else{
            n--;
            printTryLeft(n);
        }
    }
});

document.getElementById('clear').addEventListener('click', function(){
    printManualPin('');
})
document.getElementById('backspace').addEventListener('click', function(){
    var previous = getPin();
    var current = previous.slice(0, -1);
    printManualPin(current);
});

function printTryLeft(n){
    document.getElementById('try-left').innerText = n;
}