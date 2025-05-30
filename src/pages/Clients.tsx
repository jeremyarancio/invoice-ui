import ClientCard from "@/components/ClientCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { clients } from "@/types/clients";
import { useNavigate } from "react-router-dom";

function Clients() {
    const navigate = useNavigate();

    return (
        <>
            <div className="flex justify-around my-12">
                <h1>Clients</h1>
                <Button
                    onClick={() => navigate("/invoices/add")}
                    className="bg-stone-100 hover:bg-stone-200 hover:cursor-pointer text-grey-200 shadow-2xs hover:shadow-lg"
                >
                    Add Client
                </Button>
            </div>
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
