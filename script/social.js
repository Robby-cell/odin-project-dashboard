// social activities
const social_new = document.getElementById('social-action-new');
const social_upload = document.getElementById('social-action-upload');
const social_share = document.getElementById('social-action-share');

const not_available = () => {
    alert('feature not available right now.');
};


social_new.addEventListener('click', function() {
    not_available();
});
social_upload.addEventListener('click', function() {
    not_available();
});
social_share.addEventListener('click', function() {
    not_available();
});
