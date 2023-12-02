import { RxCross1 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Hamburger({visible, toggle}) {
    return (
        <button type="button" className="relative z-50 text-2xl hover:text-lime-700 active:text-lime-700" onClick={toggle}>
            {visible ? <RxCross1/> : <GiHamburgerMenu/>}
        </button>
    );
};
