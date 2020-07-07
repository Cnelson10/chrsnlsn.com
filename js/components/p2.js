function p2(id) {

    const content = ` 
        <p>2</p>
    `;

    document.getElementById(id).innerHTML = content;
    document.getElementById('dots').style.display = 'none';
    expanded = true;
}