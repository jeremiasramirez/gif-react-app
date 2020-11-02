import CreateView from './screen.class'

const ScreenGif = (title,img)=>{

    let instance =new CreateView(title, img);
    instance.createView();
 
}


export default ScreenGif