import { timer } from "rxjs";
import "./screen.component.css"

 class CreateView {

    idContainerView;
    containerView;
    containerTitle;
    containerClose;
    imageGifs;
    rootPage;
    titleGif;
    containerImageGif;
    imageGif;
    classGif = {};

    constructor( title=null, img=null ){

        this.titleGif = title;
        this.imageGif = img;

        this.classGif = {
            containerClass: "containerView",
            containerTitle: 'containerTitle',
            containerImage: 'containerImage',
            imageGif: 'imageGif',
            containerCloseClass: "containerClose"
        }

    }

    createView(){
        if ( !this.existView() ){
            this.containerView = document.createElement("section")
            this.containerView.setAttribute("class", this.classGif.containerClass);
            this.containerView.setAttribute("id", this.classGif.containerClass);

            this.containerTitle = document.createElement('h1');
            this.containerTitle.setAttribute('class', this.classGif.containerTitle)
            this.containerTitle.innerHTML = this.titleGif;

            this.containerImageGif =document.createElement("article");
            this.containerImageGif.setAttribute("class", this.classGif.containerImage);
            this.containerImageGif.setAttribute("id", this.classGif.containerImage);

            this.imageGifs =document.createElement("img");
            this.imageGifs.setAttribute("class", this.classGif.imageGif);
            this.imageGifs.setAttribute("id", this.classGif.imageGif);
            this.imageGifs.setAttribute("alt", this.titleGif);
            this.imageGifs.setAttribute("src", this.imageGif);

            this.containerClose =document.createElement("div");
            this.containerClose.setAttribute("class", this.classGif.containerCloseClass);
            this.containerClose.setAttribute("id", this.classGif.containerCloseClass);
            this.containerClose.innerHTML = "X";
             

            this.containerView.append(this.containerClose);
            this.containerView.append(this.containerTitle);
            this.containerView.append(this.containerImageGif);
            this.containerImageGif.append(this.imageGifs);



            this.rootPage = document.getElementById("rootPage");
            this.rootPage.insertAdjacentElement("beforebegin", this.containerView)
            this.deleteView()

        }
        

    }
    deleteView(){
        if (this.existView()) {
            let idClose= document.getElementById("containerClose");

            idClose.addEventListener('click', ()=>{

                this.containerView.classList.add('closeOut')
                timer(400).subscribe(()=>this.idContainerView.remove());

            },false);
        }
        
    }

    existView() {
        this.idContainerView =document.getElementById("containerView");

        if (this.idContainerView) return true;
        else return false;
    }

}

export default CreateView