/**
 * Created by Administrator on 2017/5/16.
 */
function show2(){
    var b1=document.getElementById('xlk1');
    if( b1.style.display==""|| b1.style.display=="block"){
        b1.style.display = "none";
    }else{
        b1.style.display = "block";}
}


$('#btn').click(function () {
    $(this).val($(this).val()=="展开"?"收起":"展开");
    if($(this).val()=="展开")
    $('#box2').animate({
        'top' : '-150px',
    },1000);
    else {
        $('#box2').animate({
            'top' : '-10px',
        },1000);
    }
});
