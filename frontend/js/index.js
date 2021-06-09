// I followed this tutorial: https://www.youtube.com/watch?v=6BozpmSjk-Y 
import home from "./views/home.js";
// import country pages
import usa from "./views/usa.js";
import ussr from "./views/ussr.js";
import germany from "./views/germany.js";
import uk from "./views/uk.js";
import japan from "./views/japan.js";
// import gun pages
// USA
import m1garand from "./views/usa-m1garand.js";
import thompson from "./views/usa-thompson.js";
import m1911 from "./views/usa-m1911.js";
//USSR

// Nazi Germany

// UK
import leeenfield from "./views/uk-leeenfield.js";
import bren from "./views/uk-bren.js";
import sten from "./views/uk-sten.js";

// Japan

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
        //USSR

        // Nazi Germany

        // UK
        { path: "/uk-leeenfield", view: leeenfield },
        { path: "/uk-sten", view: sten },
        { path: "/uk-bren", view: bren },
        // Japan
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


