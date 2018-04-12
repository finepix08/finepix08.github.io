<?php

// подключаем файл класса для отправки почты 
require 'class.phpmailer.php'; 

$type = htmlspecialchars(trim($_POST["type"]));
$profil = htmlspecialchars(trim($_POST["profil"]));
$place = htmlspecialchars(trim($_POST["place"]));
$mode = htmlspecialchars(trim($_POST["mode"]));
$height = htmlspecialchars(trim($_POST["height"]));
$width = htmlspecialchars(trim($_POST["width"]));
$month = htmlspecialchars(trim($_POST["month"]));
$phone = htmlspecialchars(trim($_POST["phone"]));


switch($place){
   case "1": { $place = "Частный дом"; break;}
   case "2": { $place = "Квартира"; break;}
   case "3": { $place = "Дача"; break;}
}

$mail = new PHPMailer();
$mail->CharSet = 'utf-8';
$mail->From = 'info@oknanedorogo.by';                              // от кого 
$mail->FromName = 'oknanedorogo.by';                               // от кого 
$mail->AddAddress('oknanedorogo@tut.by', 'owner');        // кому - адрес, Имя 
$mail->IsHTML(true);                                        // выставляем формат письма HTML 

$message = '
        <div align="left">
            <table width="100%">
                <tr width="100%">
                    <td width="100%" colspan="2" style="padding: 5px 0; font-size: 20px;" valign="top"><b>Рассчитать сумму ежемесячного платежа со скидкой: ' . $type . '</b></td>
                </tr>
                <tr width="100%">
                    <td width="20%" style="padding: 5px 0;" valign="top"><b>Профиль</b></td>
                    <td width="80%" style="padding: 5px 0;" valign="top">' . $profil. '</td>
                </tr>
                <tr width="100%">
                    <td width="20%" style="padding: 5px 0;" valign="top"><b>Место установки окон</b></td>
                    <td width="80%" style="padding: 5px 0;" valign="top">' . $place. '</td>
                </tr>
                <tr width="100%">
                    <td width="20%" style="padding: 5px 0;" valign="top"><b>Режим открывания створки</b></td>
                    <td width="80%" style="padding: 5px 0;" valign="top">' . $mode. '</td>
                </tr>
                <tr width="100%">
                    <td width="20%" style="padding: 5px 0;" valign="top"><b>Высота</b></td>
                    <td width="80%" style="padding: 5px 0;" valign="top">' . $height. ' см</td>
                </tr>
                <tr width="100%">
                    <td width="20%" style="padding: 5px 0;" valign="top"><b>Ширина</b></td>
                    <td width="80%" style="padding: 5px 0;" valign="top">' . $width. ' см</td>
                </tr>
                <tr width="100%">
                    <td width="20%" style="padding: 5px 0;" valign="top"><b>Количество месяцев рассрочки</b></td>
                    <td width="80%" style="padding: 5px 0;" valign="top">' . $month. '</td>
                </tr>
               <tr width="100%">
                    <td width="20%" style="padding: 5px 0;" valign="top"><b>Номер телефона</b></td>
                    <td width="80%" style="padding: 5px 0;" valign="top">' . $phone. '</td>
                </tr>
            </table>
        </div>';

$mail->Subject = "Заявка с сайта";

// если был файл, то прикрепляем его к письму 
if(isset($_FILES['attachfile'])) { 
    if($_FILES['attachfile']['error'] == 0){ 
            $mail->AddAttachment($_FILES['attachfile']['tmp_name'], $_FILES['attachfile']['name']); 
    } 
}

// если было изображение, то прикрепляем его в виде картинки к телу письма. 
if(isset($_FILES['attachimage'])) { 
     if($_FILES['attachimage']['error'] == 0){ 
        if (!$mail->AddEmbeddedImage($_FILES['attachimage']['tmp_name'], 'my-attach', 'image.gif', 'base64', $_FILES['attachimage']['type'])) 
             die ($mail->ErrorInfo); 
        $message .= 'А вот и наша картинка:<br /><img src="cid:my-attach" border=0><br />я показал как ее прикреплять, соответственно Вам осталось вставить ее в нужное место Вашего письма ;-) '; 
     } 
}
                

$mail->Body = $message;
$mail->Send();

// Ответ в формате JSON
$test = array("111","222","333");
echo json_encode($test);