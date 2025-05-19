<?php

// Security headers
header("X-Frame-Options: DENY");
header("X-XSS-Protection: 1; mode=block");
header("X-Content-Type-Options: nosniff");
header("Referrer-Policy: same-origin");
header("Content-Security-Policy: default-src 'self' https: 'unsafe-inline' 'unsafe-eval'");
header("Strict-Transport-Security: max-age=31536000; includeSubDomains");
?>