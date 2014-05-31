/**
 * Created by Administrator on 2014/5/28.
 */

$(function(){

    $("#btn_encrypt").click(function(){

        var $txt_bindCode=   $("#txt_bindCode");

        var params=[];
        $("#protocol,#business").find("input").each(function(i,n){
            params.push({
                key: n.name,
                value: n.value
            });
        });

        console.log(params);
        //升序排列
        params=params.sort(function (a, b) {
            return a.key>b.key?1:-1;
        });
        console.log(params);
        var sign="";
        for(var i=0;i<params.length;i++){
            sign+=params[i].key+"="+params[i].value+"&";
        }
        sign=sign.substring(0,sign.length-1);
        console.log(sign);
        //+key
        sign+="123456789112345678911234567891";
        console.log(sign);
        var sign = $().crypt({method:"md5",source:sign});
        $("input[name='sign']").val(sign);
        console.log(sign);
    });


    $("#btn_get_url").click(function(){

        var $txt_bindCode=   $("#txt_bindCode");

        var params=[];
        $("#protocol,#business").find("input").each(function(i,n){
            params.push({
                key: n.name,
                value: n.value
            });
        });

        console.log(params);
        //升序排列
        params=params.sort(function (a, b) {
            return a.key>b.key?1:-1;
        });
        console.log(params);
        var sign="";
        for(var i=0;i<params.length;i++){
            sign+=params[i].key+"="+encodeURI(params[i].value)+"&";
        }
        sign=sign.substring(0,sign.length-1);
        console.log(sign);
        //+key
        //sign+="123456789112345678911234567891";
        console.log(sign);
        var url=sign;
        sign = $().crypt({method:"md5",source:sign+"123456789112345678911234567891"});
        $("input[name='sign']").val(sign);
        console.log(sign);
        url=url+"&"+"sign="+sign+"&etc=1382028849633";

        console.log(url);
$("#get_url").html( "<a href='?"+url+"'>"+url+"</a>");
    });
});

