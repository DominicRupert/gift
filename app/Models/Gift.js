export class Gift{
    constructor(data){
        this.tag = data.title
        this.url = data.url
    }
    get Template(){
        return /*html*/`
        <div>
            <img src="${this.url}" alt="">
            <h1>${this.tag}</h1>
        </div>
        `
    }
}