<?php
require_once 'security_headers.php';
session_start();
define('ADMIN_ACCESS', true);
require_once 'admin_config.php';

// Add login attempts tracking
if (!isset($_SESSION['login_attempts'])) {
    $_SESSION['login_attempts'] = 0;
    $_SESSION['last_attempt'] = 0;
}

// Check for lockout
if ($_SESSION['login_attempts'] >= MAX_LOGIN_ATTEMPTS) {
    if (time() - $_SESSION['last_attempt'] < LOCKOUT_TIME) {
        echo json_encode(['status' => 'error', 'message' => 'Too many failed attempts. Try again later.']);
        exit;
    }
    $_SESSION['login_attempts'] = 0;
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = filter_input(INPUT_POST, 'username', FILTER_SANITIZE_STRING);
    $password = $_POST['password'];

    if ($username === ADMIN_USERNAME && password_verify($password, ADMIN_PASSWORD)) {
        $_SESSION['loggedin'] = true;
        $_SESSION['token'] = bin2hex(random_bytes(32));
        $_SESSION['login_attempts'] = 0;
        $_SESSION['last_activity'] = time();
        echo json_encode(['status' => 'success']);
        exit;
    } else {
        $_SESSION['login_attempts']++;
        $_SESSION['last_attempt'] = time();
        echo json_encode([
            'status' => 'error', 
            'message' => 'Invalid credentials',
            'attempts_left' => MAX_LOGIN_ATTEMPTS - $_SESSION['login_attempts']
        ]);
        exit;
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Login</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" rel="stylesheet">
    <style>
        body {
            background: #0a192f;
            height: 100vh;
            display: flex;
            align-items: center;
        }
        .login-card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 1rem;
            padding: 2rem;
            box-shadow: 0 8px 32px rgba(0,0,0,0.1);
        }
        .form-control {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: #fff;
        }
        .form-control:focus {
            background: rgba(255, 255, 255, 0.1);
            border-color: #4a90e2;
            color: #fff;
        }
        .btn-primary {
            background: linear-gradient(90deg, #4a90e2, #50c878);
            border: none;
        }
    </style>
</head>
<body oncontextmenu="return false">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-4">
                <div class="login-card">
                    <h2 class="text-center text-white mb-4">Admin Login</h2>
                    <form id="loginForm" method="post">
                        <div class="mb-3">
                            <input type="text" name="username" class="form-control" placeholder="Username" required>
                        </div>
                        <div class="mb-3">
                            <input type="password" name="password" class="form-control" placeholder="Password" required>
                        </div>
                        <button type="submit" class="btn btn-primary w-100">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
    <script>
        // Disable right click
        document.addEventListener('contextmenu', event => event.preventDefault());

        // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
        document.onkeydown = function(e) {
            if (e.keyCode == 123 || 
                (e.ctrlKey && e.shiftKey && e.keyCode == 73) || 
                (e.ctrlKey && e.shiftKey && e.keyCode == 74) ||
                (e.ctrlKey && e.keyCode == 85)) {
                return false;
            }
        };

        $(document).ready(function() {
            $('#loginForm').on('submit', function(e) {
                e.preventDefault();
                $.ajax({
                    type: 'POST',
                    url: 'login.php',
                    data: $(this).serialize(),
                    dataType: 'json',
                    success: function(response) {
                        if (response.status === 'success') {
                            toastr.success('Login successful');
                            setTimeout(() => window.location.href = 'index.php', 1000);
                        } else {
                            toastr.error(response.message);
                        }
                    }
                });
            });
        });
    </script>
</body>
</html>