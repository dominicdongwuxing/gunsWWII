// I followed this tutorial: https://www.youtube.com/watch?v=6BozpmSjk-Y 

// import homem page
import home from "./home.js";
// import country pages
import { usa, ussr, germany, uk, japan } from "./countries.js";
// import gun pages
// USA
import {
    // USA
    m1garand,
    m1903springfield,
    m1911,
    thompson,
    bar,
    // USSR
    mosinnagant,
    svt40,
    ppsh41,
    dp28,
    // Nazi Germany
    kar98k,
    sturmgewehr44,
    gewehr43,
    mp40,
    mg42,
    lugerp08,
    // UK
    leeenfield,
    bren,
    sten,
    // Japan
    type38,
    type92,
    type96
} from "./guns.js"


const navigateTo = url  => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        // paths for country pages
        { path: "/", view: home },
        { path: "/usa", view: usa },
        { path: "/ussr", view: ussr },
        { path: "/germany", view: germany },
        { path: "/uk", view: uk },
        { path: "/japan", view: japan },

        // paths for gun pages
        // USA
        { path: "/usa-m1garand", view: m1garand },
        { path: "/usa-thompson", view: thompson },
        { path: "/usa-m1911", view: m1911 },
        { path: "/usa-bar", view: bar },
        { path: "/usa-m1903springfield", view: m1903springfield },
        //USSR
        { path: "/ussr-mosinnagant", view: mosinnagant },
        { path: "/ussr-svt40", view: svt40 },
        { path: "/ussr-ppsh41", view: ppsh41 },
        { path: "/ussr-dp28", view: dp28 },
        // Nazi Germany
        { path: "/germany-kar98k", view: kar98k },
        { path: "/germany-gewehr43", view: gewehr43 },
        { path: "/germany-sturmgewehr44", view: sturmgewehr44 },
        { path: "/germany-mp40", view: mp40 },
        { path: "/germany-mg42", view: mg42 },
        { path: "/germany-lugerp08", view: lugerp08 },
        // UK
        { path: "/uk-leeenfield", view: leeenfield },
        { path: "/uk-sten", view: sten },
        { path: "/uk-bren", view: bren },
        // Japan
        { path: "/japan-type38", view: type38 },
        { path: "/japan-type92", view: type92 },
        { path: "/japan-type96", view: type96 }
    ];

    // test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);
    

    if (!match){
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    // create a new instance of the view class (different country or gun)
    const view = new match.route.view();

    await view.getHtml();
};

// when clicking forward or backward also run router
window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", event => {
        if (event.target.matches("[data-link]")) {
            event.preventDefault();
            if (event.target.href) {
                // if click on the words in a link
                navigateTo(event.target.href);
            } else {
                // if click on the image in a link
                navigateTo(event.target.parentNode.href);
            }
        }
    })
    router();
});


