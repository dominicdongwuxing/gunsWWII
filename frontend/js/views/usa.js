import abstractView from "./abstractView.js";

export default class extends abstractView {
    constructor (params) {
        super(params);
    }

    async getHtml () {
        this.setTitle("USA Guns");
        // put gun names here
        let guns = {
            rifles: ['m1garand'], 
            machineGuns: ['thompson'], 
            sideArms: ['m1911']
        }

        // display the guns
        this.showShelf(guns);
    }
}