import InvoiceCard from "@/components/InvoiceCard";
import { Input } from "@/components/ui/input";
import { invoices } from "@/types/invoices";

function Invoices() {
    return (
        <>
            <h1 className="text-left mt-15 ml-15">Invoice</h1>
            <div className="max-w-96 px-4 mb-20 mx-auto mt-5">
                <Input placeholder="Search"></Input>
            </div>
            <div className="flex flex-col space-y-2 mt-5 mx-auto max-w-4xl px-4">
                {invoices.map((invoice) => (
                    <InvoiceCard
                        key={invoice.invoiceNumber}
                        invoiceDescription={invoice.description}
                        amount={invoice.amount}
                        invoiceNumber={invoice.invoiceNumber}
                        date={invoice.date}
                        status={invoice.status}
                        currency={invoice.currency}
                    />
                ))}
            </div>
        </>
    );
}

export default Invoices;
