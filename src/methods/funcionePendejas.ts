
export const  setImg =(json:{binary:string})=> {
    
    const container = document.getElementById('imgGenerate')
 
    if(!container) return;

    container.innerHTML = ''

    const img = document.createElement("img");
    img.src = `data:image/png;base64,${json.binary}`
   
    container?.appendChild(img);
}