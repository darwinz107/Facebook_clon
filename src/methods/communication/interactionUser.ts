import { interaction } from "../../connectionApi/Api"


export const interactionUser = async(id:number,id2:number,message:string,setArray) => {
  
    try {
        const data = await interaction(id,id2,message);

    if(data){
        return "seen";
    }
        
    } catch (error) {
        console.log(error);
    }
    
}
