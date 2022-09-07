import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo-desktop.png";
import mobileLogo from "../../assets/logo-mobile.png";
import { logOut } from "../../store/slices/userSlice";
import StyledAdmin from "../styleComponents/Admin";
import Flex from "../styleComponents/Flex";
import StyledHeaderContainer from "../styleComponents/HeaderContainer";
import Logo from "../styleComponents/Logo";
import MobileLogo from "../styleComponents/MobileLogo";
import Text from "../styleComponents/Text";

// Стили для отдельной кнопки выхода
const Button = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

function Header() {
    const isLogged = useSelector((state) => state.user.isLogged);
    const username = useSelector((state) => state.user.login);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const out = () => {
        // При нажатии на кнопку (иконку выхода), данные редакса возвращаются к изначальным
        dispatch(
            logOut({
                login: "",
                password: "",
                isLogged: false,
            })
        );
        // переход на страницу Логин
        navigate("/testProject/");
    };

    return (
        <header>
            <StyledHeaderContainer>
                <Logo>
                    <Link to={isLogged ? "/testProject/home" : "/testProject/"}>
                        <img src={logo} alt="" />
                    </Link>
                </Logo>
                <MobileLogo>
                    <Link to={isLogged ? "/testProject/home" : "/testProject/"}>
                        <img src={mobileLogo} alt="" />
                    </Link>
                </MobileLogo>
                {isLogged && (
                    <Flex content={"space-between"} alignItems={"center"}>
                        <StyledAdmin>
                            <Text
                                fontSize={"24"}
                                lineHeight={"29"}
                                marginRight={"34"}
                            >
                                {username}
                            </Text>
                        </StyledAdmin>
                        <Button onClick={out}>
                            <svg width="63" height="56" viewBox="0 0 63 56">
                                <path
                                    d="M50.8073 43.9712C50.5713 43.9712 50.3506 44.1864 50.3472 44.1904L46.9358 47.0042C46.9063 47.0271 46.2128 47.5768 46.2128 48.5896C46.2128 48.8713 46.2128 49.6306 46.2128 49.995H4.94528V6.02385H46.2128C46.2128 6.02385 46.2128 7.01531 46.2128 7.37913C46.2128 8.19932 46.8915 8.78079 46.9212 8.80568L50.6154 11.8531C50.6209 11.8574 50.751 11.9578 50.9009 11.9578C51.0962 11.9578 51.3286 11.8034 51.3286 11.0685V4.62842C51.3286 2.03312 49.6018 0 47.3976 0H4.10151C1.83999 0.000200782 0 2.07648 0 4.62842V50.9881C0 53.6055 1.87784 55.8167 4.10083 55.8173C4.101 55.8173 4.10117 55.8173 4.10151 55.8173H47.3976C47.3979 55.8173 47.3981 55.8173 47.3985 55.8173C49.5657 55.8169 51.3286 53.6507 51.3286 50.9883V45.1761C51.3286 44.1802 51.0452 43.9712 50.8073 43.9712ZM51.153 11.2305C51.1557 11.1795 51.1581 11.1273 51.1581 11.0681C51.1581 11.1213 51.156 11.1761 51.153 11.2305ZM51.1444 11.3343C51.1458 11.3211 51.1475 11.3092 51.1487 11.2954C51.1475 11.3086 51.1458 11.3213 51.1444 11.3343ZM51.1562 45.047C51.1574 45.0903 51.1581 45.1337 51.1581 45.1761C51.1581 45.1309 51.1572 45.0887 51.1562 45.047ZM51.1538 44.9795C51.1541 44.9873 51.1547 44.9954 51.155 45.0034C51.1547 44.995 51.1541 44.9875 51.1538 44.9795Z"
                                    fill="#27569C"
                                />
                                <path
                                    d="M61.4836 26.8979L47.4287 15.304C47.1878 15.1052 46.9641 15 46.7042 15C46.1402 15 45.6106 15.5044 45.6106 16.4683V23.3597H27.6091C26.7628 23.3597 26 24.1964 26 25.1929V31.1661C26 32.1626 26.7629 32.9973 27.6091 32.9973H45.6106V39.8923C45.6106 40.8563 46.1406 41.4301 46.7045 41.4301C46.7047 41.4301 46.6842 41.4301 46.6842 41.4301C46.9441 41.4301 47.1989 41.2904 47.4397 41.0914L61.4883 29.481C61.8657 29.1698 62.0796 28.6935 62.0797 28.1895C62.0799 27.6858 61.8611 27.2093 61.4836 26.8979Z"
                                    fill="#27569C"
                                />
                            </svg>
                        </Button>
                    </Flex>
                )}
            </StyledHeaderContainer>
        </header>
    );
}

export default Header;
