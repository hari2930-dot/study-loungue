<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

  $name = $_POST["name"];
  $email = $_POST["email"];
  $phone = $_POST["phone"];
  $message = $_POST["message"];

  $to = "yourmail@example.com"; // change this
  $subject = "New Enquiry - Study Lounge";

  $body = "
  Name: $name
  Email: $email
  Phone: $phone
  Message: $message
  ";

  $headers = "From: $email";

  mail($to, $subject, $body, $headers);

  header("Location: index.html");
}
?>
