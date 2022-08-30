import { Card } from "./Card";

const dateIsToday = () => {
	return new Date().toLocaleString().split(",")[0];
};

const APPOINTMENTS = [
	{
		patient: "Luciana Dias",
		info: {
			date: dateIsToday(),
			typeOfAppointment: "remote",
			time: "14:00",
		},
	},
	{
		patient: "Larissa Santana",
		info: {
			date: dateIsToday(),
			typeOfAppointment: "local",
			time: "14:00",
		},
	},
];

export const Appointments = () => {
	return (
		<div className="flex flex-col gap-2">
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
				<strong className="text-gray-900 font-bold col-span-full">Hoje</strong>
				{APPOINTMENTS.filter(
					(appointment) => appointment.info.date === dateIsToday()
				).map((appointment) => (
					<Card typeOfAppointment={appointment.info.typeOfAppointment} />
				))}
			</div>
		</div>
	);
};
