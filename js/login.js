$("#alert").hide()
$("#fade").hide()

$("#confirm").click(function() {
	$("#alert").show()
	$("#fade").show()
	$("#fade").click(function() {
		$("#alert").hide()
		$("#fade").hide()
	})
})