function urlRouter(params) {
    const startingPath = params.startingPath || '/';
    const contentId = params.contentId || "projects";

    if (!params.routeArray || params.routeArray[0]) {
        alert("parameter object must specify array 'routeArray' with at least one element");
        return;
    }
    const routes = params.routeArray;

    function router() {

        let path = location.hash.slice(1) || '/';
        if (!routes[path]) {
            document.getElementById('project-title').innerHTML = 'error';
            document.getElementById(contentId).innerHTML = "Error: link '" + path +
                "' is not valid.";
        } else {
            routes[path](contentId);
        }
    }
    router();
    window.addEventListener('hashchange', router);
    window.location.hash = startingPath;
}