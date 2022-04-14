export class Gift{
    constructor(data){
        this.tag = data.tag
        this.url = data.url
    }
    get Template(){
        return /*html*/`
        <div>
        <h1>${this.tag}</h1>
        <img src="('${this.url}')" alt="">
        </div>
        `
    }
}