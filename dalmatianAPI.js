fetch('https://api.sendinblue.com/v3/smtp/email', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'api-key': 'TbI6BPYgWDt2E59z'
    },
    body: JSON.stringify({
        sender: {
            email: 'bennett.rerick@gmail.com',
            name: 'Bennett Rerick'
        },
        to: [
            {
                email: 'bennett.rerick@gmail.com',
                name: 'Bennett Rerick'
            }
        ],
        subject: 'Hello from Sendinblue',
        htmlContent: '<h1>Hello World!</h1>'
    })
})
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
