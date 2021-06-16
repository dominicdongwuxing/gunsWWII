import abstractView from "./abstractView.js";

export class usa extends abstractView {
    constructor (params) {
        super(params);
    }

    async getHtml () {
        this.setTitle("USA Guns");
        // put gun names here
        let guns = {
            rifles: ['m1garand','m1903springfield'], 
            machineGuns: ['thompson','bar'], 
            sideArms: ['m1911']
        }

        // display the guns
        this.showShelf(guns);
    }
}

export class ussr extends abstractView {
    constructor (params) {
        super(params);  
    }

    async getHtml () {
        this.setTitle("USSR guns");

        // put gun names here
        let guns = {
            rifles: ['mosinnagant','svt40'], 
            machineGuns: ['ppsh41','dp28'], 
            sideArms: []
        }

        // display the guns
        this.showShelf(guns);
    }
}

export class germany extends abstractView {
    constructor (params) {
        super(params);
    }

    async getHtml () {
        this.setTitle("Nazi Germany Guns");
        // put gun names here
        let guns = {
            rifles: ['kar98k','sturmgewehr44', 'gewehr43'], 
            machineGuns: ['mp40','mg42'], 
            sideArms: ['lugerp08']
        }

        // display the guns
        this.showShelf(guns);
    }
}

export class uk extends abstractView {
    constructor (params) {
        super(params);
    }

    async getHtml () {
        this.setTitle("UK Guns");
        // put gun names here
        let guns = {
            rifles: ['leeenfield'], 
            machineGuns: ['sten','bren'], 
            sideArms: []
        }

        // display the guns
        this.showShelf(guns);
    }
}

export class japan extends abstractView {
    constructor (params) {
        super(params);
    }

    async getHtml () {
        this.setTitle("Japan Guns");
        // put gun names here
        let guns = {
            rifles: ['type38'], 
            machineGuns: ['type92','type96'], 
            sideArms: []
        }

        // display the guns
        this.showShelf(guns);
        
    }
}