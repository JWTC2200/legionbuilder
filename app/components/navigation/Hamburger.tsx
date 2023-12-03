import { Close, Menu } from "@components/Icons"
import { useNavState } from "./state";

export default function Hamburger() {
    const { visible, toggle } = useNavState();

    return (
        <button type="button" className="relative z-50 text-2xl hover:text-lime-700 active:text-lime-700 lg:hidden" onClick={toggle}>
            {visible ? <Close/> : <Menu/>}
        </button>
    );
};
