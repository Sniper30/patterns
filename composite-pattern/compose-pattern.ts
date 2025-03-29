

interface DOM {
    text: string;
    showDetails(indent?:string): void
}



class HTML_Element implements DOM {
    constructor(public text: string){}
    showDetails(){
        console.log("   - child: " + this.text );
    }
}

class HTML_Document implements DOM {
    children: DOM[] = [];
    constructor(public text: string){}
    addChild(product: DOM){
        this.children.push(product);
    }
    showDetails(indent: string = ''): void {
        console.log(indent+ "+ parent:  " + this.text );
        this.children.forEach((child) => child.showDetails(indent + " "));
        
    }
}


const div =  new HTML_Element("div");
const h1 =  new HTML_Element("h1");
const h2 =  new HTML_Element("h2");
const documento = new HTML_Document("html");
const body = new HTML_Document("body");
const main = new HTML_Document("main");

main.addChild(h2);
main.addChild(div)
body.addChild(h1);
body.addChild(main);
documento.addChild(body);

documento.showDetails()