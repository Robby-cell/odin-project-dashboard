// searches:
function search(query) {
    alert(query);
}

const handle_search = (key, elementSending) => {
    if (key.key === 'Enter') {
        search(elementSending.value)
    }
}