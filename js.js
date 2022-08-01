var btn = document.querySelectorAll('.btn')
for (i = 0; i < btn.length; i++) {
    btn[i].onclick = function () {
        var check = document.querySelector('#out2').innerHTML;
        if (check == '') {
            var dl = this.innerHTML;
            var out1 = document.querySelector('#out1');
            out1.value = out1.value + dl;
        }
        else {
            reset()
            var dl = this.innerHTML;
            var out1 = document.querySelector('#out1');
            out1.value = out1.value + dl;
        }
    }
}

function result() {
    var out1 = document.querySelector('#out1');
    var out2 = document.querySelector('#out2');
    resulconvert = out1.value;
    out2.innerHTML = eval(resulconvert);
}

function clear1(){
    var out1 = document.querySelector('#out1');
     var clear=out1.value.slice(0,out1.value.length-1);
     out1.value=clear;
}
function reset() {
    var out1 = document.querySelector('#out1');
    out1.value = '';
    var out1 = document.querySelector('#out2');
    out2.innerHTML = '';
}



window.addEventListener("keypress", function () {
    console.log('dfsd')
    var out1 = document.querySelector('#out1');
    var out2 = document.querySelector('#out2');
    resulconvert = out1.value;
    out2.innerHTML = eval(resulconvert);
})
 