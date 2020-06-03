### Styleswitcher使用時のメモ

http://alistapart.com/article/alternate/

```JS
$("a.Styleswitcher").click(function() {
	$('link[rel=stylesheet]').attr('href' , $(this).attr('rel'));
});
```

```HTML
<link rel="stylesheet" href="default.css" type="text/css">

<a href="#" class="Styleswitcher" rel="default.css">Default Theme</a>
<a href="#" class="Styleswitcher" rel="red.css">Red Theme</a>
<a href="#" class="Styleswitcher" rel="blue.css">Blue Theme</a>
```