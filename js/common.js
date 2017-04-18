/**
 * Created by silence on 2017/1/22.
 */
$(function(){
    $(".orderUl .one").click(function(){
        $(this).css({
            background:"url('images/star_a.png') no-repeat",
            backgroundSize:"cover"
        })
        $(this).siblings(".ee").css({
            background:"url('images/star.png') no-repeat",
            backgroundSize:"cover"
        })
    });
    $(".orderUl .two").click(function(){
        $(this).parent(".starUl").find(".aa").css({
            background:"url('images/star_a.png') no-repeat",
            backgroundSize:"cover"
        });
        $(this).parent(".starUl").find(".aa_a").css({
            background:"url('images/star.png') no-repeat",
            backgroundSize:"cover"
        })
    });
    $(".orderUl .three").click(function(){
        $(this).parent(".starUl").find(".bb").css({
            background:"url('images/star_a.png') no-repeat",
            backgroundSize:"cover"
        });
        $(this).parent(".starUl").find(".bb_b").css({
            background:"url('images/star.png') no-repeat",
            backgroundSize:"cover"
        })
    });
    $(".orderUl .four").click(function(){
        $(this).parent(".starUl").find(".cc").css({
            background:"url('images/star_a.png') no-repeat",
            backgroundSize:"cover"
        });
        $(this).parent(".starUl").find(".cc_c").css({
            background:"url('images/star.png') no-repeat",
            backgroundSize:"cover"
        })
    });
    $(".orderUl .five").click(function(){
        $(this).parent(".starUl").find(".dd").css({
            background:"url('images/star_a.png') no-repeat",
            backgroundSize:"cover"
        });



    })
    //购买数量
    $(".orderNum .plus").click(function(){
        $(this).siblings(".hide").css({display:"block"});
        var num = $(this).siblings(".number").text();
        num++
        $(this).siblings(".number").text(num);
        total();
    })
    $(".orderNum .minus").click(function(){
        var num = $(this).siblings(".number").text();
        num--;
        if(num==-1){
            $(this).parent(".orderNum").find(".hide").hide();
        }else{
            $(this).siblings(".number").text(num);
        }
        if(num==0){
            $(this).parent(".orderNum").find(".hide").hide();
        }
        total();
    });
    //合计
    function total(){
        var last = 0;
        for(var i =0;i<=$(".order .mainLi").length;i++){
            var univalent = $(".order .mainLi").eq(i).find(".univalent").text();
            var number = $(".order .mainLi").eq(i).find(".number").text();
            var balance = univalent*number;
            //balance=balance+=balance;
            last+=balance;
            $(".orderTotal .turn").text(last);
        }
    }

    //结算中心
    var acNum = $(".accountsNum .detailNum").text();
    var acUnivalent = $(".accountsprice span").text();
    var acTotal = acNum*acUnivalent;
    $(".accountsTotal .number").text(acTotal);
    $(".accountssame span").text(acNum);

    $(".accountsminus").click(function(){
        var acNum = $(".accountsNum .detailNum").text();
        acNum--;
        if(acNum==0){
            $(".accountsNum .detailNum").hide();
            $(".accountsNum .accountsminus").hide();
        }
        $(".accountsNum .detailNum").text(acNum);
        var newNum = $(".accountsNum .detailNum").text();
        $(".accountssame span").text(newNum);
        var newTotal = newNum*acUnivalent;
        $(".accountsTotal .number").text(newTotal);
    })
    $(".accountsplus").click(function(){
        var acNum = $(".accountsNum .detailNum").text();
        acNum++;
        if(acNum!=0){
            $(".accountsNum .detailNum").show();
            $(".accountsNum .accountsminus").show();
        }
        $(".accountsNum .detailNum").text(acNum);
        var newNum = $(".accountsNum .detailNum").text();
        $(".accountssame span").text(newNum);
        var newTotal = newNum*acUnivalent;
        $(".accountsTotal .number").text(newTotal);
    })
})