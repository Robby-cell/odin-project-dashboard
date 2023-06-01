const social_new = document.querySelector('social-action-new');
const social_upload = document.querySelector('social-action-upload');
const social_share = document.querySelector('social-action-share');

const redirect = (where) => {
    window.open(where, '_blank').focus();
}

const not_available = () => {
    alert('feature not available right now.');
}
