import html2canvas from "html2canvas";
import jsPDF from "jspdf";

  async function createReportPdf({ref}) {
   console.log("entro a pdf")
    const boxPrincipal = ref.current;
    const canvas = await html2canvas(boxPrincipal,{scale:2});
    const imgData =  canvas.toDataURL('image/png');
    
    const pdf = new jsPDF('portrait','mm','a4');
    pdf.addImage(imgData,'PNG',10,10,190,0)
    pdf.save("reporte.pdf")
    console.log(pdf.getCreationDate());
}

export {createReportPdf}