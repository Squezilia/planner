import type { User } from "firebase/auth";
import { defineStore } from "pinia";

export const useAuthenticationStore = defineStore("authentication", {
	state: () => ({
		user: undefined as User | undefined,
		isLoggedIn: false,
		accessToken: undefined as string | undefined,
		refreshToken: undefined as string | undefined,
	}),
});
