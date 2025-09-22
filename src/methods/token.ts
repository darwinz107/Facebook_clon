const route = "https://facebook-clon-nestjs-production.up.railway.app/";

export const generateTokenNest = async(id:number) =>{
   
    const response = await fetch(`${route}user/token/${id}`,{
     method: 'GET',
     credentials:'include'
    });

    const data = await response.json();
    return data;
}

export const logout = async() =>{
    const response = await fetch(`${route}user/logout`,{
        method:'GET',
        credentials:'include'
    });

    const data = await response.json();
    return data;
}