import { useState, useEffect, Dispatch, SetStateAction } from "react";

type UseLocalPersistStateReturnType<T> = [T, Dispatch<SetStateAction<T>>];

const useLocalPersistState = <T>(
	defaultValue: T,
	key: string
): UseLocalPersistStateReturnType<T> => {
	const isBrowser = typeof window !== "undefined";

	const [value, setValue] = useState<T>(() => {
		if (isBrowser) {
			const persistValue = window.localStorage.getItem(key);
			return persistValue !== null ? JSON.parse(persistValue) : defaultValue;
		}
		return defaultValue;
	});

	useEffect(() => {
		if (isBrowser) {
			window.localStorage.setItem(key, JSON.stringify(value));
		}
	}, [isBrowser, key, value]);

	return [value, setValue];
};

export default useLocalPersistState;
