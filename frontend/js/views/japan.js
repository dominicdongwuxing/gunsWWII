import abstractView from "./abstractView.js";

export default class extends abstractView {
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