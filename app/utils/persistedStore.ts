import { persist } from "zustand/middleware";
import { create } from "zustand";
import { useEffect } from "react";

export default function createPersistedStore(createStore, persistOptions) {
    const usePersistedStore = create(persist(createStore, persistOptions));
    const useMounted = create(() => false);

    const initialState = createStore(
        () => {},
        () => createStore(() => {})
    );

    const useStore = (selector: (f: any) => any) => {
        const store = usePersistedStore(selector);
        const mounted = useMounted();

        useEffect(() => {
            if (!mounted) {
                useMounted.setState(true);
            }
        }, []);

        return mounted ? store : selector(initialState);
    };

    return useStore;
};
