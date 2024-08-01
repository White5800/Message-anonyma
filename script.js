const telegramBotToken = '7177403062:AAHckiwt7xq1lC0A-J-nPW4ITHsNDsIG2vw';
const telegramChatId = '6994578596';

const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', (e) => {
    e.preventDefault();
    const message = messageInput.value.trim();
    if (message !== '') {
        fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: telegramChatId,
                text: message
            })
        })
        .then(response => response.json())
        .then((data) => {
            if (data.ok) {
                alert('Message envoyé avec succès!');
                messageInput.value = '';
            } else {
                alert('Erreur lors de l\'envoi du message');
            }
        })
        .catch((error) => {
            console.error(error);
            alert('Erreur lors de l\'envoi du message');
        });
    }
});

