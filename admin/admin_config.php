<?php
// Prevent direct file access
if (!defined('ADMIN_ACCESS')) {
    header('Location: login.php');
    exit();
}

// Admin credentials
define('ADMIN_USERNAME', 'admin');

// Generate password hash (use this in PHP console once, then copy the hash)
// echo password_hash('your-desired-password', PASSWORD_DEFAULT);
define('ADMIN_PASSWORD', '$2y$10$cTbr9gbVUHX9SeJKy7vdKe9VOW0yxNXjRuOk7SRya2MIqn34Y/58S'); // Replace with your generated hash

// Security settings
define('SESSION_TIMEOUT', 1800); // 30 minutes
define('MAX_LOGIN_ATTEMPTS', 3);
define('LOCKOUT_TIME', 900); // 15 minutes

// Site configuration
define('SITE_NAME', "Eduard's Portfolio");
define('ADMIN_EMAIL', 'your.email@example.com');

// Security tokens
define('CSRF_TOKEN_SECRET', bin2hex(random_bytes(32)));
define('API_KEY', bin2hex(random_bytes(32)));
?>