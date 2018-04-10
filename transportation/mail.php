<?php

$recepient = "moralexvlad@gmail.com";
$sitename = "Перевозка";

$name = trim($_GET["name"]);
$phone = trim($_GET["tel"]);
$email = trim($_GET["email"]);
$text = trim($_GET["mess"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nТелефон: $phone E-mail: $email Сообщение: $text";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");