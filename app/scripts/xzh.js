/**
 * Created by Administrator on 2017/5/16.
 */

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
