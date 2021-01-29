import CreateView from './screen.class'

const ScreenGif = (title,img)=>{

    let instanceCreateView =new CreateView(title, img);
    instanceCreateView.createView();
 
}


export default ScreenGif