import InvoiceCard from "@/components/InvoiceCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { invoices } from "@/types/invoices";
import { useNavigate } from "react-router-dom";

function Invoices() {
    const navigate = useNavigate();

    return (
        <>
            <div className="my-12">
                <div className="flex justify-around ">
                    <h1>Invoice</h1>
                    <Button
                        onClick={() => navigate("/invoices/add")}
                        className="bg-stone-100 hover:bg-stone-200 hover:cursor-pointer text-grey-200"
                    >
                        Add Invoice
                    </Button>
                </div>
            </div>

            <div className="max-w-96 px-4 mb-20 mx-auto mt-5">
                <Input placeholder="Search"></Input>
            </div>
            <div className="flex flex-col space-y-2 mt-5 mx-auto max-w-4xl px-4">
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
