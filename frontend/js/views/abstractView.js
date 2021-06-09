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
        this.showNavbar(className);

    }

    // change the title when changing view
    setTitle(title) {
        document.title = title;
    }

    // only show display of the current section (class name = home/country/gun)
    showNavbar(className) {
        Array.prototype.forEach.call(document.querySelectorAll(".home, .country, .gun"), element => {
            if (element.classList.contains(className)) {
                element.style.display = "flex";
            } else {
                element.style.display = "none";
            }
        })

        if (className === 'gun') {
            const backToCountry = document.getElementById("navbar-gun").children[0].children[0];
            backToCountry.innerHTML = `
            <a href="/${this.country}" class="navlink" data-link><img class="${this.country}-flag" src="../../images/${this.country}/${this.country}.png" data-link></a>
            `;
        }
    }

    // for countries pages
    showShelf(gunCollection) {
        const addLink = (gun) => {
            const img = document.createElement("img");
            img.src = `../../../images/${this.country}/${gun}/profile.png`;
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