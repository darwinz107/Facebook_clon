import html2canvas from "html2canvas";
import jsPDF from "jspdf";

  async function createReportPdf({ref}) {
/*   console.log(ref.current)
    const boxPrincipal = ref.current;
    const canvas = await html2canvas(boxPrincipal,{
      useCORS:true,
      scrollX: -window.scrollX,
      scrollY:-window.scrollY,
      windowHeight:100,
      backgroundColor:null,
      allowTaint:true
    });
    const imgData =  canvas.toDataURL('image/png');
    const w = window.open("");
    w.document.writeln("<img src='"+ imgData+"'/>")
    
*/
   /* const pdf = new jsPDF('portrait','px','a4');
    const imgWidth = 190;
    const imgHeight = (canvas.height * imgWidth)/ canvas.width;
    pdf.addImage(imgData,'PNG',10,10,imgWidth,imgHeight)
    
    pdf.save("reporte.pdf")
    console.log(pdf.getCreationDate());*/


}

export {createReportPdf}