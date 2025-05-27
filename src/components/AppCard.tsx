import type { ReactNode } from "react";
import CardToggle from "./CardToggle";

export function AppCard({ children }: { children: ReactNode }) {
    return (
        <div className="flex justify-between w-full h-30 pl-6 pr-4 py-4 rounded-lg border-1 shadow-lg hover:shadow-xl transition-shadow duration-200">
            <div className="flex-col space-y-8 w-29/30">{children}</div>
            <div className="my-auto ml-auto w-1/30">
                <CardToggle />
            </div>
        </div>
    );
}
