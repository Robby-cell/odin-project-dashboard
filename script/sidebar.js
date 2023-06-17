
// top band
const dashboard_button = document.getElementById('dashboard-button');
const home_button = document.getElementById('home-button');
const profile_button = document.getElementById('profile-button');
const messages_button = document.getElementById('messages-button');
const history_button = document.getElementById('history-button');
const tasks_button = document.getElementById('tasks-button');
const communities_button = document.getElementById('communities-button');

const top_band = [dashboard_button, home_button, profile_button, messages_button, history_button, tasks_button, communities_button];

top_band.forEach(function(value) {
    value.addEventListener('click', function() {
        // alert(this.innerHTML);
    })
});
