function p1(id) {

    const content = ` 
        <div class="proj-img" src="" alt=""></div>
        <div class="select-proj">
            <section class="proj-section">
                <h3 class="medium small desc">description</h3>
                <p class="light small text desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at neque volutpat.</p>
            </section>
            <section class="proj-section">
                <h3 class="medium small desc">challenges</h3>
                <p class="light small text desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate magna in.</p>
            </section>
            <section class="proj-section">
                <h3 class="medium small desc">accomplishments</h3>
                <p class="light small text desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis fermentum auctor.</p>
            </section>
        </div>
        <div class="proj-buttons">
            <a href="https://github.com/Capstone-Projects-2020-Spring/TwitterTrends" class="medium large proj-link">view code</a>
            <a href="" class="medium large proj-link">view project</a>
        </div>
        <ul class="skills">
            <li><span>javascript</span></li>
            <li><span>jquery</span></li>
            <li><span>python</span></li>
            <li><span>html</span></li>
            <li><span>css</span></li>
        </ul>
    `;

    document.getElementById(id).innerHTML = content;
    document.getElementById('dots').style.display = 'none';
    expanded = true;
}