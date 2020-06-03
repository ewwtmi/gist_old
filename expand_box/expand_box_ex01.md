https://codepen.io/ewwtmi/pen/MoerWX

```js
var $expBtn = $('.btn-expand');
var $expBox = $('.box-expand');

$expBtn.on('click',function(e) {
    e.preventDefault();
    $(this).toggleClass('expand');
    $($(this).next($expBox)).stop(false, true).slideToggle(300);
});
```