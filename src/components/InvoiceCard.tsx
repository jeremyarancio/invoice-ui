import { AppCard } from "@/components/AppCard";

interface InvoiceCardProps {
    invoiceDescription: string;
    amount: number;
    invoiceNumber: string;
    date: Date;
    status: "paid" | "unpaid" | "overdue";
    currency?: string;
}

function InvoiceCard({
    invoiceDescription,
    amount,
    invoiceNumber,
    date,
    status,
    currency,
}: InvoiceCardProps) {
    return (
        <>
            <AppCard>
                <h3>{invoiceDescription}</h3>
                <div className="flex justify-between flex-nowrap">
                    <div className="flex w-3/8 space-x-8 justify-start">
                        <p className="flex italic font-semibold">
                            N° {invoiceNumber}
                        </p>
                        <p className="flex font-semibold">
                            {date.toLocaleDateString()}
                        </p>
                    </div>
                    <div className="w-3/8"></div>
                    <div className="flex w-2/8 space-x-8 justify-evenly">
                        <p
                            className={`${
                                status === "paid"
                                    ? "text-green-500"
                                    : status === "unpaid"
                                    ? "text-yellow-500"
                                    : "text-red-500"
                            } font-semibold`}
                        >
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
            </AppCard>
        </>
    );
}

export default InvoiceCard;
