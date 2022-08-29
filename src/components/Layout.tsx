import { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<div className="font-body max-w-[1200px] mx-4 lg:mx-auto lg:mx-0 bg-white-100">
			{children}
		</div>
	);
};
