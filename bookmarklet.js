// JS to be called from the bookmarklet
(function (window) {
    const id = 'tracker-finder';
    const scriptSrc = 'https://tgrubbz.github.io/tracker-finder/script.js'
    if (!window.trackerFinder) {
        const script = document.createElement('script');
        script.id = id;
        script.src = scriptSrc;
        script.onload = function() {
            if (typeof run === 'function') {
                window.trackerFinder = { run };
                window.trackerFinder.run();
            } else {
                console.error('Function "run" not found.');
            }
        };
        document.body.appendChild(script);
    }
    else {
        window.trackerFinder.run();
    }
})(window);
