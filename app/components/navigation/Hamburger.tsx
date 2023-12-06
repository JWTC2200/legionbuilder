import { Close, Menu } from "@components/Icons"
import { useNavState } from "./state";

export default function Hamburger() {
    const { visible, toggle } = useNavState();

    return (
        <button type="button" className="relative z-50 w-6 h-6 text-2xl hover:text-primary-700 active:text-primary-700 lg:hidden" onClick={toggle}>
            {visible ? <Close className="w-full h-full" /> : <Menu className="w-full h-full" />}
        </button>
    );
};
