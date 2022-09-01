import { ReactNode } from "react";
import { FloatingMenu } from "./FloatingMenu";
import { Header } from "./Header";

export const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<div className="font-body min-h-screen bg-sky-50">
			<div className="max-w-[1200px] px-4 lg:mx-auto">
				<Header />
				<main>{children}</main>
				<FloatingMenu />
			</div>
		</div>
	);
};
