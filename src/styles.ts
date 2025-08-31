   import {  StyleSheet} from '@react-pdf/renderer';
import { table } from 'console';

   export const styles = StyleSheet.create({
        page: {

            backgroundColor: '#ffffffff',

        },
        section: {

            fontStyle: "normal",

        },
        principal: {
            margin: 10,

        },
        header: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 50
        },
        title: {
            fontSize: "30",
            fontWeight: "bold"
        },
        table:{
            border:"1px solid black",
            marginTop:20
        },
        th:{
               backgroundColor:"pink",
               color:"white"
        }
    });