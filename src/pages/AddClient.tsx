import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import AppAlert from "@/components/AppAlert";
import { useNavigate } from "react-router-dom";
import AddCompanyLayout from "@/components/addClient/AddCompanyLayout";
import AddIndividualLayout from "@/components/addClient/AddIndividualLayout";

function AddClient() {
    const [clientType, setClientType] = useState<string>("company");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            <div className="mt-10 ml-10">
                <button
                    onClick={() => navigate("/clients")}
                    className="hover:cursor-pointer"
                >
                    <ArrowLeft
                        size={40}
                        className="rounded-full hover:bg-stone-50"
                    />
                </button>
            </div>
            <p className="my-15 ml-30 md:ml-60 font-semibold">My client is</p>
            <div className="flex justify-center items-center space-x-6 mb-15">
                <Button
                    onClick={() => setClientType("company")}
                    className={`bg-stone-100 hover:bg-stone-200 hover:cursor-pointer text-gray-600 ${
                        clientType === "company"
                            ? "bg-stone-600 text-gray-100"
                            : ""
                    }`}
                >
                    A company
                </Button>
                <Button
                    onClick={() => setClientType("individual")}
                    className={`bg-stone-100 hover:bg-stone-200 hover:cursor-pointer text-gray-600 ${
                        clientType === "individual"
                            ? "bg-stone-600 text-gray-100"
                            : ""
                    }`}
                >
                    An individual
                </Button>
            </div>
            <div className="max-w-md mx-auto mb-30">
                {clientType === "company" ? (
                    <AddCompanyLayout />
                ) : (
                    <AddIndividualLayout />
                )}
            </div>
            {isSubmitted && <AppAlert setCondClose={setIsSubmitted} />}
        </>
    );
}

export default AddClient;
