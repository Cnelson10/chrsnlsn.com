const smScreen = window.matchMedia("(max-width: 799px)");
const medScreen = window.matchMedia("(max-width: 1039px)");

window.onload = () => {
    const egg =  document.getElementById('egg')
    egg.addEventListener('click', changeBackground)
    const dot1 = document.getElementById('dot-1')
    dot1.addEventListener('click', function(){
        selectProject(1)
    }, false)
    const dot2 = document.getElementById('dot-2')
    dot2.addEventListener('click', () => {
        selectProject(2)
    }, false)
    const dot3 = document.getElementById('dot-3')
    dot3.addEventListener('click', () => {
        selectProject(3)
    }, false)

    smScreen.addEventListener('change', resize);
    medScreen.addEventListener('change', resize);

    if(smScreen.matches) {
        document.getElementById('dot-1').classList.add('active');
        document.getElementById('dot-1').classList.add('selected');
        document.getElementById('dot-2').classList.add('active');
        document.getElementById('dot-2').classList.remove('selected');
        document.getElementById('dot-3').classList.add('active');
        document.getElementById('dot-3').classList.remove('selected');
        document.getElementById('group-1').classList.add('active');
        document.getElementById('group-2').classList.remove('active');
        document.getElementById('group-3').classList.remove('active');
    } else {
        if(medScreen.matches) {
            document.getElementById('dot-1').classList.remove('active');
            document.getElementById('dot-1').classList.add('selected');
            document.getElementById('dot-2').classList.add('active');
            document.getElementById('dot-2').classList.add('selected');
            document.getElementById('dot-3').classList.add('active');
            document.getElementById('dot-3').classList.remove('selected');
            document.getElementById('group-1').classList.add('active');
            document.getElementById('group-2').classList.add('active');
            document.getElementById('group-3').classList.remove('active');
        } else {
            document.getElementById('dot-1').classList.remove('active');
            document.getElementById('dot-1').classList.add('selected');
            document.getElementById('dot-2').classList.remove('active');
            document.getElementById('dot-2').classList.remove('selected');
            document.getElementById('dot-3').classList.remove('active');
            document.getElementById('dot-3').classList.remove('selected');
            document.getElementById('group-1').classList.add('active');
            document.getElementById('group-2').classList.add('active');
            document.getElementById('group-3').classList.add('active');
        }
    }
}

function resize() {
    if(smScreen.matches){
        document.getElementById('dot-1').classList.add('active');
        document.getElementById('dot-2').classList.add('active');
        document.getElementById('dot-3').classList.add('active');
        if(document.getElementById('dot-1').classList.contains('selected') || document.getElementById('dot-2').classList.contains('selected')){
            if(document.getElementById('dot-1').classList.contains('selected')){
                document.getElementById('group-1').classList.add('active');
                document.getElementById('group-2').classList.remove('active');
                document.getElementById('dot-2').classList.remove('selected');
                document.getElementById('group-3').classList.remove('active');
                document.getElementById('dot-3').classList.remove('selected');
            } else {
                document.getElementById('group-2').classList.add('active');
                document.getElementById('group-1').classList.remove('active');
                document.getElementById('dot-1').classList.remove('selected');
                document.getElementById('group-3').classList.remove('active');
                document.getElementById('dot-3').classList.remove('selected');
            }
        } else {
            document.getElementById('group-3').classList.add('active');
            document.getElementById('dot-3').classList.add('selected');
            document.getElementById('group-1').classList.remove('active');
            document.getElementById('dot-1').classList.remove('selected');
            document.getElementById('group-2').classList.remove('active');
            document.getElementById('dot-2').classList.remove('selected');
        }
    } else {
        if(medScreen.matches) {
            document.getElementById('dot-1').classList.remove('active');
            document.getElementById('dot-2').classList.add('active');
            document.getElementById('dot-3').classList.add('active');
            document.getElementById('group-2').classList.add('active');
            if(document.getElementById('dot-1').classList.contains('selected') || document.getElementById('dot-2').classList.contains('selected')){
                document.getElementById('dot-2').classList.add('selected');
                document.getElementById('group-1').classList.add('active');
                document.getElementById('dot-3').classList.remove('selected');
                document.getElementById('group-3').classList.remove('active');
            } else {
                document.getElementById('group-3').classList.add('active');
                document.getElementById('dot-2').classList.remove('selected');
                document.getElementById('group-1').classList.remove('active');
            }
        } else {
            document.getElementById('dot-1').classList.remove('active');
            document.getElementById('dot-2').classList.remove('active');
            document.getElementById('dot-3').classList.remove('active');
            document.getElementById('group-1').classList.add('active');
            document.getElementById('group-2').classList.add('active');
            document.getElementById('group-3').classList.add('active');
        }
    }
}

function changeBackground() {
    let bodyStyle = window.getComputedStyle(document.body, null);
    let bgColor = bodyStyle.backgroundColor;

    let projects = document.getElementsByClassName("bg-modal");

    if(bgColor === 'rgb(249, 246, 231)') {
        document.body.style.backgroundColor = "#F06D30";
        document.getElementById('fert-2').style.fill = "#F9F6E7";
        let i;
        for (i = 0; i < projects.length; i++) {
            projects[i].style.backgroundColor = "#F06D30";
        }
    } else {
        document.body.style.backgroundColor = "#F9F6E7";
        document.getElementById('fert-2').style.fill = "#F06D30";
        let i;
        for (i = 0; i < projects.length; i++) {
            projects[i].style.backgroundColor = "#F9F6E7";
        }
    }
}

function selectProject(n) {
    switch(n) {
        case 1:
            if(document.getElementById('group-1').classList.contains('active')) {
                break;
            } else {
                if(document.getElementById('group-2').classList.contains('active')) {
                    document.getElementById('dot-1').classList.add('selected');
                    document.getElementById('dot-2').classList.remove('selected');
                    document.getElementById('group-1').classList.add('active');
                    document.getElementById('group-2').classList.remove('active');
                    break;
                } else {
                    document.getElementById('dot-1').classList.add('selected');
                    document.getElementById('dot-3').classList.remove('selected');
                    document.getElementById('group-1').classList.add('active');
                    document.getElementById('group-3').classList.remove('active');
                    break;
                }
            }
        case 2:
            if(document.getElementById('group-2').classList.contains('active')) {
                if(document.getElementById('group-1').classList.contains('active')) {
                    break;
                } else if(document.getElementById('group-3').classList.contains('active')) {
                    document.getElementById('dot-2').classList.add('selected');
                    document.getElementById('dot-3').classList.remove('selected');
                    document.getElementById('group-1').classList.add('active');
                    document.getElementById('group-3').classList.remove('active');
                } else {
                    break;
                }
            } else {
                if(document.getElementById('group-1').classList.contains('active')) {
                    document.getElementById('dot-2').classList.add('selected');
                    document.getElementById('dot-1').classList.remove('selected');
                    document.getElementById('group-2').classList.add('active');
                    document.getElementById('group-1').classList.remove('active');
                    break;
                } else {
                    document.getElementById('dot-2').classList.add('selected');
                    document.getElementById('dot-3').classList.remove('selected');
                    document.getElementById('group-2').classList.add('active');
                    document.getElementById('group-3').classList.remove('active');
                    break;
                }
            }
            break;
        case 3:
            if(document.getElementById('group-3').classList.contains('active')) {
                break;
            } else {
                if(document.getElementById('group-1').classList.contains('active')) {
                    if(document.getElementById('group-2').classList.contains('active')) {
                        document.getElementById('dot-3').classList.add('selected');
                        document.getElementById('dot-2').classList.remove('selected');
                        document.getElementById('dot-1').classList.remove('selected');
                        document.getElementById('group-3').classList.add('active');
                        document.getElementById('group-1').classList.remove('active');
                        break;
                    } else {
                        document.getElementById('dot-3').classList.add('selected');
                        document.getElementById('dot-1').classList.remove('selected');
                        document.getElementById('group-3').classList.add('active');
                        document.getElementById('group-1').classList.remove('active');
                        break;
                    }
                } else {
                    document.getElementById('dot-3').classList.add('selected');
                    document.getElementById('dot-2').classList.remove('selected');
                    document.getElementById('group-3').classList.add('active');
                    document.getElementById('group-2').classList.remove('active');
                    break;
                }
            }
    }
}