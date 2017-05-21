/**
 * Created by Administrator on 2017/5/18.
 */
function show2(){
    var b1=document.getElementById('xlk1');
    if( b1.style.display==""|| b1.style.display=="block"){
        b1.style.display = "none";
    }else{
        b1.style.display = "block";}
}

function colorwhite() {
    var l1=document.getElementById('i1');
    var l2=document.getElementById('i2');
    var l3=document.getElementById('i11');
    var l4=document.getElementById('i22');
    if( l2.style.backgroundColor == "rgba(239, 99, 13, 0.96)",l4.style.color =="white" ,l1.style.backgroundColor == "",l3.style.color =="white"
    ||l2.style.backgroundColor == "", l4.style.color =="", l3.style.color =="",l1.style.backgroundColor == "")
    {
        l2.style.backgroundColor = "";
        l4.style.color =="";
        l1.style.backgroundColor = "rgba(239, 99, 13, 0.96)";
        l3.style.color =="white";
    }
    else{
        l1.style.backgroundColor = "rgba(239, 99, 13, 0.96)";
        l3.style.color =="white";
    }
}

function colorwhite2() {
    var l1=document.getElementById('i1');
    var l2=document.getElementById('i2');
    var l3=document.getElementById('i11');
    var l4=document.getElementById('i22');
    if( l1.style.backgroundColor == "rgba(239, 99, 13, 0.96)",l3.style.color =="white",l2.style.backgroundColor == "",l4.style.color ==""
        ||l1.style.backgroundColor == "",l2.style.backgroundColor == ""
    ){
        l2.style.backgroundColor = "rgba(239, 99, 13, 0.96)";
        l4.style.color =="white";
        l1.style.backgroundColor = "";
        l3.style.color =="";
    }
    else{
        l2.style.backgroundColor = "rgba(239, 99, 13, 0.96)";
        l3.style.color =="white";

    }
}