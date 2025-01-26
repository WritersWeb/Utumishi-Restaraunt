<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $date = $_POST['date'];
    $time = $_POST['time'];
    $guests = $_POST['guests'];
    $message = $_POST['message'];

    // Basic email validation
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit;
    }

    // Here you would typically:
    // 1. Sanitize the data (prevent SQL injection, etc.)
    // 2. Store the reservation in a database.
    // 3. Send a confirmation email to the user.

    // For this example, we'll just simulate success:
    echo "success";
} else {
    echo "Invalid request.";
}
?>