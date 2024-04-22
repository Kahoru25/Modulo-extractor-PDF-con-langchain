import { PDFLoader } from 'langchain/document_loaders/fs/pdf';

async function loadPdfContent(filePath: any): Promise<any> {
  try {
    const loader = new PDFLoader(filePath);
    const pdfText = await loader.load();
    return pdfText;
  } catch (error) {
    console.error('Error al cargar el PDF:', error);
    throw error;
  }
}

const pdfFilePath = 'facturas/demo.pdf'; // Asegúrate de que esta ruta sea correcta
loadPdfContent(pdfFilePath)
  .then((extractedText) => {
    console.log('Contenido extraído del PDF:');
    console.log(extractedText);
  })
  .catch((error) => {
    console.error('Error al cargar el PDF:', error);
  });
