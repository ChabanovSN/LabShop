$("document").ready(function() {
	var colors = new Array;
// Выключаем все ссылки со стилем .switch и строим массив цветов.
	$(".switch[rel='stylesheet']").each(function() {
		$(this).attr("disabled", "true");
		colors.push($(this).css("color"));
	});
	
	//Затем мы просматриваем все цвета для того чтобы сформировать и 
	//добавить на страницу переключатель тем.
	var st =0;
	$(colors).each(function(index, el) {
		$("#sheetswitch").append("<a class='swatch' style='background-color:" + el + ";'>" + ++st +"</a>");
		console.log(el);
	});
	
	$("#sheetswitch").append("<a href='#' class='sheetswitch_next'><img src='../../images/1rightarrow.png' /></a>");
	
	//Сначала мы выключаем все стили, затем включаем стиль с выбранным индексом, 
	//затем сохраняем выделенное значение в cookies.
	$(".swatch").click(function() {
		$(".swatch").removeClass("swatch_hi");
		$(this).addClass("swatch_hi");
		var index = $(".swatch").index(this);
		$(".switch[rel='stylesheet']").attr("disabled", "true");
		$(".switch[rel='stylesheet']").eq(index).attr("disabled", "");
		$.cookie('mysite_sheetswitch_idx', index, {expires: 7});
	});
	//Далее рассмотрим элементы циклического переключения тем.
	// Они должны находить индекс текущей темы и изменять его значение на 1.
	// Для перехода на начало или конец списка, воспользуемся функцией size()
	$(".sheetswitch_next").click(function() {
		var selected = $(".switch[rel='stylesheet']").filter(function () { return $(this).attr("disabled") == false; });
		var current_idx = $(".switch[rel='stylesheet']").index($(selected));
		var length = $(".switch[rel='stylesheet']").size();
		
		if (current_idx >= 0) {
			var next = current_idx + 1;
			if (next > (length - 1)) next = 0;
			
			$(".switch[rel='stylesheet']").attr("disabled", "true");
			$(".switch[rel='stylesheet']").eq(next).attr("disabled", "");
			
			$(".swatch").removeClass("swatch_hi");
			$(".swatch").eq(next).addClass("swatch_hi");
			
			$.cookie('mysite_sheetswitch_idx', next, {expires: 7});
		}
		
		return false;
	});
	
	$(".sheetswitch_prev").click(function() {
		var selected = $(".switch[rel='stylesheet']").filter(function () { return $(this).attr("disabled") == false; });
		var current_idx = $(".switch[rel='stylesheet']").index($(selected));
		var length = $(".switch[rel='stylesheet']").size();
		
		if (current_idx >= 0) {
			var next = current_idx - 1;
			if (next == -1) next = (length - 1);
			
			$(".switch[rel='stylesheet']").attr("disabled", "true");
			$(".switch[rel='stylesheet']").eq(next).attr("disabled", "");
			
			$(".swatch").removeClass("swatch_hi");
			$(".swatch").eq(next).addClass("swatch_hi");
			
			$.cookie('mysite_sheetswitch_idx', next, {expires: 7});
		}
		
		return false;
	});
	// проверка перед загрузкой темы. Проверим, установлены ли cookies для выбранной темы,
	// и если это так, то устанавливает стиль без загрузки.
	if ($.cookie('mysite_sheetswitch_idx')) {
		alert("dsdsds");
		var idx = $.cookie('mysite_sheetswitch_idx');
		$(".switch[rel='stylesheet']").eq(idx).attr("disabled", "");
		$(".swatch").eq(idx).addClass("swatch_hi");
	}
});

function bay(){
	alert("Вот будет сервер тогда и купишь");
}