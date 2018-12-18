
$(document).ready(function () {
	// 去除虚线框（会影响效率）
	$("a,input:checkbox,input:radio,button,input:button").live('focus', function () { $(this).blur(); });


	$('.file input[type=file]').change(function (e) {
		$(this).siblings('.text').text($(this).val());
	});

	if (!-[1,]) {
		$('input[type=radio]').bind('click', function () {
			var name = $(this).attr('name');
			$('input[type=radio]["name="' + name + ']').removeClass('checked');
			if ($(this).prop('checked')) {
				$(this).addClass('checked');
			}
		});
	}
	if (!!!$('.opt-panel').size() && !!!$('.system-switch').size()) {
		$(document).click(function (e) {
			$(top.window.document).find('.opt-panel').hide().end().find('.system-switch').hide();
			$(top.window.document).find('.more-info').removeClass('active').end().find('.logo-icon').removeClass('active');
		});
	}

	if (!!!$('.more-bab-list').size()) {
		$(document).click(function (e) {
			$(top.window.document).find('iframe').contents().find('.more-bab-list').hide();
			$(top.window.document).find('iframe').contents().find('.tab-more').removeClass('active');
		});
	}
});


function hideElement(currentElement, targetElement, fn) {
	if (!$.isArray(targetElement)) {
		targetElement = [targetElement];
	}
	$(document).on("click.hideElement", function (e) {
		var len = 0, $target = $(e.target);
		for (var i = 0, length = targetElement.length; i < length; i++) {
			$.each(targetElement[i], function (j, n) {
				if ($target.is($(n)) || $.contains($(n)[0], $target[0])) {
					len++;
				}
			});
		}
		if ($.contains(currentElement[0], $target[0])) {
			len = 1;
		}
		if (len == 0) {
			currentElement.hide();
			fn && fn(currentElement, targetElement);
		}
	});
};


/*
 *  用来给不支持HTML5 placeholder属性的浏览器增加此功能。
 *  @param element {String or Object} 需要添加placeholder提示的输入框选择器或者输入框jquery对象。
 *  @param defualtCss {String} 提示默认的样式class。
 */

function showRemind(element, defualtCss) {
	if (-[1,]) {
		return false;
	}

	$(element).each(function (el, i) {
		var placeholder = $(this).attr('placeholder');
		if (placeholder) {
			$(this).addClass(defualtCss).val(placeholder);
			$(this).focus(function (e) {
				if ($(this).attr('placeholder') === $(this).val()) {
					$(this).val('').removeClass(defualtCss);
				}
			});

			$(this).blur(function (e) {
				if ($(this).val() === "") {
					$(this).addClass(defualtCss).val($(this).attr('placeholder'));
				}
			});
		}
	});
}

function resize(resizeHandle) {
	var d = document.documentElement;
	var timer;//避免resize触发多次,影响性能
	var width = d.clientWidth, height = d.clientHeight;
	$(top.window).on('resize', function (e) {
		if ((width != d.clientWidth || height != d.clientHeight)) {
			width = d.clientWidth, height = d.clientHeight;
			if (timer) { clearTimeout(timer); }
			timer = setTimeout(function () {
				resizeHandle();
			}, 10);
		}
	});

}

window.HTTP_URL = 'https://www.shiliuyuan.club/air/'

window.GLOBAL_UTILS = {
	getWithExpire: function (key) {
		try {
			var data = void 0;
			data = window.localStorage.getItem(key);
			if (data && data !== null) {
				data = JSON.parse(data);
				var start = data.start;
				var expire = data.expire;
				var end = new Date().getTime() / 1000;
				if (end - start >= expire) {
					window.localStorage.removeItem(key);
					return null;
				}
				else {
					return data;
				}
			}
			return data;
		}
		catch (err) {
			alert('不支持本地缓存');
		}
	},
	isLogin: function () {
		let data = window.GLOBAL_UTILS.getWithExpire("LOCALSTORAGE_LOGIN")
		if (data !== null) {
			let { value, expire, start } = data
			let end = new Date().getTime() / 1000
			utils.userInfo.init(value)
			if (end - start >= expire - 3600) {
				return false
			} else {
				return true
			}

		} else {
			return false
		}
	}
}