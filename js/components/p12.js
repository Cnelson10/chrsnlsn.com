function p12(id) {

    const content = ` 
        <p>12</p>
    `;

    document.getElementById(id).innerHTML = content;
    document.getElementById('dots').style.display = 'none';
    expanded = true;
}