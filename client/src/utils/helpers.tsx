import  { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
export const generatePDF = () => {
    const element = document.querySelector('#pdf-content') as HTMLElement;
    html2canvas(element)
    .then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgProps= pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = ((imgProps.height * pdfWidth) / imgProps.width);
      pdf.addImage(imgData, 'PNG', 0, 0,pdfWidth, pdfHeight);
      // pdf.output('dataurlnewwindow');
      pdf.save("resume.pdf");
    })
  ;
}
export const baseURL = 'http://localhost:5001/'