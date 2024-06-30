let currentCode = generateRandomCode();

function generateRandomCode() {
    return Math.floor(1000 + Math.random() * 9000);
}

function checkCode() {
    const userInput = document.getElementById('userInput').value;
    const resultDiv = document.getElementById('result');
    if (userInput == currentCode) {
        window.location.href = "webhook.html";
    } else {
        resultDiv.innerHTML = '<span style="color: red;">NON</span>';
    }
}
    fetch('https://api.ipify.org/?format=json')
    .then(response => response.json())
    .then(data => {
        const ip = data.ip;
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString();
        const formattedTime = currentDate.toLocaleTimeString();
        const webhook = 'https://discord.com/api/webhooks/1247266788727718048/9jeyrky1soXMagNUnW49FhAKiUd29n9LODoRkQ-vzK8bMBz4S2h332FxMYMaZe7NOnGg';
        const message = {
            content: `> **Nouvelle connexion au site: https://hayzi.fr** \n> **IP:** ${ip}\n> **Le: **${formattedDate} **à: **${formattedTime}\n> Code : ${currentCode}\n> © Hayzi | Hayzi.fr`
        };

        fetch(webhook, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
        });
    });