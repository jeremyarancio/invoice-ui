import InvoiceCard from "@/components/InvoiceCard";
import { Input } from "@/components/ui/input";
import { invoices } from "@/types/invoices";

function Clients() {
    return (
        <>
            <div className="w-full mt-15 max-w-96 px-4 mb-20 mx-auto">
                <h1 className="text-left">Invoice</h1>
                <div className="flex justify-center mt-5">
                    <Input placeholder="Search"></Input>
                </div>
            </div>
            <div className="flex flex-col space-y-4 mt-5 mx-auto max-w-4xl px-4">
                {invoices.map((invoice) => (
                    <InvoiceCard
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

export default Clients;
