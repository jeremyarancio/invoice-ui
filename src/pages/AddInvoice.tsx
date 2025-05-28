import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { clients } from "@/types/clients";
import { useState } from "react";
import AppAlert from "@/components/AppAlert";

const CURRENCIES = ["$", "€"];

function AddInvoice() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const formSchema = z.object({
        invoiceNumber: z.string().min(1, "Invoice number is required"),
        invoiceDescription: z
            .string()
            .min(1, "Invoice description is required")
            .max(100, "Invoice description must be less than 100 characters"),
        grossAmount: z.coerce // Number type
            .number()
            .min(0, "Gross amount must be a positive number")
            .max(1000000, "Gross amount must be less than 1,000,000"),
        currency: z.string(),
        vat: z.coerce.number().min(0).max(50),
        client: z.string(),
        invoicedDate: z.date(),
        paidDate: z.date().optional(),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            invoiceNumber: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        setIsSubmitted(true);
    }

    return (
        <>
            <div className="flex justify-around mt-10 ">
                <button className="hover:cursor-pointer">
                    <ArrowLeft
                        size={40}
                        className="rounded-full hover:bg-stone-50"
                    />
                </button>
                <Button
                    onClick={() => form.handleSubmit(onSubmit)()}
                    type="button"
                    className="bg-stone-100 hover:bg-stone-200 hover:cursor-pointer text-grey-200"
                >
                    Add Invoice
                </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-20 mb-40">
                <div className="bg-gray-100 mx-4">PDF</div>
                <div className="px-4 md:px-20">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-8"
                        >
                            <FormField
                                control={form.control}
                                name="invoiceNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Invoice Number
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="FR0001"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            The invoice number should be unique
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="invoiceDescription"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Description
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Consulting services"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            Brief summary of the completed
                                            project.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="grossAmount"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Gross Amount
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="1000"
                                                type="number"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="currency"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Currency
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a currency." />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent className="bg-stone-50">
                                                {CURRENCIES.map((currency) => (
                                                    <SelectItem
                                                        key={currency}
                                                        value={currency}
                                                    >
                                                        {currency}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="vat"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            VAT (%)
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="21"
                                                type="number"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="client"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Client
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a Client." />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent className="bg-stone-50">
                                                {clients.map((client) => (
                                                    <SelectItem
                                                        key={client.clientName}
                                                        value={
                                                            client.clientName
                                                        }
                                                    >
                                                        {client.clientName}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="invoicedDate"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel>
                                            Invoiced Date
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-[240px] pl-3 text-left font-normal",
                                                            !field.value &&
                                                                "text-muted-foreground"
                                                        )}
                                                    >
                                                        {field.value ? (
                                                            format(
                                                                field.value,
                                                                "PPP"
                                                            )
                                                        ) : (
                                                            <span>
                                                                Pick a date
                                                            </span>
                                                        )}
                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent
                                                className="w-auto p-0 bg-stone-50"
                                                align="start"
                                            >
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    disabled={(date) =>
                                                        date > new Date() ||
                                                        date <
                                                            new Date(
                                                                "1900-01-01"
                                                            )
                                                    }
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        <FormDescription>
                                            The date when the invoice was
                                            issued.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="paidDate"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel>Paid Date</FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-[240px] pl-3 text-left font-normal",
                                                            !field.value &&
                                                                "text-muted-foreground"
                                                        )}
                                                    >
                                                        {field.value ? (
                                                            format(
                                                                field.value,
                                                                "PPP"
                                                            )
                                                        ) : (
                                                            <span>
                                                                Pick a date
                                                            </span>
                                                        )}
                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent
                                                className="w-auto p-0 bg-stone-50"
                                                align="start"
                                            >
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    disabled={(date) =>
                                                        date > new Date() ||
                                                        date <
                                                            new Date(
                                                                "1900-01-01"
                                                            )
                                                    }
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        <FormDescription>
                                            The date when the invoice was paid.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button
                                type="submit"
                                className="bg-stone-100 hover:bg-stone-200 hover:cursor-pointer text-grey-200"
                            >
                                Add Invoice
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
            {isSubmitted && <AppAlert setCondClose={setIsSubmitted} />}
        </>
    );
}

export default AddInvoice;
