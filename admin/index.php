<?php
require_once 'security_headers.php';
session_start();
define('ADMIN_ACCESS', true);
require_once 'admin_config.php';
require_once '../db_config.php';

// Add session timeout check
if (isset($_SESSION['last_activity']) && (time() - $_SESSION['last_activity'] > SESSION_TIMEOUT)) {
    session_destroy();
    header('Location: login.php?timeout=1');
    exit;
}
$_SESSION['last_activity'] = time();

$messages_sql = "SELECT * FROM messages ORDER BY created_at DESC";
$messages_result = $conn->query($messages_sql);

$visitors_sql = "SELECT * FROM visitors ORDER BY last_visit DESC";
$visitors_result = $conn->query($visitors_sql);

$total_messages = $messages_result->num_rows;
$total_visitors = $visitors_result->num_rows;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css" rel="stylesheet">
    <style>
        body { background: #f8f9fa; }
        .navbar { background: #0a192f; }
        .card {
            border: none;
            border-radius: 1rem;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            transition: transform 0.3s;
        }
        .card:hover { transform: translateY(-5px); }
        .table { border-radius: 1rem; overflow: hidden; }
        .stat-card {
            background: linear-gradient(45deg, #4a90e2, #50c878);
            color: white;
        }
    </style>
</head>
<body oncontextmenu="return false">
    <nav class="navbar navbar-expand-lg navbar-dark mb-4">
        <div class="container">
            <a class="navbar-brand" href="#">Admin Dashboard</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#" id="logoutBtn">
                            <i class="fas fa-sign-out-alt"></i> Logout
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="container">
        <div class="row mb-4">
            <div class="col-md-6">
                <div class="card stat-card">
                    <div class="card-body">
                        <h5><i class="fas fa-envelope"></i> Total Messages</h5>
                        <h2><?php echo $total_messages; ?></h2>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card stat-card">
                    <div class="card-body">
                        <h5><i class="fas fa-users"></i> Total Visitors</h5>
                        <h2><?php echo $total_visitors; ?></h2>
                    </div>
                </div>
            </div>
        </div>

        <div class="card mb-4">
            <div class="card-header bg-primary text-white">
                <h3 class="mb-0"><i class="fas fa-envelope me-2"></i>Messages</h3>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Subject</th>
                                <th>Message</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php while ($row = $messages_result->fetch_assoc()) { ?>
                                <tr>
                                    <td><?php echo $row['id']; ?></td>
                                    <td><?php echo htmlspecialchars($row['name']); ?></td>
                                    <td><?php echo htmlspecialchars($row['email']); ?></td>
                                    <td><?php echo htmlspecialchars($row['subject']); ?></td>
                                    <td><?php echo htmlspecialchars($row['message']); ?></td>
                                    <td><?php echo $row['created_at']; ?></td>
                                </tr>
                            <?php } ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header bg-primary text-white">
                <h3 class="mb-0"><i class="fas fa-users me-2"></i>Visitors</h3>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>IP Address</th>
                                <th>Visit Count</th>
                                <th>Last Visit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php while ($row = $visitors_result->fetch_assoc()) { ?>
                                <tr>
                                    <td><?php echo $row['id']; ?></td>
                                    <td><?php echo htmlspecialchars($row['ip_address']); ?></td>
                                    <td><?php echo $row['visit_count']; ?></td>
                                    <td><?php echo $row['last_visit']; ?></td>
                                </tr>
                            <?php } ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script>
        // Disable right click and inspect
        document.addEventListener('contextmenu', event => event.preventDefault());
        document.onkeydown = function(e) {
            if (e.keyCode == 123 || 
                (e.ctrlKey && e.shiftKey && e.keyCode == 73) || 
                (e.ctrlKey && e.shiftKey && e.keyCode == 74) ||
                (e.ctrlKey && e.keyCode == 85)) {
                return false;
            }
        };

        // Logout confirmation
        document.getElementById('logoutBtn').addEventListener('click', function(e) {
            e.preventDefault();
            Swal.fire({
                title: 'Logout',
                text: 'Are you sure you want to logout?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, logout'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = 'logout.php';
                }
            });
        });
    </script>
</body>
</html>