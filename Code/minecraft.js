const ip = "6.tcp.ngrok.io:11971";
const url = "https://mcapi.us/server/status?ip=" + ip;

// Función que copia la dirección IP al portapapeles del usuario
function copyIp() {
	const ipInput = document.getElementById("ip");
	ipInput.select();
	ipInput.setSelectionRange(0, 99999);
	document.execCommand("copy");
	alert("La dirección IP ha sido copiada al portapapeles.");
}

// Función que muestra la lista de usuarios conectados
function showUserList(data) {
	const userList = document.getElementById("userList");
	if (data.status === "success" && data.players && data.players.sample) {
		const users = data.players.sample.map(user => `<li>${user.name}</li>`).join("");
		userList.innerHTML = users;
	} else {
		userList.innerHTML = "<li>No se encontraron usuarios conectados.</li>";
	}
}

// Llamada a la API para obtener la información del servidor
fetch(url)
	.then(response => response.json())
	.then(data => showUserList(data))
	.catch(error => console.error(error));
