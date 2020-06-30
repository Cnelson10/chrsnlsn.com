window.onload = () => {
    document.getElementById('egg').addEventListener('click', changeBackground)
}

function changeBackground() {
    let bodyStyle = window.getComputedStyle(document.body, null);
    let bgColor = bodyStyle.backgroundColor;
    if(bgColor === 'rgb(249, 246, 231)') {
        document.body.style.backgroundColor = "#F06D30";
        document.getElementById('fert-2').style.fill = "#F9F6E7";
    } else {
        document.body.style.backgroundColor = "#F9F6E7";
        document.getElementById('fert-2').style.fill = "#F06D30";
    }
}