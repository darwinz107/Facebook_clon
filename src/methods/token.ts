
export const generateTokenNest = async(id:number) =>{
  
    localStorage.removeItem('token');
    const response = await fetch(`http://localhost:3000/user/token/${id}`,{
     method: 'GET'
    });

    const data = await response.json();
    return data;
}