<?php
$success_msg = "";
$error_msg = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $token = "8108890135:AAHTAc0-kgynzUqkRWhniWFMJHXPBMMvT68";
    $chat_id = "7403377873";

    $name = htmlspecialchars($_POST['name'] ?? 'نامشخص');
    $entity = htmlspecialchars($_POST['entity'] ?? 'نامشخص');
    $phone = htmlspecialchars($_POST['phone'] ?? 'نامشخص');
    $email = htmlspecialchars($_POST['email'] ?? 'نامشخص');
    $services = isset($_POST['services']) ? implode('، ', $_POST['services']) : 'هیچکدام';

    $text = "🔔 <b>سفارش جدید در NORKHIZ STUDIO</b>\n\n";
    $text .= "👤 <b>نام و نام خانوادگی:</b> " . $name . "\n";
    $text .= "🏢 <b>نوع شخص:</b> " . $entity . "\n";
    $text .= "📞 <b>شماره تماس:</b> <code>" . $phone . "</code>\n";
    $text .= "📧 <b>ایمیل:</b> " . $email . "\n";
    $text .= "📸 <b>خدمات انتخابی:</b> " . $services . "\n";

    $url = "https://api.telegram.org/bot" . $token . "/sendMessage";
    $data = [
        'chat_id' => $chat_id,
        'text' => $text,
        'parse_mode' => 'HTML'
    ];

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($ch);
    $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($httpcode == 200) {
        $success_msg = "درخواست شما با موفقیت در سیستم نورخیز استودیو ثبت شد!";
    } else {
        $error_msg = "خطا در ارسال اطلاعات. لطفاً دوباره تلاش کنید.";
    }
}
?>

<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NORKHIZ STUDIO | ثبت سفارش</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;700&display=swap');
        
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Vazirmatn', sans-serif;
        }

        body {
            background-color: #050505;
            background-image: radial-gradient(circle at 50% -20%, #1a0b2e, #050505);
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
        }

        .neon-container {
            background: rgba(20, 20, 20, 0.6);
            backdrop-filter: blur(15px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 40px;
            width: 100%;
            max-width: 550px;
            box-shadow: 0 0 20px rgba(0, 255, 255, 0.1), inset 0 0 20px rgba(255, 0, 255, 0.05);
            position: relative;
            overflow: hidden;
        }

        .neon-container::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: conic-gradient(transparent, transparent, transparent, #00ffff);
            animation: rotate 4s linear infinite;
            z-index: -1;
            opacity: 0.1;
        }

        @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .logo-box {
            text-align: center;
            margin-bottom: 30px;
        }

        .logo-box img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            border: 2px solid #00ffff;
            box-shadow: 0 0 15px #00ffff, 0 0 30px #00ffff;
            object-fit: cover;
        }

        .logo-box h1 {
            font-size: 1.5rem;
            margin-top: 15px;
            color: #fff;
            text-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff;
            letter-spacing: 2px;
        }

        .form-group {
            margin-bottom: 25px;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-size: 0.9rem;
            color: #ccc;
        }

        .form-control {
            width: 100%;
            background: transparent;
            border: none;
            border-bottom: 2px solid rgba(255, 255, 255, 0.2);
            padding: 10px 5px;
            color: #fff;
            font-size: 1rem;
            transition: all 0.3s;
            outline: none;
        }

        .form-control:focus {
            border-bottom-color: #00ffff;
            box-shadow: 0 4px 10px -4px #00ffff;
        }

        .radio-group, .checkbox-group {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
        }

        .radio-label, .check-label {
            display: flex;
            align-items: center;
            cursor: pointer;
            font-size: 0.9rem;
            color: #ddd;
            transition: 0.3s;
        }

        .radio-label:hover, .check-label:hover {
            color: #00ffff;
            text-shadow: 0 0 5px #00ffff;
        }

        input[type="radio"], input[type="checkbox"] {
            accent-color: #ff00ff;
            margin-left: 8px;
            transform: scale(1.2);
        }

        .submit-btn {
            width: 100%;
            background: transparent;
            color: #00ffff;
            border: 2px solid #00ffff;
            padding: 15px;
            font-size: 1.1rem;
            font-weight: bold;
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.3s;
            text-transform: uppercase;
            box-shadow: 0 0 10px inset transparent;
            margin-top: 10px;
        }

        .submit-btn:hover {
            background: #00ffff;
            color: #050505;
            box-shadow: 0 0 20px #00ffff, 0 0 40px #00ffff;
        }

        .alert {
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
            text-align: center;
            font-weight: bold;
        }

        .alert-success {
            background: rgba(0, 255, 128, 0.1);
            border: 1px solid #00ff80;
            color: #00ff80;
            box-shadow: 0 0 10px #00ff80;
        }

        .alert-danger {
            background: rgba(255, 0, 0, 0.1);
            border: 1px solid #ff0000;
            color: #ff0000;
            box-shadow: 0 0 10px #ff0000;
        }
    </style>
</head>
<body>

    <div class="neon-container">
        <div class="logo-box">
            <img src="https://s25.uupload.ir/files/aslidxx/IMG_20260606_142036_816.jpg" alt="Norkhiz Studio Logo">
            <h1>NORKHIZ STUDIO</h1>
        </div>

        <?php if (!empty($success_msg)): ?>
            <div class="alert alert-success"><?= $success_msg ?></div>
        <?php endif; ?>
        
        <?php if (!empty($error_msg)): ?>
            <div class="alert alert-danger"><?= $error_msg ?></div>
        <?php endif; ?>

        <form method="POST" action="">
            <div class="form-group">
                <label>نام و نام خانوادگی:</label>
                <input type="text" name="name" class="form-control" required placeholder="نام خود را وارد کنید...">
            </div>

            <div class="form-group">
                <label>ماهیت درخواست (نوع شخص):</label>
                <div class="radio-group">
                    <label class="radio-label">
                        <input type="radio" name="entity" value="حقیقی (فردی)" required> حقیقی (فردی)
                    </label>
                    <label class="radio-label">
                        <input type="radio" name="entity" value="حقوقی (شرکتی)"> حقوقی (شرکتی/تیم)
                    </label>
                </div>
            </div>

            <div class="form-group">
                <label>شماره تماس:</label>
                <input type="tel" name="phone" class="form-control" required placeholder="09123456789">
            </div>

            <div class="form-group">
                <label>ایمیل (اختیاری):</label>
                <input type="email" name="email" class="form-control" placeholder="example@gmail.com">
            </div>

            <div class="form-group">
                <label>انتخاب خدمات (می‌توانید چند مورد انتخاب کنید):</label>
                <div class="checkbox-group">
                    <label class="check-label">
                        <input type="checkbox" name="services[]" value="عکاسی تخصصی"> عکاسی تخصصی
                    </label>
                    <label class="check-label">
                        <input type="checkbox" name="services[]" value="فیلمبرداری"> فیلمبرداری
                    </label>
                    <label class="check-label">
                        <input type="checkbox" name="services[]" value="ادیت و تدوین"> ادیت و تدوین
                    </label>
                </div>
            </div>

            <button type="submit" class="submit-btn">ثبت سفارش و ارسال</button>
        </form>
    </div>

</body>
</html>

