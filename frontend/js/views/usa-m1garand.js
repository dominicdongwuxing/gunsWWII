import abstractView from "./abstractView.js";

export default class extends abstractView {
    constructor (params) {
        super(params);       
    }

    async getHtml () {
        this.setTitle("M1 Garand");

        

    }
}