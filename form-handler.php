<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Add your code to process the form data here

    // For example, you can send an email to yourself:
    $to = "bennett.rerick@gmail.com";
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    mail($to, $subject, $body);

    // Redirect the user to a thank you page
    header('Location: thank-you.html');
    exit;
}
