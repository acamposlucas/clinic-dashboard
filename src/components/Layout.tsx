import { ReactNode } from "react";
import { Header } from "./Header";

export const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<div className="font-body min-h-screen max-w-[1200px] px-4 lg:mx-auto bg-sky-50">
			<Header />
			<main>{children}</main>
		</div>
	);
};
