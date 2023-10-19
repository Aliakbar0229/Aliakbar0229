import { AiOutlineSearch } from "react-icons/ai"
import { GeneralBtn } from "../Tools/tools";
function Navbar() {
    return (
        <div className="navbar">
            <ul className="top">
                <li>
                    <h1>Доставка</h1>
                </li>
                <li>
                    <h1>Оплата</h1>
                </li>
                <li>
                    <h1>Отзывы</h1>
                </li>
                <li>
                    <h1>Вопрос - ответ</h1>
                </li>
                <li>
                    <h1>Контакты</h1>
                </li>
            </ul>

            <div className="main">
                <div className="logo">
                    <img src="./img/logo.png" alt="logo" />
                    <h1>BEAUTY</h1>
                </div>
                <div className="search">
                    <span>< AiOutlineSearch /></span>
                    <input type="text" name="btn" />
                </div>
                <GeneralBtn btnBorderColor={"red"} text={"Подробнее"} />
            </div>
        </div>
    )
};

export default Navbar;
