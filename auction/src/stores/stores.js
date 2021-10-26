import { writable } from "svelte/store";

export const filteredItems = writable([]);

export const authToken = writable("");