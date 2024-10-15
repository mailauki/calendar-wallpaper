"use client";

import { Listbox, ListboxItem, ListboxSection } from "@nextui-org/listbox";
import React from "react";
import { DateFormatter, today, getLocalTimeZone, startOfYear, endOfYear, CalendarDate } from '@internationalized/date';

export default function Months() {
	let date = today(getLocalTimeZone());
	const formatter = new DateFormatter("en-US", { month: "long" });
	const startDate = startOfYear(date);
	const endDate = endOfYear(date);

	function getDatesBetween({
		startDate, endDate
	}: {
		startDate: CalendarDate,
		endDate: CalendarDate,
	}) {
		let dates = new Array<CalendarDate>();
		let currentDate = startDate;
		let lastDate = endDate;

		while (currentDate <= lastDate) {
			dates.push(currentDate);
			currentDate = currentDate.add({ months: 1 });
	}
	
		return dates;
	}

	const months = getDatesBetween({ startDate, endDate });

	const [selectedKeys, setSelectedKeys] = React.useState(new Set([`${date.month}`]));

  // const selectedValue = React.useMemo(
  //   () => Array.from(selectedKeys).join(", "),
  //   [selectedKeys]
  // );

	return (
		<>
		<div className="w-full border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
			<Listbox
				aria-label="Single selection example"
				variant="flat"
				disallowEmptySelection
				selectionMode="single"
				selectedKeys={selectedKeys}
				onSelectionChange={setSelectedKeys}
			>
				<ListboxSection title="Select Month">
					{months.map((month) => 
						<ListboxItem key={month.month}>
							{formatter.format(month.toDate(getLocalTimeZone()))}
						</ListboxItem>
					)}
				</ListboxSection>
			</Listbox>
		</div>
		</>
	)
}