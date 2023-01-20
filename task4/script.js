const w3r = document.getElementById('w3r')

function getAttributes() {
	alert(
		'href: ' +
			w3r.href +
			'\n' +
			'hreflang: ' +
			w3r.hreflang +
			'\n' +
			'rel: ' +
			w3r.rel +
			'\n' +
			'target: ' +
			w3r.target +
			'\n' +
			'type: ' +
			w3r.type
	)
}
