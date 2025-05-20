<?php
// Start session for login
session_start();

// Admin credentials
$admin_username = "admin"; // Change this to your desired admin username
$admin_password = "admin123"; // Change this to your desired admin password

// Check if admin is logged in
$is_logged_in = false;

// Process login
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['login'])) {
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';
    
    if ($username === $admin_username && $password === $admin_password) {
        $_SESSION['admin_logged_in'] = true;
        $is_logged_in = true;
    } else {
        $login_error = "Invalid username or password.";
    }
}

// Check if already logged in
if (isset($_SESSION['admin_logged_in']) && $_SESSION['admin_logged_in'] === true) {
    $is_logged_in = true;
}

// Process logout
if (isset($_GET['action']) && $_GET['action'] === 'logout') {
    session_unset();
    session_destroy();
    header('Location: admin.php');
    exit;
}

// Delete message if requested
$delete_message = '';
if ($is_logged_in && isset($_GET['delete']) && is_numeric($_GET['delete'])) {
    require_once 'db_config.php';
    $id = $conn->real_escape_string($_GET['delete']);
    
    $sql = "DELETE FROM messages WHERE id = $id";
    if ($conn->query($sql)) {
        $delete_message = "Message deleted successfully!";
    } else {
        $delete_message = "Error deleting message: " . $conn->error;
    }
    
    $conn->close();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Panel - Portfolio Messages</title>
    <link rel="stylesheet" href="design.css">
    <style>
        .admin-container {
            max-width: 1000px;
            margin: 50px auto;
            padding: 20px;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .login-form {
            max-width: 400px;
            margin: 0 auto;
        }
        
        .admin-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        
        th, td {
            padding: 12px 15px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        
        th {
            background-color: #f8f9fa;
        }
        
        tr:hover {
            background-color: #f8f9fa;
        }
        
        .message-content {
            max-width: 300px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        
        .actions a {
            color: #dc3545;
            margin-right: 10px;
        }
        
        .delete-btn {
            color: #dc3545;
            text-decoration: none;
        }
        
        .delete-btn:hover {
            text-decoration: underline;
        }
        
        .success-message, .error-message {
            padding: 10px;
            margin-bottom: 20px;
            border-radius: 5px;
        }
        
        .success-message {
            background-color: #d4edda;
            color: #155724;
        }
        
        .error-message {
            background-color: #f8d7da;
            color: #721c24;
        }
        
        .no-messages {
            text-align: center;
            padding: 50px 0;
            color: #6c757d;
        }
    </style>
</head>
<body>
    <div class="admin-container">
        <h1>Portfolio Admin Panel</h1>
        
        <?php if (!$is_logged_in): ?>
            <!-- Login Form -->
            <div class="login-form">
                <h2>Login</h2>
                <?php if (isset($login_error)): ?>
                    <div class="error-message"><?php echo $login_error; ?></div>
                <?php endif; ?>
                
                <form method="POST" action="">
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" id="username" name="username" required>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" required>
                    </div>
                    <button type="submit" name="login" class="btn primary">Login</button>
                </form>
            </div>
        <?php else: ?>
            <!-- Admin Dashboard -->
            <div class="admin-header">
                <h2>Messages</h2>
                <a href="admin.php?action=logout" class="btn secondary">Logout</a>
            </div>
            
            <?php if (!empty($delete_message)): ?>
                <div class="success-message"><?php echo $delete_message; ?></div>
            <?php endif; ?>
            
            <?php
            // Fetch all messages
            require_once 'db_config.php';
            $sql = "SELECT * FROM messages ORDER BY created_at DESC";
            $result = $conn->query($sql);
            
            if ($result && $result->num_rows > 0): ?>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Subject</th>
                            <th>Message</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php while ($row = $result->fetch_assoc()): ?>
                            <tr>
                                <td><?php echo $row['id']; ?></td>
                                <td><?php echo htmlspecialchars($row['name']); ?></td>
                                <td><?php echo htmlspecialchars($row['email']); ?></td>
                                <td><?php echo htmlspecialchars($row['subject']); ?></td>
                                <td class="message-content"><?php echo htmlspecialchars($row['message']); ?></td>
                                <td><?php echo date('M j, Y g:i A', strtotime($row['created_at'])); ?></td>
                                <td>
                                    <a href="admin.php?delete=<?php echo $row['id']; ?>" class="delete-btn" onclick="return confirm('Are you sure you want to delete this message?')">Delete</a>
                                </td>
                            </tr>
                        <?php endwhile; ?>
                    </tbody>
                </table>
            <?php else: ?>
                <div class="no-messages">No messages found.</div>
            <?php endif;
            
            // Close connection
            $conn->close();
            ?>
        <?php endif; ?>
    </div>
</body>
</html>