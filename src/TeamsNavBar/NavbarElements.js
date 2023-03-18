import styled from "styled-components";
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

export const Nav = styled.nav`
    background: rgba(246, 253, 255,0);
    position: fixed;
    top:0;
    width: 100%;
    height: 80px;
    display:flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    font-family: 'Poppins', sans-serif;
    padding: 0 40px;
    transition:all 0.1s ease-in;
    box-shadow: none;
    @media screen and (max-width: 1180px){
        padding: 0 20px;
    }
`
export const NavLinkAnchor = styled.a`
    color: #0B111B;
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 100%;
    cursor:pointer;
    opacity: 0.5;
    margin-right:auto;
    & img{
        padding: 0px !important;
        height: 30px;
        width: auto;
    }
    &.active{
       text-decoration: 1px solid underline;
    }
`

export const NavLink = styled(Link)`
    color: #0B111B;
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 60%;
    cursor:pointer;
    opacity: 0.5;
    margin-right:auto;
    & img{
        padding: 0px !important;
        height: 30px;
        width: auto;
    }
    &.active{
       text-decoration: 1px solid underline;
    }
`

export const Bars = styled(FaBars)`
    display:none;
    color: #010101;
    

    @media screen and (max-width: 1180px){
        display:block;
        font-size:23px;
        cursor:pointer;
    }
`
export const Times = styled(FaTimes)`
    display:none;
    color: #010101;
    

    @media screen and (max-width: 1180px){
        display:block;
        font-size:23px;
        cursor:pointer;
    }
`
export const NavMenu = styled.div`
    display:flex;
    align-items:center;
    

    
    @media screen and (max-width: 1180px)
    {
        display: none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items : center;
    margin-left:auto;
    justify-content : center;
    @media screen and (max-width: 1180px){
        display: none;
    }
`

export const NavBtnLink = styled.button`
    border-radius: 15px;
    background: #2B313A;
    padding: 12px 20px;
    height: fit-content;
    font-size:15px;
    color: #fff;
    border:none;
    outline:none;
    cursor:pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        
    }
`