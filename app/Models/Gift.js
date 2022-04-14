export class Gift{
    constructor(data){
        this.tag = data.title
        this.url = data.images.downsized_medium.url || data.url
    }
    get Template(){
        return /*html*/`
        <div>
            <img src="${this.url}" class="selectable" onclick="app.apiGiftController.addurl()" alt="">
            <h1>${this.tag}</h1>
        </div>
        `
    }
}