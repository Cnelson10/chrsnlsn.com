function home(id) {

    const content = ` 
        <div class="proj-group" id="group-1">
          <div class="project">
            <div class="bg-modal">
              <div class="modal-content">
                <p class="medium large title" id="p1">twitter trends</p>
                <p class="light text padded" id="s1">javascript/jquery/python</p>
                <a href="#/twitter_trends" class="medium large title modal-button" id="b1">learn more</a>
              </div>
            </div>
            <p>1</p>
          </div>
          <div class="project">
            <div class="bg-modal">
              <div class="modal-content">
                <p class="medium large title" id="p2">project 2</p>
                <p class="light text padded" id="s2">skill/skill/skill</p>
                <a href="#/project2"  class="medium large title modal-button" id="b2">learn more</a>
              </div>
            </div>
          </div>
          <div class="project">
            <div class="bg-modal">
              <div class="modal-content">
                <p class="medium large title" id="p3">project 3</p>
                <p class="light text padded" id="s3">skill/skill/skill</p>
                <a href="#/project3" class="medium large title modal-button" id="b3">learn more</a>
              </div>
            </div>
          </div>
          <div class="project">
            <div class="bg-modal">
              <div class="modal-content">
                <p class="medium large title" id="p4">project 4</p>
                <p class="light text padded" id="s4">skill/skill/skill</p>
                <a href="#/project4" class="medium large title modal-button" id="b4">learn more</a>
              </div>
            </div>
          </div>
        </div>
        <div class="proj-group" id="group-2">
          <div class="project">
            <div class="bg-modal">
              <div class="modal-content">
                <p class="medium large title" id="p5">project 5</p>
                <p class="light text padded" id="s5">skill/skill/skill</p>
                <a href="#/project5" class="medium large title modal-button" id="b5">learn more</a>
              </div>
            </div>
            <p>2</p>
          </div>
          <div class="project">
            <div class="bg-modal">
              <div class="modal-content">
                <p class="medium large title" id="p6">project 6</p>
                <p class="light text padded" id="s6">skill/skill/skill</p>
                <a href="#/project6" class="medium large title modal-button" id="b6">learn more</a>
              </div>
            </div>
          </div>
          <div class="project">
            <div class="bg-modal">
              <div class="modal-content">
                <p class="medium large title" id="p7">project 7</p>
                <p class="light text padded" id="s7">skill/skill/skill</p>
                <a href="#/project7" class="medium large title modal-button" id="b7">learn more</a>
              </div>
            </div>
          </div>
          <div class="project">
            <div class="bg-modal">
              <div class="modal-content">
                <p class="medium large title" id="p8">project 8</p>
                <p class="light text padded" id="s8">skill/skill/skill</p>
                <a href="#/project8" class="medium large title modal-button" id="b8">learn more</a>
              </div>
            </div>
          </div>
        </div>
        <div class="proj-group" id="group-3">
          <div class="project">
            <div class="bg-modal">
              <div class="modal-content">
                <p class="medium large title" id="p9">project 9</p>
                <p class="light text padded" id="s9">skill/skill/skill</p>
                <a href="#/project9" class="medium large title modal-button" id="b9">learn more</a>
              </div>
            </div>
            <p>3</p>
          </div>
          <div class="project">
            <div class="bg-modal">
              <div class="modal-content">
                <p class="medium large title" id="p10">project 10</p>
                <p class="light text padded" id="s10">skill/skill/skill</p>
                <a href="#/project10" class="medium large title modal-button" id="b10">learn more</a>
              </div>
            </div>
          </div>
          <div class="project">
            <div class="bg-modal">
              <div class="modal-content">
                <p class="medium large title" id="p11">project 11</p>
                <p class="light text padded" id="s11">skill/skill/skill</p>
                <a href="#/project11" class="medium large title modal-button" id="b11">learn more</a>
              </div>
            </div>
          </div>
          <div class="project">
            <div class="bg-modal">
              <div class="modal-content">
                <p class="medium large title" id="p12">project 12</p>
                <p class="light text padded" id="s12">skill/skill/skill</p>
                <a href="#/project12" class="medium large title modal-button" id="b12">learn more</a>
              </div>
            </div>
          </div>
        </div>
    `;

    document.getElementById(id).innerHTML = content;
    document.getElementById('dots').style.display = 'block';

    document.getElementById('b1').addEventListener('click', function(){
        selectProject(1)
    }, false)
    document.getElementById('b2').addEventListener('click', function(){
        selectProject(2)
    }, false)
    document.getElementById('b3').addEventListener('click', function(){
        selectProject(3)
    }, false)
    document.getElementById('b4').addEventListener('click', function(){
        selectProject(4)
    }, false)
    document.getElementById('b5').addEventListener('click', function(){
        selectProject(5)
    }, false)
    document.getElementById('b6').addEventListener('click', function(){
        selectProject(6)
    }, false)
    document.getElementById('b7').addEventListener('click', function(){
        selectProject(7)
    }, false)
    document.getElementById('b8').addEventListener('click', function(){
        selectProject(8)
    }, false)
    document.getElementById('b9').addEventListener('click', function(){
        selectProject(9)
    }, false)
    document.getElementById('b10').addEventListener('click', function(){
        selectProject(10)
    }, false)
    document.getElementById('b11').addEventListener('click', function(){
        selectProject(11)
    }, false)
    document.getElementById('b12').addEventListener('click', function(){
        selectProject(12)
    }, false)

    expanded = false;

    if(smScreen.matches) {
        document.getElementById('group-1').classList.add('active');
        document.getElementById('group-2').classList.remove('active');
        document.getElementById('group-3').classList.remove('active');
    } else {
        if(medScreen.matches) {
            document.getElementById('group-1').classList.add('active');
            document.getElementById('group-2').classList.add('active');
            document.getElementById('group-3').classList.remove('active');
        } else {
            document.getElementById('group-1').classList.add('active');
            document.getElementById('group-2').classList.add('active');
            document.getElementById('group-3').classList.add('active');
        }
    }

}