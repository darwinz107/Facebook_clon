
export const generateTokenNest = async(id:number) =>{
   
    const response = await fetch(`http://localhost:3000/user/token/${id}`,{
     method: 'GET',
     credentials:'include'
    });

    const data = await response.json();
    return data;
}

export const logout = async() =>{
    const response = await fetch("http://localhost:3000/user/logout",{
        method:'GET',
        credentials:'include'
    });

    const data = await response.json();
    return data;
}