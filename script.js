function run() {
    // map of tracker names and sources.
    const trackers = {
        "NaviStone": ["datasteam.io","murdoog.com/onetag"],
        "Pebble Post": ["pbbl.co"],
        "Remarketable/ALC": ["alcmpn.com"],
        "LSDirect/Boomerang/4Cite": ["securedvisit.com"],
        "El Toro": ["adnxs.com"],
        "Postie": ["postaffiliatepro.com"],
        "TEST": ["www.gstatic.com"]
    };

    for (let tracker in trackers) {
        let terms = trackers[tracker];
        for (let i = 0; i < terms.length; ++i) {
            let elementsWithSrc = document.querySelectorAll(`[src*="${terms[i]}"]`);
            if (elementsWithSrc.length > 0) {
                console.log(`Found ${tracker} tag on ${window.location.hostname}`);
                break;
            }
        }
        console.log(`None found for ${tracker} tag on ${window.location.hostname}`);
    }
}
