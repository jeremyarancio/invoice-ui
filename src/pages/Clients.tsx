import ClientCard from "@/components/ClientCard";
import { Input } from "@/components/ui/input";
import { clients } from "@/types/clients";

function Clients() {
    return (
        <>
            <h1 className="text-left mt-15 ml-15">Clients</h1>
            <div className="max-w-96 px-4 mb-20 mx-auto mt-5">
                <Input placeholder="Search"></Input>
            </div>
            <div className="flex flex-col space-y-2 mt-5 mx-auto max-w-4xl px-4">
                {clients.map((client) => (
                    <ClientCard
                        key={client.clientName}
                        client_name={client.clientName}
                        totalInvoiceNumber={client.totalInvoiceNumber}
                        totalInvoiceAmount={client.totalInvoiceAmount}
                        totalInvoiceAmountCurrency={
                            client.totalInvoiceAmountCurrency
                        }
                    />
                ))}
            </div>
        </>
    );
}

export default Clients;
