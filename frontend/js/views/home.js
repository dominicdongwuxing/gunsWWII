import abstractView from "./abstractView.js";

export default class extends abstractView {
    constructor (params) {
        super(params);        
    }

    async getHtml () {
        const addLink = (imageSource, destinationHref) => {
            const img = document.createElement("img");
            img.src = imageSource;
            img.classList.add("gun-on-frame");
            img.setAttribute("data-link","");

            const link = document.createElement("a");
            link.href = destinationHref;
            link.setAttribute("data-link","");
            link.appendChild(img);
            return link;
        }
        this.setTitle("Famous guns of WWII");
        const frame = document.getElementById("frame");
        const prev = document.getElementById("btn-prev");
        const random = document.getElementById("btn-random");
        const next = document.getElementById("btn-next");
        frame.innerHTML="";

        const guns = [
            // USA guns
            {image: '../../images/usa/m1garand/profile.png',href: './usa-m1garand'},
            {image: '../../images/usa/m1903springfield/profile.png',href: './usa-m1903springfield'},
            {image: '../../images/usa/thompson/profile.png',href: './usa-thompson'},
            {image: '../../images/usa/bar/profile.png',href: './usa-bar'},
            {image: '../../images/usa/m1911/profile.png',href: './usa-m1911'},
            // USSR guns
            {image: '../../images/ussr/mosinnagant/profile.png',href: './ussr-mosinnagant'},
            {image: '../../images/ussr/svt40/profile.png',href: './ussr-svt40'},
            {image: '../../images/ussr/dp28/profile.png',href: './ussr-dp28'},
            {image: '../../images/ussr/ppsh41/profile.png',href: './ussr-ppsh41'},
            // Nazi Germany guns
            {image: '../../images/germany/kar98k/profile.png',href: './germany-kar98k'},
            {image: '../../images/germany/sturmgewehr44/profile.png',href: './germany-sturmgewehr44'},
            {image: '../../images/germany/gewehr43/profile.png',href: './germany-gewehr43'},
            {image: '../../images/germany/mp40/profile.png',href: './germany-mp40'},
            {image: '../../images/germany/mg42/profile.png',href: './germany-mg42'},
            {image: '../../images/germany/lugerp08/profile.png',href: './germany-lugerp08'},
            // UK guns
            {image: '../../images/uk/leeenfield/profile.png',href: './usa-leeenfield'},
            {image: '../../images/uk/sten/profile.png',href: './uk-sten'},
            {image: '../../images/uk/bren/profile.png',href: './uk-bren'},
            // Japan guns
            {image: '../../images/japan/type38/profile.png',href: './japan-type38'},
            {image: '../../images/japan/type92/profile.png',href: './japan-type92'},
            {image: '../../images/japan/type96/profile.png',href: './japan-type96'},
        ]

        frame.appendChild(addLink(guns[0].image, guns[0].href));

        let index = 0;
        prev.addEventListener("click", () => {
            frame.innerHTML = "";
            index--;
            if (index < 0) {index = guns.length-1;}
            frame.appendChild(addLink(guns[index].image, guns[index].href));
        })

        random.addEventListener("click", () => {
            frame.innerHTML = "";
            let newIndex = Math.floor(Math.random()*guns.length);
            while (newIndex === index) {
                newIndex = Math.floor(Math.random()*guns.length);
            }
            index = newIndex;
            if (index < 0) {index = guns.length-1;}
            frame.appendChild(addLink(guns[index].image, guns[index].href));
        })

        next.addEventListener("click", () => {
            frame.innerHTML = "";
            index++;
            if (index > guns.length-1) {index = 0;}
            frame.appendChild(addLink(guns[index].image, guns[index].href));            
        })

    }
}

