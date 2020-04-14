document.querySelector('#api-url').innerText = 'https://getplayer.thundersave.com/?u=demo&id=<your_drive_link>';
function updatePlayer() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(this.responseText);
            document.querySelector(
                '#stream-tester-player'
            ).innerHTML = `<iframe src="${response.proxyPlayer}"  frameborder="0" scrolling="no" allowfullscreen></iframe>`;

            document.querySelector('#api-code').innerText = `https://getplayer.thundersave.com/?u=demo&id=${document.querySelector('input').value}`;

            document.querySelector('#embed-code').innerText = `<iframe src="${response.proxyPlayer}"  frameborder="0" scrolling="no" allowfullscreen></iframe>`;
        }
    };
    xhttp.open('GET', `https://getplayer.thundersave.com/?u=demo&id=${document.querySelector('input').value}`, true);
    xhttp.send();
}
document.querySelector('#teststream-btn').addEventListener('click', function() {
    updatePlayer();
});
updatePlayer();
