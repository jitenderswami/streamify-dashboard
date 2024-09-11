export type UserType = {
    phoneNumber?: string;
    name?: string;
    userId?: string;
}

type UserState = {
    user: UserType | null;
};

type UserActions = {
    setPhoneNumber: (phoneNumber: string) => void;
    setUserDetails: (userDetails: Partial<UserType>) => void;
};

export type UserStore = UserState & UserActions;

type UserSet = (
    partial:
        | UserStore
        | Partial<UserStore>
        | ((state: UserStore) => UserStore | Partial<UserStore>),
    replace?: boolean | undefined
) => void;

export const userStore = (set: UserSet) => ({
    user: null,
    setPhoneNumber: (phoneNumber: string) =>
        set((state) => {
            return {
                user: {
                    ...state.user,
                    phoneNumber,
                },
            };
        }),
    setUserDetails: (userDetails: Partial<UserType>) =>
        set((state) => {
            return {
                user: {
                    ...state.user,
                    userDetails,
                },
            };
        }),

});
