import React, { useEffect, useRef, useState } from 'react'
import { users } from '../connectionApi/Api'
import { TableUsers } from '../components/TableUsers';
import { createReportPdf } from '../methods/generateReport';
import { useReactToPrint } from 'react-to-print';
import { Page, Text, View, Document, PDFViewer } from '@react-pdf/renderer';
import { styles } from '../styles';
import { CreateTableComponent } from '../components/CreateTableComponent';
import {Table, TR, TH, TD} from '@ag-media/react-pdf-table';
import ReactPDF from '@react-pdf/renderer';
import {pdf} from '@react-pdf/renderer';
import { MyDocument } from '../components/MyDocument';


export const CreatePDF = () => {

    const [user, setuser] = useState([]);
    const [url, seturl] = useState("")



  //   const reff = useRef();
        useEffect(() => {
    
             
    
            const getUsers = async () => {
                const saveUsers = await users();
                setuser(saveUsers);
                
             
            };
             getUsers();
            
   
        }, []);

        useEffect(() => {
          const gPdf = async () =>{
    const blob = await pdf(<MyDocument users={user}/>).toBlob();
    const url = URL.createObjectURL(blob);
    seturl(url);
   /* const a = document.createElement("a");
    a.href= url;
    a.download="reporte.pdf";
   a.target = url;
    a.click();*/
 }
           
            gPdf();
        }, [user])
        

    const generatePdf = async () => {
        //   await new Promise(resolver => setTimeout(resolver,3000));
        await createReportPdf({ ref: reff });


    }


   /* const MyDocument = () => {
        return (<Document>
            <Page size={"A4"} style={styles.page}>
                <View style={styles.principal}>
                    <View style={styles.header}>
                        <View style={styles.section}>
                        <Text style={styles.title}>Hello world</Text>
                        <Text>Hello world</Text>
                        <Text>Hello world</Text>
                    </View>
                        <View style={styles.section}>
                            <Text>XDXDXD</Text>
                            <Text>XDXDXD</Text>
                            <Text>XDXDXD</Text>
                        </View></View>
 <View >
                    <Text>NUMS:</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                </View>
                   <Table style={styles.table}>
                        <TH>
                            <TD>name</TD>
                            <TD>cellphone</TD>
                            <TD>gender</TD>
                        </TH>
                
                       {user.map((u)=>(
                        <TR>
                            <TD>{u.name}</TD>
                            <TD>{u.cellphone}</TD>
                            <TD>{u.gender}</TD>
                        </TR>
                       ))} 
                    </Table>
                </View>
               

            </Page>
        </Document>)

    }
*/

    
     
    


    return (
        <>


           <div><div   className='container-pdf'>
 
                 
                 <div className='child-pdf-header'>
                     <div className='child-pdf-row'>
                         <div><h3>name</h3></div>
                         <div><h3>cellphone</h3></div>
                         <div><h3>gender</h3></div></div> </div>                                                                                                                                      
                      {user.map((u,index)=><TableUsers key={index} users={u}></TableUsers>) }   
                       
                     
             </div> 
             <a className='btn-generate-pdf' href={url} target={url} rel="noopener noreferrer">Generate PDF</a>
              </div>
            
        </>
    )
}
