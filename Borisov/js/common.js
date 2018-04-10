// Табы
(function($){               
    jQuery.fn.lightTabs = function(options){

        var createTabs = function(){

            tabs = this;
            i = 0;
            
            showPage = function(i){
                $(tabs).children("div").children("div").hide();
                $(tabs).children("div").children("div").eq(i).show();
                $(tabs).children("ul").children("li").removeClass("active");
                $(tabs).children("ul").children("li").eq(i).addClass("active");
            }
            
            showPage(0);                
            
            $(tabs).children("ul").children("li").each(function(index, element){
                $(element).attr("data-page", i);
                i++;                        
            });
            
            $(tabs).children("ul").children("li").click(function(){
                showPage(parseInt($(this).attr("data-page")));
            });             
        };      
        return this.each(createTabs);
    };  
})(jQuery);

$(document).ready(function() {

    $(".select-photo .item").click(function(){
        var index = $(this).find("img").data("index");
        $(this).parent().parent().next().find("input[name='window']").val(index);
    });

    $(".buttons .cold").click(function(){
        $(".buttons button").removeClass("active");
        $(this).addClass("active");
        $("img.window").attr("src", "images/w-cold.png");
        $(".glass").css({
            background: "url(images/cold-bg.png)",
            "background-size": "cover"
        });
        $(".window-title").text("Алюминиевый профиль");
        $(".glass .more").text("");
        $(".glass .more").attr("href", "#cold-popup");
    });
    $(".buttons .warm").click(function(){
        $(".buttons button").removeClass("active");
        $(this).addClass("active");
        $("img.window").attr("src", "images/w-warm.png");
        $(".glass").css({
            background: "url(images/warm-bg.png)",
            "background-size": "cover"
        });
        $(".window-title").text("Металлопластиковый профиль");
        $(".glass .more").text("");
        $(".glass .more").attr("href", "#warm-popup");
    });

    // Табы
    $(".tabs").children("div").children("div").hide();
    $(".tabs .tabs-content").eq(0).show();
    $(".tabs ul li").click(function(){
        $(".tabs").children("div").children("div").hide();
        $(".tabs").children("div").children("div").eq($(this).index()).show();
        $(".tabs").children("ul").children("li").removeClass("active");
        $(".tabs").children("ul").children("li").eq($(this).index()).addClass("active");
    });
    
    $(".calculate-tabs").lightTabs();

    $(".calculate-tabs .select-photo .item").click(function(){
        $(this).parent().parent().find(".item").removeClass("active");
        $(this).addClass("active");
        $(this).parent().parent().parent().parent().find(".mainPhoto").attr('src', $(this).find("img").attr('src'));
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
    $("#top-form").validate({
        submitHandler: function(form) {
            $.ajax({
            url: "send/send.php",
            type: "POST",
            dataType: "JSON",
            data: new FormData(form),
            processData: false,
            contentType: false,
            success: function (data, status)
            {
                window.location.href = "/thanks.html";
            },
            error: function (xhr, desc, err)
            {
                console.log(desc, err);
            }
        }); 
        return false;
        },
       rules:{         
            tel:{
                minlength: 7,
                maxlength: 17,
                required: true,
            },
       },
       messages:{
            tel:{
                required: "* это поле обязательно для заполнения",
                minlength: "* телефон должен быть минимум 7 цифр",
                maxlength: "* максимальное число цифр - 20",
            },
       }
    });

    // Валидация формы
    $("#popup-call-form").validate({
        submitHandler: function(form) {
            $.ajax({
            url: "send/send.php",
            type: "POST",
            dataType: "JSON",
            data: new FormData(form),
            processData: false,
            contentType: false,
            success: function (data, status)
            {
                window.location.href = "/thanks.html";
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
            tel:{
                minlength: 7,
                maxlength: 17,
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
            },
       }
    });

    // Валидация формы
    $("#call-form").validate({
        submitHandler: function(form) {
            $.ajax({
            url: "send/send.php",
            type: "POST",
            dataType: "JSON",
            data: new FormData(form),
            processData: false,
            contentType: false,
            success: function (data, status)
            {
                window.location.href = "/thanks.html";
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
            tel:{
                minlength: 7,
                maxlength: 17,
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
            tel:{
                required: "* это поле обязательно для заполнения",
                minlength: "* телефон должен быть минимум 7 цифр",
                maxlength: "* максимальное число цифр - 20",
            },
            email:{
                required: "* это поле обязательно для заполнения",
                email: "* неправильно указан e-mail адрес",
            },
       }
    });

    // Валидация формы
    $("#calc-form-1").validate({
        submitHandler: function(form) {
            $.ajax({
            url: "send/send.php",
            type: "POST",
            dataType: "JSON",
            data: new FormData(form),
            processData: false,
            contentType: false,
            success: function (data, status)
            {
                window.location.href = "/thanks.html";
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
            tel:{
                minlength: 7,
                maxlength: 17,
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
            tel:{
                required: "* это поле обязательно для заполнения",
                minlength: "* телефон должен быть минимум 7 цифр",
                maxlength: "* максимальное число цифр - 20",
            },
            email:{
                required: "* это поле обязательно для заполнения",
                email: "* неправильно указан e-mail адрес",
            },
       }
    });

    // Валидация формы
    $("#calc-form-2").validate({
        submitHandler: function(form) {
            $.ajax({
            url: "send/send.php",
            type: "POST",
            dataType: "JSON",
            data: new FormData(form),
            processData: false,
            contentType: false,
            success: function (data, status)
            {
                window.location.href = "/thanks.html";
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
            tel:{
                minlength: 7,
                maxlength: 17,
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
            tel:{
                required: "* это поле обязательно для заполнения",
                minlength: "* телефон должен быть минимум 7 цифр",
                maxlength: "* максимальное число цифр - 20",
            },
            email:{
                required: "* это поле обязательно для заполнения",
                email: "* неправильно указан e-mail адрес",
            },
       }
    });

    // Валидация формы
    $("#calc-form-3").validate({
        submitHandler: function(form) {
            $.ajax({
            url: "send/send.php",
            type: "POST",
            dataType: "JSON",
            data: new FormData(form),
            processData: false,
            contentType: false,
            success: function (data, status)
            {
                window.location.href = "/thanks.html";
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
            tel:{
                minlength: 7,
                maxlength: 17,
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
            tel:{
                required: "* это поле обязательно для заполнения",
                minlength: "* телефон должен быть минимум 7 цифр",
                maxlength: "* максимальное число цифр - 20",
            },
            email:{
                required: "* это поле обязательно для заполнения",
                email: "* неправильно указан e-mail адрес",
            },
       }
    });

    // Валидация формы
    $("#calc-form-4").validate({
        submitHandler: function(form) {
            $.ajax({
            url: "send/send.php",
            type: "POST",
            dataType: "JSON",
            data: new FormData(form),
            processData: false,
            contentType: false,
            success: function (data, status)
            {
                window.location.href = "/thanks.html";
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
            tel:{
                minlength: 7,
                maxlength: 17,
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
            tel:{
                required: "* это поле обязательно для заполнения",
                minlength: "* телефон должен быть минимум 7 цифр",
                maxlength: "* максимальное число цифр - 20",
            },
            email:{
                required: "* это поле обязательно для заполнения",
                email: "* неправильно указан e-mail адрес",
            },
       }
    });

    // Валидация формы
    $("#calc-form-5").validate({
        submitHandler: function(form) {
            $.ajax({
            url: "send/send.php",
            type: "POST",
            dataType: "JSON",
            data: new FormData(form),
            processData: false,
            contentType: false,
            success: function (data, status)
            {
                window.location.href = "/thanks.html";
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
            tel:{
                minlength: 7,
                maxlength: 17,
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
            tel:{
                required: "* это поле обязательно для заполнения",
                minlength: "* телефон должен быть минимум 7 цифр",
                maxlength: "* максимальное число цифр - 20",
            },
            email:{
                required: "* это поле обязательно для заполнения",
                email: "* неправильно указан e-mail адрес",
            },
       }
    });

	// Маска ввода телефона в формате +375 (...) ...
    $('.number-mask')

    .keydown(function (e) {
        var key = e.charCode || e.keyCode || 0;
        $phone = $(this);

        // Auto-format- do not expose the mask as the user begins to type
        if (key !== 8 && key !== 9) {
            if ($phone.val().length === 8) {
                $phone.val($phone.val() + ') ');
            }
        }

        // Allow numeric (and tab, backspace, delete) keys only
        return (key == 8 || 
                key == 9 ||
                key == 46 ||
                (key >= 48 && key <= 57) ||
                (key >= 96 && key <= 105)); 
    })
    
    .bind('focus click', function () {
        $phone = $(this);
        
        if ($phone.val().length === 0) {
            $phone.val('+375 (');
        }
        else {
            var val = $phone.val();
            $phone.val('').val(val); // Ensure cursor remains at the end
        }
    })
    
    .blur(function () {
        $phone = $(this);
        
        if ($phone.val() === '(') {
            $phone.val('');
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

    // ТАЙМЕР -->
    function get_timer() {
    
        var date_new = dateEnd;
        
        var date_t = new Date(date_new);
        var date = new Date();
        var timer = date_t - date;
        
        if(date_t > date) {
            var day = parseInt(timer/(60*60*1000*24));
            if(day < 10) {
                day = '0' + day;
            }
            day = day.toString();
            var hour = parseInt(timer/(60*60*1000))%24;
            if(hour < 10) {
                hour = '0' + hour;
            }
            hour = hour.toString();
            var min = parseInt(timer/(1000*60))%60;
            if(min < 10) {
                min = '0' + min;
            }
            min = min.toString();
            var sec = parseInt(timer/1000)%60;
            if(sec < 10) {
                sec = '0' + sec;
            }
            sec = sec.toString();
            if(day[1] == 9 && 
                hour[0] == 2 && 
                hour[1] == 3 && 
                min[0] == 5 && 
                min[1] == 9 && 
                sec[0] == 5 && 
                sec[1] == 9) {
                animation($("#day0"),day[0]);
            }
            else {
                $("#day0").html(day[0]);
            }
            if(hour[0] == 2 && 
                hour[1] == 3 && 
                min[0] == 5 && 
                min[1] == 9 && 
                sec[0] == 5 && 
                sec[1] == 9) {
                animation($("#day1"),day[1]);
            }
            else {
                $("#day1").html(day[1]);
            }
            if(hour[1] == 3 && 
                min[0] == 5 && 
                min[1] == 9 && 
                sec[0] == 5 && 
                sec[1] == 9) {
                animation($("#hour0"),hour[0]);
            }
            else {
                $("#hour0").html(hour[0]);
            }
            if(min[0] == 5 && 
                min[1] == 9 && 
                sec[0] == 5 && 
                sec[1] == 9) {
                animation($("#hour1"),hour[1]);
            }
            else {
                $("#hour1").html(hour[1]);
            }
            if(min[1] == 9 && 
                sec[0] == 5 && 
                sec[1] == 9) {
                animation($("#min0"),min[0]);
            }
            else {
                $("#min0").html(min[0]);
            }
            if(sec[0] == 5 && sec[1] == 9) {
                animation($("#min1"),min[1]);
            }
            else {
                $("#min1").html(min[1]);
            }
            if(sec[1] == 9) {
                animation($("#sec0"),sec[0]);
            }
            else {
                $("#sec0").html(sec[0]);
            }
            animation($("#sec1"),sec[1]);   
            setTimeout(get_timer,1000);
        }
        else {
            $("#st").text("Акция завершена! Но получить скидку еще можно! Просто напишите о нас на своей страничке ВКонтакте, Одноклассники или Твиттер");
            $("#timer_wrap").hide();
        }
        
    }
    function animation(vibor,param) {
        vibor.html(param)
            .css({'marginTop':'-20px','opacity':'0'})
            .animate({'marginTop':'0px','opacity':'1'});
    }
    get_timer();
    // <-- ТАЙМЕР
});


var myDate = new Date();

		function returnEndDate(d,h,m){
			myDate.setDate(myDate.getDate()+d);
			myDate.setHours(myDate.getHours()+h);
			myDate.setMinutes(myDate.getMinutes()+m);
			myDate.setHours(0,0,0,0);
			return myDate;
		}
		
		var dateEnd = returnEndDate(1,0,0);
		var RowDate = new Date(dateEnd);
var current = new Date();
		var _day = current .getDate();
		var _month = RowDate.getMonth();