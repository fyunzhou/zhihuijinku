/**
 * Created by Administrator on 2017/5/18.
 */
function show(){
    var b1=document.getElementById('t21in');
    var b2=document.getElementById('t22in');
    var b3=document.getElementById('t23in');
    if( b1.style.display=="",b2.style.display = "none",b3.style.display = "none"
            || b1.style.display=="block", b2.style.display=="block",b3.style.display=="block"
        || b1.style.display=="block")
    {b1.style.display = "none";
    }
    else{
        b1.style.display = "block";
    }
}
function show2(){
    var b1=document.getElementById('t22in');
    var b2=document.getElementById('t21in');
    var b3=document.getElementById('t23in');
    if( b1.style.display=="",b2.style.display = "none",b3.style.display = "none"
            || b1.style.display=="block",b2.style.display=="block",b3.style.display=="block"
        || b1.style.display=="block"){
        b1.style.display = "none";
    }else{
        b1.style.display = "block";
    }
}
function show3(){
    var b1=document.getElementById('t23in');
    var b2=document.getElementById('t21in');
    var b3=document.getElementById('t22in');
    if( b1.style.display=="",b2.style.display = "none",b3.style.display = "none"
            || b1.style.display=="block",b2.style.display=="block",b3.style.display=="block"
        || b1.style.display=="block"){
        b1.style.display = "none";
    }else{
        b1.style.display = "block";
    }
}

function colorwhite() {
    var l1=document.getElementById('li1');
    var l2=document.getElementById('li2');
    var l3=document.getElementById('li3');
    if( l2.style.backgroundColor == "white",l2.style.borderLeft == "5px solid #df4d02",
        l3.style.backgroundColor == "",l3.style.borderLeft == ""
        ||l2.style.backgroundColor=="",l2.style.borderLeft == "",
        l3.style.backgroundColor=="white",l3.style.borderLeft == "5px solid #df4d02"
       ){
        l2.style.backgroundColor = "";
        l2.style.borderLeft = "";
        l3.style.backgroundColor = "";
        l3.style.borderLeft = "";
        l1.style.backgroundColor = "white";
        l1.style.borderLeft = "5px solid #df4d02"
        }
else{
        l2.style.backgroundColor = "";
        l2.style.borderLeft = "";
        l3.style.backgroundColor = "";
        l3.style.borderLeft = "";
        l1.style.backgroundColor = "white";
        l1.style.borderLeft = "5px solid #df4d02"
    }
}

function colorwhite2() {
    var l1=document.getElementById('li1');
    var l2=document.getElementById('li2');
    var l3=document.getElementById('li3');
    if( l1.style.backgroundColor == "white",l1.style.borderLeft == "5px solid #df4d02",
        l3.style.backgroundColor == "",l3.style.borderLeft == ""
        ||l1.style.backgroundColor=="",l1.style.borderLeft == "",
        l3.style.backgroundColor=="white",l3.style.borderLeft == "5px solid #df4d02"
    ){
        l1.style.backgroundColor = "";
        l1.style.borderLeft = "";
        l3.style.backgroundColor = "";
        l3.style.borderLeft = "";
        l2.style.backgroundColor = "white";
        l2.style.borderLeft = "5px solid #df4d02"
    }
    else{
        l1.style.backgroundColor = "";
        l1.style.borderLeft = "";
        l3.style.backgroundColor = "";
        l3.style.borderLeft = "";
        l2.style.backgroundColor = "white";
        l2.style.borderLeft = "5px solid #df4d02"
    }
}
function colorwhite3() {
    var l1=document.getElementById('li1');
    var l2=document.getElementById('li2');
    var l3=document.getElementById('li3');
    if( l1.style.backgroundColor == "",l1.style.borderLeft == "",
        l2.style.backgroundColor == "white",l2.style.borderLeft == "5px solid #df4d02"
        ||l1.style.backgroundColor=="white",l1.style.borderLeft == "5px solid #df4d02",
        l2.style.backgroundColor=="",l2.style.borderLeft == ""
    ){
        l2.style.backgroundColor = "";
        l2.style.borderLeft = "";
        l1.style.backgroundColor = "";
        l1.style.borderLeft = "";
        l3.style.backgroundColor = "white";
        l3.style.borderLeft = "5px solid #df4d02"
    }
    else
    {
        l2.style.backgroundColor = "";
        l2.style.borderLeft = "";
        l1.style.backgroundColor = "";
        l1.style.borderLeft = "";
        l3.style.backgroundColor = "white";
        l3.style.borderLeft = "5px solid #df4d02"
    }
}
