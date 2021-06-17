export default class {
    constructor (params) {
        this.params = params;
        this.setPage();
    }

    async getHtml () {
        return "";
    }

    setPage () {
        // find type of current section home/country/gun
        let className;
        const path = window.location.pathname;
        if (path === '/') { // if path is '/' then we are at home page
            className = 'home';
        } else if (/^\/\w+?$/.test(path)) { // if path is '/(letters)'then we are at country page
            className = 'country';
            this.country = path.substring(1);            
        } else { // then we are at gun page
            className = 'gun';
            this.country = path.substring(1,path.indexOf('-'));
        }

        // only display divs that matches the className 
        Array.prototype.forEach.call(document.querySelectorAll(".home, .country, .gun"), element => {
            if (element.classList.contains(className)) {
                element.style.display = "";
            } else {
                element.style.display = "none";
            }
        })

        const navbars = [...document.getElementsByTagName("nav")];
        const navbar = navbars.filter(navbar => navbar.classList.contains(className))[0];
        const header = document.getElementsByTagName("header")[0];

        // add toggle for nav bar
        
        const toggleDiv = document.getElementById("toggle-div");
        toggleDiv.innerHTML = "";
        const toggle = document.createElement("button");
        toggle.id = "toggle-button";
        toggle.innerHTML = `
            <img id="toggle-pic" src="images/down.png">
        `;
        toggle.addEventListener("click", () => {
            // switch up and down toggle arrow
            const img = document.getElementById("toggle-pic");
            if (img.src.match(/images\/down\.png/)) {
                img.src = "images/up.png";
            } else {
                img.src = "images/down.png";
            }
            // navbar.classList.toggle("show-links");
            // switch whether or not show the drop down list due to clicking
            const listUnderNavHeight = navbar.firstElementChild.getBoundingClientRect().height;
            let navbarHeight = navbar.getBoundingClientRect().height;
            if (navbarHeight === 0) {
                navbar.style.height = `${listUnderNavHeight}px`;
            } else {
                navbar.style.height = 0;
            }
        });
        toggleDiv.appendChild(toggle);

        // keep the navbar on the top when scrolling down the page
        window.addEventListener("scroll", () => {
            const navbarHeight = navbar.getBoundingClientRect().height;
            const scrollHeight = window.pageYOffset;
            if (scrollHeight > navbarHeight) {
                header.classList.add("fixed-header");
            } else {
                header.classList.remove("fixed-header");
            }

        })

        // for gun pages add scrolling effect
        Array.prototype.forEach.call(document.getElementsByClassName("scrolllink"), link => {
            link.addEventListener("click", e => {
                e.preventDefault();
                // nagivate to specific spot
                let id = e.currentTarget.href;
                id = id.slice(id.indexOf("#")+1);
                const element = document.getElementById(id);
                const navHeight = navbar.getBoundingClientRect().height;
                const headerHeight = header.getBoundingClientRect().height;
                const fixedHeader = header.classList.contains("fixed-header");
                let position = element.offsetTop - headerHeight;
                // if header is not fixed (static on the top) then substract its height again
                if (!fixedHeader) {
                    position -= headerHeight;
                }

                // if the list is dropped down then scroll back the navHeight
                if (navHeight > document.querySelector(".navlink").getBoundingClientRect().height) {
                    position += navHeight;
                    // close the drop down list after scrolling
                    toggle.dispatchEvent(new Event("click"));
                }
                window.scrollTo({
                    left:0, 
                    top:position,
                });
                
            })
        })

        // for gun pages, add backToCountry button
        if (className === 'gun') {
            const backToCountry = document.getElementById("navbar-gun").children[0].children[0];
            backToCountry.innerHTML = `
            <a href="/${this.country}" class="navlink" data-link><img class="${this.country}-flag" src="../../images/${this.country}/${this.country}.png" data-link></a>
            `;
        }

    }

    // change the title when changing view
    setTitle(title) {
        document.title = title;
    }

    // for countries pages
    showShelf(gunCollection) {
        const addLink = (gun) => {
            const img = document.createElement("img");
            img.src = `../../images/${this.country}/${gun}/profile.png`;
            img.classList.add("gun-on-shelf");
            img.setAttribute("data-link","");
    
            const link = document.createElement("a");
            link.href = `/${this.country}-${gun}`;
            link.setAttribute("data-link","");
            link.appendChild(img);
            shelf.appendChild(link); 
        }

        const shelf = document.getElementById("shelf");
        shelf.innerHTML = "";

        // show all guns
        for (let [gunType, guns] of Object.entries(gunCollection)){
            for (let gun of guns){
            addLink(gun);
            }
        }

        // set up tab function to select gun type
        const changeGunTypeButtons = document.getElementById("gun-type-btns").children;
        for (let button of changeGunTypeButtons) {
            let gunType = button.id.split('-')[1];
            if (Object.keys(gunCollection).includes(gunType)) {
                button.addEventListener("click", () => {
                    shelf.innerHTML = "";
                    for (let gun of gunCollection[gunType]){
                        addLink(gun);
                    }
                });
            } else {
                button.addEventListener("click", () => {
                    shelf.innerHTML = "";
                    for (let [gunType, guns] of Object.entries(gunCollection)){
                        for (let gun of guns){
                        addLink(gun);
                        }
                    }
                });
            }
        } 
    }    
}