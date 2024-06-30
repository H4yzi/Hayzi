function send() {
    const url = document.getElementById('url').value;
    const msg = document.getElementById('msg').value;
    const resultDiv = document.getElementById('result');

    const webhook = url;
    const message = {
        content: msg
    };

    fetch(webhook, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    }).then(response => {
        if (response.ok) {
            resultDiv.innerHTML = '<span style="color: green;">Message Envoyé</span>';
        } else {
            resultDiv.innerHTML = '<span style="color: red;">Erreur</span>';
        }
    }).catch(error => {
        console.error('Erreur:', error);
    });
}