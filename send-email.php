<form action="send_email.php" method="post">
    <!-- form inputs -->
    <input type="text" name="name">
    <input type="email" name="email">
    <textarea name="message"></textarea>
    <input type="submit" value="Submit">
</form>

<!-- send_email.php -->
<?php
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];

$to = "bennett.rerick@gmail.com";
$subject = "Message from " . $name;
$body = "Name: " . $name . "\n" . "Email: " . $email . "\n" . "Message: " . $message;

if (mail($to, $subject, $body)) {
    echo "Email sent successfully";
} else {
    echo "Failed to send email";
}
?>

