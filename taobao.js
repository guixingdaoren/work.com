// JavaScript Document
$(document).ready(function(){
	$(".tph-rightmenu-nav").mouseover(function(){
		$(this).children(".tph-rightmenu-hide").show();
		});
	$(".tph-rightmenu-nav").mouseout(function(){
		$(this).children(".tph-rightmenu-hide").hide();
		});
		//搜索按钮的颜色变
	$("#headsearch-button").mouseover(function(){
		$(this).css("background-color","#e63f00")
		});	
	$("#headsearch-button").mouseout(function(){
		$(this).css("background-color","#f63")
		});	
	$(".menucontent-type-listxp").mouseover(function(){
		$(this).children(".menucontent-type-abc").show();
		});
	$(".menucontent-type-listxp").mouseout(function(){
		$(this).children(".menucontent-type-abc").hide();
		});			
	});
	
	
	$(function () {
            var menucontent_picture_upleft = $('#menucontent-picture-upleft');
            var content_pictureup = $('#content-pictureup');
            var buttons = $('#picture-button span');
            var prev = $('#prev');
            var next = $('#next');
            var index = 1;
            var len = 5;
            var interval = 3500;
            var timer;


            function animate (offset) {
                var left = parseInt(content_pictureup.css('left')) + offset;
                if (offset>0) {
                    offset = '+=' + offset;
                }
                else {
                    offset = '-=' + Math.abs(offset);
                }
                content_pictureup.animate({'left': offset}, 300, function () {
                    if(left > -200){
                        content_pictureup.css('left', -520 * len);
                    }
                    if(left < (-520 * len)) {
                        content_pictureup.css('left', -520);
                    }
                });
            }

            function showButton() {
                buttons.eq(index-1).addClass('on').siblings().removeClass('on');
            }

            function play() {
                timer = setTimeout(function () {
                    next.trigger('click');
                    play();
                }, interval);
            }
            function stop() {
                clearTimeout(timer);
            }

            next.bind('click', function () {
                if (content_pictureup.is(':animated')) {
                    return;
                }
                if (index == 5) {
                    index = 1;
                }
                else {
                    index += 1;
                }
                animate(-520);
                showButton();
            });

            prev.bind('click', function () {
                if (content_pictureup.is(':animated')) {
                    return;
                }
                if (index == 1) {
                    index = 5;
                }
                else {
                    index -= 1;
                }
                animate(520);
                showButton();
            });

            buttons.each(function () {
                 $(this).bind('click', function () {
                     if (content_pictureup.is(':animated') || $(this).attr('class')=='on') {
                         return;
                     }
                     var myIndex = parseInt($(this).attr('index'));
                     var offset = -520 * (myIndex - index);

                     animate(offset);
                     index = myIndex;
                     showButton();
                 })
            });

            menucontent_picture_upleft.hover(stop, play);

            play();

        });
		$(function(){
			$(window).bind("scroll",function(){
				var sTop = $(window).scrollTop();
				var sTop = parseInt(sTop);
				if(sTop >= 130){
					if(!$("#upscrollbar").is(":visible")){
						try{
							$("#upscrollbar").show();
							}catch(e){
								$("#upscrollbar").show();
								}
						}
					}
					else{
						if($("#upscrollbar").is(":visible")){
							try{
								$("#upscrollbar").hide();
								}catch(e){
									$("#upscrollbar").hide();
									}
							}
						}
				});
			});
			$(document).ready(function () {
            $(window).scroll(function () {
                var items = $("#sidelistcontent").find(".sidelist");
                var menu = $("#rightscrollbarf");
                var top = $(document).scrollTop();
                var currentId = ""; 
                items.each(function () {
                    var m = $(this);
                  
                    if (top > m.offset().top - 300) {
                        currentId = "#" + m.attr("id");
                    } else {
                        return false;
                    }
                });

                var currentLink = menu.find(".rightscrollbar1");
                if (currentId && currentLink.attr("href") != currentId) {
                    currentLink.removeClass("rightscrollbar1");
                    menu.find("[href='"+currentId+"']").addClass("rightscrollbar1");
                }
            });
        });