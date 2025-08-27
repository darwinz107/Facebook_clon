import React, { useEffect, useRef, useState } from 'react'
import { users } from '../connectionApi/Api'
import { TableUsers } from '../components/TableUsers';
import { createReportPdf } from '../methods/generateReport';

export const CreatePDF = () => {

    const [user, setuser] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const saveUsers = await users();
            setuser(saveUsers);
        };
        getUsers();
    }, []);

    const generatePdf = async() =>{
await createReportPdf({ref:reff});
    }

    const reff = useRef(null);
    return (
        <>
            <div ref={reff} className='container-pdf'>
                <div className='child-pdf-header'>
                    <div className='child-pdf-row'><div>name</div>
                        <div>cellphone</div>
                        <div>gender</div></div> </div>
                     {user.map((u)=><TableUsers users={u}></TableUsers>) }   
                      
                     <button onClick={generatePdf}>Generate PDF</button>  
            </div>
 
        </>
    )
}
