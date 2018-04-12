$(document).ready(function() {

    $("header .order-btn").click(function(){
       $("#order-form input[name='type']").val("Заказать звонок");
    });
    $(".top .button-red").click(function(){
       $("#order-form input[name='type']").val("Выбрать окно");
    });
    $(".top .button-yellow").click(function(){
       $("#order-form input[name='type']").val("Бесплатный замер");
    });
    $(".catalog .button").click(function(){
       $("#order-form input[name='type']").val("Получить прайс-лист");
    });
    $(".stock .button").click(function(){
       $("#order-form input[name='type']").val("Заказать выезд замерщика");
    });

    $(".calculate-tabs").lightTabs();

    $(".calculate-tabs .open-list li").click(function(){
        $(".calculate-tabs .open-list li").removeClass("active");
        $(this).addClass("active");
        $(this).parent().next().val($(this).index() + 1);
    });

    $(".calc-form .list li").click(function(){
        $(this).toggleClass("active");
    });

    $(".calc-form .list li").click(function(){
        var s = $(this).parent().find("li.active");
        var text = "";
        for (var i = 0; i < s.size(); i++) {
            text += s.eq(i).text() + " ";
        }
        if(text != ""){
            $(this).parent().parent().find("input[name='list']").val(text);
        } else {
            $(this).parent().parent().find("input[name='list']").val("Ничего не выбрано");
        }
    });

    // Валидация формы
    $("#order-form").validate({
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
                $("#order-form")[0].reset();
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
       }
    });

// Валидация формы
    $("#report-form").validate({
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
                $("#report-form")[0].reset();
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
       }
    });

    // Валидация формы
    $("#bottom-form").validate({
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
                $("#bottom-form")[0].reset();
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
       }
    });

    // Валидация формы
    $("#order-form").validate({
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
                $("#order-form")[0].reset();
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
       }
    });

    // Валидация формы
    $("#rassrochka").validate({
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
                $("#rassrochka")[0].reset();
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
            phone:{
                minlength: 7,
                maxlength: 30,
                required: true,
            },
       },
       messages:{
            phone:{
                required: "* это поле обязательно для заполнения",
                minlength: "* телефон должен быть минимум 7 цифр",
                maxlength: "* максимальное число цифр - 30",
            },
       }
    });

    // Валидация формы
    $("#discount-form").validate({
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
                $("#discount-form")[0].reset();
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
            phone:{
                minlength: 7,
                maxlength: 30,
                required: true,
            },
       },
       messages:{
            phone:{
                required: "* это поле обязательно для заполнения",
                minlength: "* телефон должен быть минимум 7 цифр",
                maxlength: "* максимальное число цифр - 30",
            },
       }
    });

    // Валидация формы
    $("#top-form").validate({
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
                $("#top-form")[0].reset();
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
            phone:{
                minlength: 7,
                maxlength: 30,
                required: true,
            },
       },
       messages:{
            phone:{
                required: "* это поле обязательно для заполнения",
                minlength: "* телефон должен быть минимум 7 цифр",
                maxlength: "* максимальное число цифр - 30",
            },
       }
    });

    // Валидация формы
    $("#calc-form-1").validate({
        submitHandler: function(form) {
            $.ajax({
            url: "mail/calc.php",
            type: "POST",
            dataType: "JSON",
            data: new FormData(form),
            processData: false,
            contentType: false,
            success: function (data, status)
            {
                $("#success").fancybox().trigger('click');
                $("#calc-form-1")[0].reset();
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
            phone:{
                minlength: 7,
                maxlength: 30,
                required: true,
            },
            height:{
                minlength: 1,
                maxlength: 3,
                digits: true,
                required: true,
            },
            width:{
                minlength: 1,
                maxlength: 3,
                digits: true,
                required: true,
            },
       },
       messages:{
            phone:{
                required: "* это поле обязательно для заполнения",
                minlength: "* телефон должен быть минимум 7 цифр",
                maxlength: "* максимальное число цифр - 30",
            },
            height:{
                required: "* это поле обязательно для заполнения",
                digits: "* только цифры",
                minlength: "* высота должна быть минимум 1 символ",
                maxlength: "* высота должна быть минимум 3 символа",
            },
            width:{
                required: "* это поле обязательно для заполнения",
                digits: "* только цифры",
                minlength: "* ширина должна быть минимум 1 символ",
                maxlength: "* ширина должна быть минимум 3 символа",
            },
       }
    });

// Валидация формы
    $("#calc-form-2").validate({
        submitHandler: function(form) {
            $.ajax({
            url: "mail/calc.php",
            type: "POST",
            dataType: "JSON",
            data: new FormData(form),
            processData: false,
            contentType: false,
            success: function (data, status)
            {
                $("#success").fancybox().trigger('click');
                $("#calc-form-2")[0].reset();
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
            phone:{
                minlength: 7,
                maxlength: 30,
                required: true,
            },
            height:{
                minlength: 1,
                maxlength: 3,
                digits: true,
                required: true,
            },
            width:{
                minlength: 1,
                maxlength: 3,
                digits: true,
                required: true,
            },
       },
       messages:{
            phone:{
                required: "* это поле обязательно для заполнения",
                minlength: "* телефон должен быть минимум 7 цифр",
                maxlength: "* максимальное число цифр - 30",
            },
            height:{
                required: "* это поле обязательно для заполнения",
                digits: "* только цифры",
                minlength: "* высота должна быть минимум 1 символ",
                maxlength: "* высота должна быть минимум 3 символа",
            },
            width:{
                required: "* это поле обязательно для заполнения",
                digits: "* только цифры",
                minlength: "* ширина должна быть минимум 1 символ",
                maxlength: "* ширина должна быть минимум 3 символа",
            },
       }
    });

// Валидация формы
    $("#calc-form-3").validate({
        submitHandler: function(form) {
            $.ajax({
            url: "mail/calc.php",
            type: "POST",
            dataType: "JSON",
            data: new FormData(form),
            processData: false,
            contentType: false,
            success: function (data, status)
            {
                $("#success").fancybox().trigger('click');
                $("#calc-form-3")[0].reset();
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
            phone:{
                minlength: 7,
                maxlength: 30,
                required: true,
            },
            height:{
                minlength: 1,
                maxlength: 3,
                digits: true,
                required: true,
            },
            width:{
                minlength: 1,
                maxlength: 3,
                digits: true,
                required: true,
            },
       },
       messages:{
            phone:{
                required: "* это поле обязательно для заполнения",
                minlength: "* телефон должен быть минимум 7 цифр",
                maxlength: "* максимальное число цифр - 30",
            },
            height:{
                required: "* это поле обязательно для заполнения",
                digits: "* только цифры",
                minlength: "* высота должна быть минимум 1 символ",
                maxlength: "* высота должна быть минимум 3 символа",
            },
            width:{
                required: "* это поле обязательно для заполнения",
                digits: "* только цифры",
                minlength: "* ширина должна быть минимум 1 символ",
                maxlength: "* ширина должна быть минимум 3 символа",
            },
       }
    });

// Валидация формы
    $("#calc-form-4").validate({
        submitHandler: function(form) {
            $.ajax({
            url: "mail/calc.php",
            type: "POST",
            dataType: "JSON",
            data: new FormData(form),
            processData: false,
            contentType: false,
            success: function (data, status)
            {
                $("#success").fancybox().trigger('click');
                $("#calc-form-4")[0].reset();
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
            phone:{
                minlength: 7,
                maxlength: 30,
                required: true,
            },
            height:{
                minlength: 1,
                maxlength: 3,
                digits: true,
                required: true,
            },
            width:{
                minlength: 1,
                maxlength: 3,
                digits: true,
                required: true,
            },
       },
       messages:{
            phone:{
                required: "* это поле обязательно для заполнения",
                minlength: "* телефон должен быть минимум 7 цифр",
                maxlength: "* максимальное число цифр - 30",
            },
            height:{
                required: "* это поле обязательно для заполнения",
                digits: "* только цифры",
                minlength: "* высота должна быть минимум 1 символ",
                maxlength: "* высота должна быть минимум 3 символа",
            },
            width:{
                required: "* это поле обязательно для заполнения",
                digits: "* только цифры",
                minlength: "* ширина должна быть минимум 1 символ",
                maxlength: "* ширина должна быть минимум 3 символа",
            },
       }
    });

// Валидация формы
    $("#calc-form-5").validate({
        submitHandler: function(form) {
            $.ajax({
            url: "mail/calc.php",
            type: "POST",
            dataType: "JSON",
            data: new FormData(form),
            processData: false,
            contentType: false,
            success: function (data, status)
            {
                $("#success").fancybox().trigger('click');
                $("#calc-form-5")[0].reset();
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
            phone:{
                minlength: 7,
                maxlength: 30,
                required: true,
            },
            height:{
                minlength: 1,
                maxlength: 3,
                digits: true,
                required: true,
            },
            width:{
                minlength: 1,
                maxlength: 3,
                digits: true,
                required: true,
            },
       },
       messages:{
            phone:{
                required: "* это поле обязательно для заполнения",
                minlength: "* телефон должен быть минимум 7 цифр",
                maxlength: "* максимальное число цифр - 30",
            },
            height:{
                required: "* это поле обязательно для заполнения",
                digits: "* только цифры",
                minlength: "* высота должна быть минимум 1 символ",
                maxlength: "* высота должна быть минимум 3 символа",
            },
            width:{
                required: "* это поле обязательно для заполнения",
                digits: "* только цифры",
                minlength: "* ширина должна быть минимум 1 символ",
                maxlength: "* ширина должна быть минимум 3 символа",
            },
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
	var owl = $(".report-slider");
	owl.owlCarousel({
		items: 1,
        singleItem: true
	});
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});

    var gallery = $(".gallery-slider");
    gallery.owlCarousel({
        items: 3,
    });
    $(".next_button").click(function(){
        gallery.trigger("owl.next");
    });
    $(".prev_button").click(function(){
        gallery.trigger("owl.prev");
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
});