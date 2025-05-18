import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export function useCount() {
	const { data } = useQuery({
		queryKey: ["count"],
		queryFn: async () => {
			const response = await fetch("http://localhost:3000/api/count");
			const data = await response.json();
			console.log(data);
			return data.value;
		},
	});

	return { count: data };
}
