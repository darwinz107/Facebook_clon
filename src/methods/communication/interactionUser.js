import { interaction } from "../../connectionApi/Api"


export const interactionUser = async(id,id2,message) => {
  
    try {
        const data = await interaction(id,id2,message);

    if(data){
        return "seen";
    }
        
    } catch (error) {
        console.log(error);
    }
    
}
