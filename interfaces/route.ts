import { ReactElement, ReactNode } from "react";

export interface Route {
    href: string;
    label: string;
    icon?: ReactElement | ReactNode;
}