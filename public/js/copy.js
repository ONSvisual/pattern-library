function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();

    //show
    $(document).on('click', '.trigger', function () {
        $(this).addClass("on");
        setTimeout(RemoveClass, 2000);
		});
		function RemoveClass() {
		$('.trigger').removeClass("on");
		};
    };
