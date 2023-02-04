document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var message = document.querySelector("#message").value;

    // You can add your own logic here to send the form data to a server or process it further.
    alert("Name: " + name + "\nEmail: " + email + "\nMessage: " + message);
});
