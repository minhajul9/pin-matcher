console.log('hello');
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