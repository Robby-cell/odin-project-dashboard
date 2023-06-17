const root = document.getElementById('root');

const notifications = document.getElementById('notifications');

notifications.addEventListener("click", function() {
    alert('noti');
});

function redirect(where, _what=root) {
    alert('hello');
    window.open(where, '_blank').focus();
}
