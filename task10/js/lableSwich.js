/**
 * Created by gang on 2015/12/22.
 */
$(document).ready(function () {
    lableSwich();
    rgHeight();
    mouseover();
});
//��ǩ�л�
function lableSwich() {
    $(".menu-nav-lf span").each(function (index) {          //����span
        $(this).click(function () {
            $("span.menu_hover").removeClass("menu_hover");  //���spanʱ���Ƴ���menu_hover
            $(".menu-nav-lf span").eq(index).addClass("menu_hover");//�ڵ�ǰԪ���������� menu_hover
            //�����Ԫ��ʱ����ʾ��Ӧ��div
            function demo(i) {
                var d = i + 1;
                $(".main_content").children().css("display", "none");
                $(" #s_content_" + d).css("display", "block");
            }
            if (index > 0 && index < 4) {
                demo(index);
            }
        });
    });
}
//�Ҳ�����Ʒ
function rgHeight() {
    var rgHeight = $(window).height();
    $(".rg_more").height(rgHeight);//ʹdiv�߶ȵ��ڵ�ǰ���ڸ߶�
}
//hoverЧ��
function mouseover() {
    $(".more_docu").mouseenter(function () {
            $(".rg_more").css("display", "block").mouseleave(
                function () {
                    $(".rg_more").css("display", "none")
                }
            )
        }
    );
    //�û����� hover

    $("#top_right_user").hover(function () {
        $("#usename_menu").css("display", "block");
    }, function () {
        $("#usename_menu").css("display", "none");
    });
    $("#usename_menu").hover(function () {
        $("#usename_menu").css("display", "block");
    }, function () {
        $("#usename_menu").css("display", "none");
    });


    //���� hover
    $("#top_right_set").hover(function () {
        $("#user_set_menu").css("display", "block");
    }, function () {
        $("#user_set_menu").css("display", "none");
    });
    $("#user_set_menu").hover(function () {
        $("#user_set_menu").css("display", "block");
    }, function () {
        $("#user_set_menu").css("display", "none");
    });
    //���� hover
    $(".weather-wrap").mouseenter(function () {
            $(".set_weather").css("display", "block").mouseleave(
                function () {
                    $(".set_weather").css("display", "none")
                }
            )
        }
    )
}
