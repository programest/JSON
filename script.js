$.ajax({
	url: 'https://dms.interteach.kz/test/ajax_test.php',         /* Куда пойдет запрос */
	method: 'POST',             /* Метод передачи (post или get) */
	dataType: 'html',          /* Тип данных в ответе (xml, json, script, html). */
	data: {text: 'Текст'},     /* Параметры передаваемые в запросе. */
	success: function(data){   /* функция которая будет выполнена после успешного запроса.  */
		            /* В переменной data содержится ответ от index.php. */
	},
  error: function(xhr, ajaxOptions, thrownError) {
        console.log(xhr.status);
        console.log(thrownError);
      }
});