import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";
import { Button } from "@/components/ui/button";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PdfPreviewProps {
    file: File | string;
}

function PdfPreview({ file }: PdfPreviewProps) {
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [numPages, setNumPages] = useState<number>();

    const onDocumentLoadSuccess = ({ numPages }: any) => {
        setNumPages(numPages);
    };

    const handlePrevPage = () => {
        setPageNumber(pageNumber - 1);
    };

    const handleNextPage = () => {
        setPageNumber(pageNumber + 1);
    };

    return (
        <div className="flex-col">
            <div>
                <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page
                        pageNumber={pageNumber}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                    ></Page>
                </Document>
            </div>
            <div className="flex justify-center space-x-2">
                <Button onClick={handlePrevPage} disabled={pageNumber <= 1}>
                    Previous
                </Button>
                <Button
                    onClick={handleNextPage}
                    disabled={pageNumber >= (numPages ?? -1)}
                >
                    Next
                </Button>
            </div>
        </div>
    );
}

export default PdfPreview;
