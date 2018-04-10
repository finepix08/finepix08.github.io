$(document).ready(function() {

	// Валидация формы
	$("#top-form").validate({
        submitHandler: function(form) {
            $.ajax({
                type: "GET",
                url: "mail.php",
                data: $("#top-form").serialize()
            }).done(function() {
                $("#top-form p.form-title").text("Спасибо за заявку!");
                $("#top-form p.form-title").css("padding-bottom", "15px");
                $("#top-form").css("margin-top", "50px");
                $("#top-form input").hide();
                setTimeout(function() {
                    $.fancybox.close();
                }, 3000);
            });
        },
       rules:{ 
        
            name:{
                required: true,
                minlength: 4,
                maxlength: 50,
            },
            tel:{
                required: true,
                minlength: 7,
                maxlength: 20,
                digits: true,
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

            tel:{
                required: "* это поле обязательно для заполнения",
                minlength: "* телефон должен быть минимум 7 цифр",
                maxlength: "* максимальное число цифр - 20",
                digits: "* только цифры",
            },
            
            email:{
                required: "* это поле обязательно для заполнения",
                email: "* неправильно указан e-mail адрес",
            },
       }
    });

	// Валидация формы
	$("#discount-form").validate({
        submitHandler: function(form) {
            $.ajax({
                type: "GET",
                url: "mail.php",
                data: $("#discount-form").serialize()
            }).done(function() {
                // $("#top-form p.form-title").text("Спасибо за заявку!");
                // $("#top-form p.form-title").css("padding-bottom", "15px");
                // $("#top-form").css("margin-top", "50px");
                // $("#top-form input").hide();
                setTimeout(function() {
                    $.fancybox.close();
                }, 3000);
            });
        },
       rules:{ 
        
            name:{
                required: true,
                minlength: 4,
                maxlength: 50,
            },
            tel:{
                required: true,
                minlength: 7,
                maxlength: 20,
                digits: true,
            },
       },
       messages:{
        
            name:{
                required: "* это поле обязательно для заполнения",
                minlength: "* имя должно быть минимум 4 символа",
                maxlength: "* максимальное число символо - 50",
            },

            tel:{
                required: "* это поле обязательно для заполнения",
                minlength: "* телефон должен быть минимум 7 цифр",
                maxlength: "* максимальное число цифр - 20",
                digits: "* только цифры",
            },
       }
    });

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

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
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
});