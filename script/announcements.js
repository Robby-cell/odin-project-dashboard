// announcements:

const announcement_tab = document.getElementById("announcement-holder");

function create_announcement(title, content) {
    const container = document.createElement('div');
    container.classList.add('announcement-div-container')

    const announcement_title = document.createElement('div');
    const announcement_title_content = document.createTextNode(title);
    announcement_title.classList.add('announcement-content-title');

    announcement_title.appendChild(announcement_title_content);

    // add title to container div
    container.appendChild(announcement_title);

    const inners = document.createElement('div');
    const node = document.createTextNode(content);
    inners.classList.add('announcement-content');
    inners.appendChild(node);

    // and add the announce contents
    container.appendChild(inners);

    // and add the container to the announcements
    announcement_tab.appendChild(container);
}

create_announcement('New project release', 'rumors of a new project dropping on 31st Feb 2098.');
