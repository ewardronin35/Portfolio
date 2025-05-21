<?php
// Check if we're running on Vercel
$is_vercel = getenv('VERCEL') !== false;

if ($is_vercel) {
    // When running on Vercel, use environment variables for connection
    $db_host = getenv('DB_HOST');
    $db_user = getenv('DB_USER');
    $db_pass = getenv('DB_PASSWORD');
    $db_name = getenv('DB_NAME');
    
    // Check if environment variables are set
    if (!$db_host || !$db_user || !$db_name) {
        echo "Database connection not configured in Vercel environment. Please set DB_HOST, DB_USER, DB_PASSWORD, and DB_NAME environment variables.";
        // Don't exit to allow the page to display
    }
} else {
    // Local development environment
    $db_host = 'localhost';
    $db_user = 'root';
    $db_pass = '';
    $db_name = 'portfolio';
}

// Create connection - only attempt if we have all credentials
if (isset($db_host) && isset($db_user) && isset($db_name)) {
    try {
        $conn = new mysqli($db_host, $db_user, $db_pass, $db_name);
        
        // Check connection
        if ($conn->connect_error) {
            echo "Connection failed: " . $conn->connect_error;
        }
    } catch (Exception $e) {
        echo "Database connection error: " . $e->getMessage();
    }
}
?>