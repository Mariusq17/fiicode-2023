<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- Styles and Icons -->
    <link rel="stylesheet" href="../../styles/sidebar.css" />
    <link rel="stylesheet" href="../../styles/news-section.css" />
    <link rel="stylesheet" href="../../styles/clock.css" />
    <link rel="stylesheet" href="../../styles/pacienti/home-page.css" />
    <link rel="stylesheet" href="../../fonts-and-icons/css/all.css">
    <link rel="stylesheet" href="../../fonts-and-icons/css/all.min.css">
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap" rel="stylesheet">
    <!-- Scripts -->
    <script src="../../scripts/sidebar.js" defer></script>
    <script src="../../scripts/clock.js" defer></script>
    <script src="../../scripts/news-section.js" defer></script>
</head>
<body class="light-theme">
    <?php include "../sidebar.php" ?>
    <div class="user-welcome-wrapper">
        <div class="user-welcome">
            <h1>Buna userName,</h1>
            <span>Cum ti-a fost ziua?</span>
        </div>
        <?php include "../clock.php" ?>
    </div>
    <?php include "../news-section.php" ?>

</body>
</html>