import { ReactNode } from "react";
import { Header } from "./Header";

export const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<div className="font-body max-w-[1200px] mx-4 lg:mx-auto bg-white-100">
			<Header />
		</div>
	);
};
