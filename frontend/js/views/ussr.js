import abstractView from "./abstractView.js";

export default class extends abstractView {
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