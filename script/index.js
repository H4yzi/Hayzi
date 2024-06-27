var ip = '';
fetch('https://api.ipify.org/?format=json')
.then(function(response) {
    return response.json();
})
.then(function(data) {
    ip = data.ip;
    var currentDate = new Date();
    var formattedDate = currentDate.toLocaleDateString();
    var formattedTime = currentDate.toLocaleTimeString();
    var webhook = 'https://discord.com/api/webhooks/1255710449941614662/xNpPcJXQYaHo5c8rK7PwLiukKEEpWf3Gn6M_hEk1KfeAlF5u9gLfENNcNG9XZtsXyyCb';
    var message = {
        content: '> **Nouvelle connexion au site: ```https://myzerfr.github.io/Myzer```** \n> **IP:** '+ip+'\n> **Le: **'+formattedDate+' **à: **'+formattedTime+'\n> © Myzer | Myzer.dev'
    };

    fetch(webhook, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    });
});
