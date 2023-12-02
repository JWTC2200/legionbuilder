import { RxCross1 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavState } from "./state";

export default function Hamburger() {
    const { visible, toggle } = useNavState();

    return (
        <button type="button" className="relative z-50 text-2xl hover:text-lime-700 active:text-lime-700" onClick={toggle}>
            {visible ? <RxCross1/> : <GiHamburgerMenu/>}
        </button>
    );
};
