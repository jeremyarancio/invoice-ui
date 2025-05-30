import InvoiceCard from "@/components/InvoiceCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import UploadInvoiceModal from "@/components/UploadInvoiceModal";
import { invoices } from "@/types/invoices";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Invoices() {
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);

    const handleUpload = () => {
        selectedFile &&
            navigate("/invoices/add", {
                state: { file: selectedFile }, // Send file during navigation
            });
    };

    return (
        <>
            <div className="flex justify-around my-12">
                <h1>Invoices</h1>
                <UploadInvoiceModal
                    trigger={
                        <Button className="bg-stone-100 hover:bg-stone-200 hover:cursor-pointer text-grey-200 shadow-2xs hover:shadow-lg">
                            Add Invoice
                        </Button>
                    }
                    handleUpload={handleUpload}
                    setSelectedFile={setSelectedFile}
                />
            </div>

            <div className="max-w-96 px-4 mb-20 mx-auto mt-5">
                <Input placeholder="Search"></Input>
            </div>
            <div className="flex flex-col space-y-2 mt-5 mx-auto max-w-4xl px-4 h-full">
                {invoices.map((invoice) => (
                    <InvoiceCard
                        key={invoice.invoiceNumber}
                        invoiceDescription={invoice.invoiceDescription}
                        grossAmount={invoice.grossAmount}
                        invoiceNumber={invoice.invoiceNumber}
                        issuedDate={invoice.issuedDate}
                        status={invoice.status}
                        currency={invoice.currency}
                    />
                ))}
            </div>
        </>
    );
}

export default Invoices;
