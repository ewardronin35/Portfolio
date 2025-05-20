<?php
// Database configuration
$db_host = 'localhost';
$db_user = 'root';      // Change to your database username
$db_pass = '';          // Change to your database password

// Create connection to MySQL server
$conn = new mysqli($db_host, $db_user, $db_pass);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create database
$sql = "CREATE DATABASE IF NOT EXISTS portfolio";
if ($conn->query($sql) === TRUE) {
    echo "Database created successfully or already exists<br>";
} else {
    echo "Error creating database: " . $conn->error . "<br>";
    exit;
}

// Select the database
$conn->select_db('portfolio');

// Create table
$sql = "CREATE TABLE IF NOT EXISTS messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";

if ($conn->query($sql) === TRUE) {
    echo "Table 'messages' created successfully or already exists<br>";
} else {
    echo "Error creating table: " . $conn->error . "<br>";
    exit;
}

echo "<br><strong>Installation complete!</strong><br>";
echo "Now you can:<br>";
echo "1. View your portfolio at <a href='index.php'>index.php</a><br>";
echo "2. Access the admin panel at <a href='admin.php'>admin.php</a> (default login: admin/admin123)<br>";
echo "<br><strong>Important:</strong> For security, remember to change the admin credentials in admin.php";

// Close connection
$conn->close();
?>