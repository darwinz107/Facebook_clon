import {Table, TR, TH, TD} from '@ag-media/react-pdf-table';
import { styles } from '../styles';

export const CreateTableComponent = ({user}) => {
 
    return (
   <>
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
   </>
  )
}
