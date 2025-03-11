function run() {
    // map of tracker names and sources.
    const trackers = {
        "NaviStone": ["datasteam.io","murdoog.com/onetag"],
        "Pebble Post": ["pbbl.co"],
        "Remarketable/ALC": ["alcmpn.com"],
        "LSDirect/Boomerang/4Cite": ["securedvisit.com"],
        "El Toro": ["adnxs.com"],
        "Postie": ["postaffiliatepro.com"],
        'LS Direct': ['lsdirect'],
        'Pebble Post': ['pebblepost'],
        'Navistone': ['navistone'],
        'ALC': ['alc'],
        'El Toro': ['eltoro'],
        'Postie': ['postie'],
        'Tapad': ['tapad'],
        'LiveRamp': ['liveramp'],
        'Crosswise': ['crosswise'],
        'Drawbridge': ['drawbridge'],
        'Adbrain': ['adbrain'],
        'Neustar': ['neustar'],
        'Experian': ['experian'],
        'Oracle Data Cloud': ['oraclecloud'],
        'Lotame': ['lotame'],
        'BlueKai': ['bluekai'],
        'Signal': ['signal'],
        'Kochava': ['kochava'],
        'AppsFlyer': ['appsflyer'],
        'Adjust': ['adjust'],
        'Branch': ['branch'],
        'TUNE': ['tune'],
        'mParticle': ['mparticle'],
        'Google Analytics': ['google-analytics'],
        'Facebook Pixel': ['facebook.com'],
        'LinkedIn Insight': ['linkedin.com'],
        'Twitter Pixel': ['ads-twitter'],
        'Pinterest Tag': ['pinterest.com'],
        'Snapchat Pixel': ['sc-static'],
        'TikTok Pixel': ['tiktok.com'],
        'Adobe Analytics': ['omtrdc.net'],
        'Hotjar': ['hotjar'],
        'Crazy Egg': ['crazyegg'],
        'HubSpot': ['hubspot'],
        'Marketo': ['marketo'],
        'Salesforce': ['salesforce'],
        'Segment': ['segment'],
        "TEST": ["www.gstatic.com"],
    };

    let results = {};
    const url = window.location;

    for (let tracker in trackers) {
        results[tracker] = { found: false };
        let terms = trackers[tracker];
        for (let i = 0; i < terms.length; ++i) {
            let elementsWithSrc = document.querySelectorAll(`[src*="${terms[i]}"]`);
            if (elementsWithSrc.length > 0) {
                results[tracker].found = true;
                break;
            }
        }
    }
    
    // Create table
    let table = document.createElement('table');
    table.style.border = '1px solid black';
    table.style.borderCollapse = 'collapse';
    table.style.width = '80%';
    table.style.margin = '20px auto';
    table.innerHTML = `
        <thead>
            <tr>
                <th style="border: 1px solid black; padding: 8px;">Tracker</th>
                <th style="border: 1px solid black; padding: 8px;">Found?</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    `;

    // Populate table
    let tbody = table.querySelector('tbody');
    for (let tracker in results) {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td style="border: 1px solid black; padding: 8px;">${tracker}</td>
            <td style="border: 1px solid black; padding: 8px;">${(results[tracker].found ? 'Y' : 'N')}</td>
        `;
        tbody.appendChild(row);
    }

    let title = document.createElement('div');
    title.innerHTML = `<h1>Tracker Finder results from</h1><div><a href="${url}">${url}</a></div>`;

    // Create a new window
    let w = window.open("");
    w.document.body.appendChild(title);
    w.document.body.appendChild(table);
}
