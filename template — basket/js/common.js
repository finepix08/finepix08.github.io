$(document).ready(function() {

    // Валидация формы
    $(".form").validate({
        submitHandler: function(form) {
            $.ajax({
            url: "mail/send.php",
            type: "POST",
            dataType: "JSON",
            data: new FormData(form),
            processData: false,
            contentType: false,
            success: function (data, status)
            {
                $("#success").fancybox().trigger('click');
                $(".form")[0].reset();
                setTimeout(function() {
                    $.fancybox.close();
                }, 3000);
            },
            error: function (xhr, desc, err)
            {
                console.log(desc, err);
            }
        }); 
        return false;
        },
       rules:{         
            name:{
                required: true,
                minlength: 4,
                maxlength: 50,
            },
            phone:{
                minlength: 7,
                maxlength: 30,
                required: true,
            },
            email:{
                email: true,
                required: true,
            },
            mess:{
                mess: true,
                required: true,
            }
       },
       messages:{
            name:{
                required: "* это поле обязательно для заполнения",
                minlength: "* имя должно быть минимум 4 символа",
                maxlength: "* максимальное число символо - 50",
            },
            phone:{
                required: "* это поле обязательно для заполнения",
                minlength: "* телефон должен быть минимум 7 цифр",
                maxlength: "* максимальное число цифр - 30",
            },
            email:{
                required: "* это поле обязательно для заполнения",
                email: "* неправильно указан e-mail адрес",
            },
            mess: {
                required: "* это поле обязательно для заполнения",
            }
       }
    });

	// Маска ввода телефона в формате +375 (...) ...
    $.mask.definitions['~']='[234]';
    $.mask.definitions['*']='[3459]';
    $("input[name='phone']").mask("+375 (~*) 999-99-99");

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox({padding: 0}); //rel="lightbox" 

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 4
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(window).scroll(function(){
        if ($(this).scrollTop() > 500){
            $('#top').fadeIn();
        } else {$('#top').fadeOut();}
    });
    $("#top").click(function () {
        $("body, html").animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $("#number1").click(function() {
       var a = $(this).val();
       var b = 225;
       var c = $("#number2").val();
       var d = 225;
       var summ1 = a*b;
       var summ2 = c*d;
       var summ = summ1+summ2;
       $("#span21").text(summ1);
       $("#span3").text(summ);
    });

    $("#number2").click(function() {
       var a = $("#number1").val();
       var b = 225;
       var c = $("#number2").val();
       var d = 225;
       var summ1 = a*b;
       var summ2 = c*d;
       var summ = summ1+summ2;
       $("#span22").text(summ2);
       $("#span3").text(summ);
    });

        $("#close1").click(function(){
        $("#item1").fadeOut();
        $("#item1").addClass("disable");
    });

    $("#close2").click(function(){
        $("#item2").fadeOut();
        $("#item2").addClass("disable");
    });

  /*  $(function(){
        if ($("#item1").hasClass("disable")) {
        $("#deleteall").text("Восстановить");
         }
    });*/


    $("#deleteall").click(function(){
        $(".item").fadeToggle();
        if ($(".item").attr("style") == 'display: flex; opacity: 1;' ||
         $(".item").attr("style") == 'opacity: 1;') {
         $(this).text("Восстановить");
        } else {
            $(this).text("Сбросить всё");
        }
    });





});