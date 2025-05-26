interface InvoiceElementProps {
    invoiceDescription: string;
    amount: number;
    invoiceNumber: string;
    date: Date;
    status: "paid" | "unpaid" | "overdue";
    currency?: string;
}

function InvoiceElement({
    invoiceDescription,
    amount,
    invoiceNumber,
    date,
    status,
    currency,
}: InvoiceElementProps) {
    return (
        <>
            <div className="w-full h-30 pl-6 pr-4 py-4 rounded-lg border-2 shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="flex-col space-y-8">
                    <h3>{invoiceDescription}</h3>
                    <div className="flex items-center justify-between">
                        <div className="flex w-3/8 space-x-4 justify-start">
                            <p className="flex italic font-semibold">
                                N° {invoiceNumber}
                            </p>
                            <p className="flex font-semibold">
                                {date.toLocaleDateString()}
                            </p>
                        </div>
                        <div className="w-3/8"></div>
                        <div className="flex w-2/8 space-x-4 justify-center">
                            <p>
                                {status === "paid"
                                    ? "Paid"
                                    : status === "unpaid"
                                    ? "Unpaid"
                                    : "Overdue"}
                            </p>
                            <p className="font-semibold">
                                {amount} {currency}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InvoiceElement;
