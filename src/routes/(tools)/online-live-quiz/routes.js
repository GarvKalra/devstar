// src/routes.js
import { writable } from 'svelte/store';

export const route = writable('/');
export const params = writable({});

