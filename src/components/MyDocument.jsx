import React from 'react'
import { Page, Text, View, Document } from '@react-pdf/renderer';
import {Table, TR, TH, TD} from '@ag-media/react-pdf-table';
import { styles } from '../styles';

export const MyDocument = ({users}) => {
  return (
   <>
   <Document>
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
                   
                          {users.map((u)=>(
                           <TR>
                               <TD>{u.name}</TD>
                               <TD>{u.cellphone}</TD>
                               <TD>{u.gender}</TD>
                           </TR>
                          ))} 
                       </Table>
                   </View>
                  
   
               </Page>
           </Document>
   </>
  )
}
