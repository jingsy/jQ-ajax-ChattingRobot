
function init(){
    bindEvent();
}

function bindEvent(){
    $('#submit').click(function(){
        var val = $('#inp').val();
        if(val){
            renderDom('mine',val);
            $('#inp').val('');
            getData(val);
        }
    });
    $('#inp').keyup(function(e){
        //判断回车
        if(e.keyCode == 13){
            $('#submit').trigger('click');
        }
    })
}

function getData(val){
    $.ajax({
        type: 'get',
        url:'http://api.duyiedu.com/api/chat/sendMsg',
        data:{
            appkey:'jingshuyan_1560065464918',
            msg:val,
        },
        //用户希望返回的数据类型
        dataType:'json',
        success: function(res){
            if(res.status == 'success'){
                renderDom('robot',res.data.text);
            }
        }
    });
}

function renderDom(who,text){
    var str ='<div class="'+who+'">\
    <div class="avatar"></div>\
    <div class="text">'+text+'</div>\
</div>';
    $(str).appendTo($('.content'));
    $('.content').scrollTop($('.content')[0].scrollHeight - $('.content')[0].clientHeight);
}

init();