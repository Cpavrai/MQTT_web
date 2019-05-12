const DATA = {
	contact : [
		"Bot",
		"Tatanou",
		"Thomas"
	],
	discuss : [
		{
			target: "Tatanou",
			chat: [
				{
					origin: "Tatanou",
					contain: "Bonjour je m'appelle Tatanou"
				},
				{
					origin: "charles",
					contain: "Bonjour, je ne suis pas disponible pour le moment."
				},
				{
					origin: "Tatanou",
					contain: "Quand le serez-vous ?"
				},
				{
					origin: "Tatanou",
					contain: "Que je puisse fixer le rendez-vous au plus vite"
				},
				{
					origin: "charles",
					contain: "Malheureusement, je pense n'être disponible qu'en fin de semaine"
				},
				{
					origin: "charles",
					contain: "Samedi ou dimanche vous conviendrait-il ?"
				},
				{
					origin: "Tatanou",
					contain: "Samedi, je ne serai disponible qu'à partir de 17h. Sinon dimanche dans l'après-midi ?"
				},
				{
					origin: "charles",
					contain: "Samedi me conviendrait parfaitement"
				},
				{
					origin: "charles",
					contain: "Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla"
				}
			]
		},
		{
			target: "Bot",
			chat: [
				{
					origin: "Bot",
					contain: "But have you still some problem with your device ? Perhaps shall you use another way to connect youself to the social network API ?"
				}
			]
		}
	],
	user : "charles"
}

function choose_chat(data, user_name) {
	$("#target").empty()
	$("#discussion").empty()

	$("#target").append(`<h2>${user_name}</h2>`)
	data.discuss.forEach(function(tmp_discussion) {
		if (tmp_discussion.target == user_name) {
			tmp_discussion.chat.forEach(function(e) {
				$("#discussion").append(`<div class="${e.origin == user_name ? "not-" : ""}me"><p>${e.contain}</p></div>`)
			})
		}
	})
	$('#discussion').scrollTop(9999999)
}

function load_discuss(data) {
	data.contact.forEach(function(tmp_contact) {
		$("#contact").append(`<div><div class="img" id="${tmp_contact}"></div><p>${tmp_contact}</p></div>`)
	})
	choose_chat(data, "Tatanou")
}

load_discuss(DATA)

$("#contact > div").click(function(e) {
	choose_chat(DATA, e.target.id)
})