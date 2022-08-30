import { ReactNode } from "react";
import { Header } from "./Header";

export const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<div className="font-body min-h-screen bg-sky-50">
			<div className="max-w-[1200px] px-4 lg:mx-auto">
				<Header />
				<main>{children}</main>
			</div>
		</div>
	);
};
