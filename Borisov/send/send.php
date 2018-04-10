<?php

// подключаем файл класса для отправки почты 
require 'class.phpmailer.php'; 

$type = htmlspecialchars(trim($_POST["type"]));
$name = htmlspecialchars(trim($_POST["name"]));
$phone = htmlspecialchars(trim($_POST["tel"]));
$email = htmlspecialchars(trim($_POST["email"]));
$text = htmlspecialchars(trim($_POST["mess"]));
$width = htmlspecialchars(trim($_POST["width"]));
$height = htmlspecialchars(trim($_POST["height"]));
$window = htmlspecialchars(trim($_POST["window"]));
$list = htmlspecialchars(trim($_POST["list"]));

$mail = new PHPMailer();
$mail->CharSet = 'utf-8';
$mail->From = 'info@okna-ramy.by';      // от кого 
$mail->FromName = 'okna-ramy.by';   // от кого 
$mail->AddAddress('7205637@bk.ru', 'owner'); // кому - адрес, Имя 
$mail->IsHTML(true);        // выставляем формат письма HTML 

if($width){
    $message = '<div align="left">
                <table width="100%">
                    <tr width="100%">
                        <td width="100%" colspan="2" style="padding: 5px 0; font-size: 20px;" valign="top"><b>' . $type . ' (Тип окна № ' . $window . ')</b></td>
                    </tr>
                    <tr width="100%">
                        <td width="20%" style="padding: 5px 0;" valign="top"><b>Список</b></td>
                        <td width="80%" style="padding: 5px 0;" valign="top">' . $list . '</td>
                    </tr>
                    <tr width="100%">
                        <td width="20%" style="padding: 5px 0;" valign="top"><b>Имя</b></td>
                        <td width="80%" style="padding: 5px 0;" valign="top">' . $name . '</td>
                    </tr>
                    <tr width="100%">
                        <td width="20%" style="padding: 5px 0;" valign="top"><b>Телефон</b></td>
                        <td width="80%" style="padding: 5px 0;" valign="top">' . $phone . '</td>
                    </tr>
                    <tr width="100%">
                        <td width="20%" style="padding: 5px 0;" valign="top"><b>Высота, см</b></td>
                        <td width="80%" style="padding: 5px 0;" valign="top">' . $height . '</td>
                    </tr>
                    <tr width="100%">
                        <td width="20%" style="padding: 5px 0;" valign="top"><b>Ширина, см</b></td>
                        <td width="80%" style="padding: 5px 0;" valign="top">' . $width . '</td>
                    </tr>
                </table>
        </div>';
} else {
    $message = '
        <div align="left">
                <table width="100%">
                    <tr width="100%">
                        <td width="100%" colspan="2" style="padding: 5px 0; font-size: 20px;" valign="top"><b>' . $type . '</b></td>
                    </tr>
                    <tr width="100%">
                        <td width="20%" style="padding: 5px 0;" valign="top"><b>Имя</b></td>
                        <td width="80%" style="padding: 5px 0;" valign="top">' . $name . '</td>
                    </tr>
                    <tr width="100%">
                        <td width="20%" style="padding: 5px 0;" valign="top"><b>Телефон</b></td>
                        <td width="80%" style="padding: 5px 0;" valign="top">' . $phone . '</td>
                    </tr>
                </table>
        </div>';
}

$mail->Subject = "Заявка с сайта";  

$mail->Body = $message;
$mail->Send();

// Ответ в формате JSON
$test = array("111","222","333");
echo json_encode($test);