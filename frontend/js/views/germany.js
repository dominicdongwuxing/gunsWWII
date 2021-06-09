import abstractView from "./abstractView.js";

export default class extends abstractView {
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