ユーザーエージェントでページを切り替える  
以下の例ではiPhoneで閲覧した場合、「http://mobile.example.com」にジャンプ

```JS
var ua = navigator.userAgent.toLowerCase();
var isiPhone = ua.indexOf("iphone") > -1;
if(isiPhone) {
  window.location = 'http://mobile.example.com';
}
```

```PHP
<?php
$ua = strtolower($_SERVER['HTTP_USER_AGENT']);
if(stripos($ua,'iPhone') !== false) {
  header('Location: http://mobile.example.com');
  exit();
}
?>
```

```htaccess
RewriteCond %{HTTP_USER_AGENT} ^.*iPhone.*$
RewriteRule ^(.*)$ http://mobile.example.com [R=301]
```