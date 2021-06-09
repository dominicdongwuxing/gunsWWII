import abstractView from "./abstractView.js";

export default class extends abstractView {
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