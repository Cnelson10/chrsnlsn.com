function p4(id) {

    const content = ` 
        <p>4</p>
    `;

    document.getElementById(id).innerHTML = content;
    document.getElementById('dots').style.display = 'none';
    expanded = true;
}