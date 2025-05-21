import { Input } from "@/components/ui/input";

function Invoices() {
    return (
        <>
            <div className="mt-15 ml-10">
                <h1>Invoice</h1>
                <div className="flex justify-center justify-items-center">
                    <Input placeholder="Search" className=""></Input>
                </div>
            </div>
        </>
    );
}

export default Invoices;
