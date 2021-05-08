import styled from "styled-components";
import {Link} from "react-router-dom";

export const FooterContainer = styled.div`
    padding:50px 0px;
    background:#000;
`;
export const FooterTopWrap = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    width: 100%;
    padding: 0px 20px;
`;
export const FooterTopItems = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
export const FooterTopItem = styled.div`
    max-width: 25%;
    flex: 0 0 25%;
    @media(max-width:991px){
        max-width:50%;
        flex: 0 0 50%;
        text-align:center;
        margin-bottom:30px;
        &:last-of-type{
            margin-bottom:0px
        }
    }
    @media(max-width:575px){
        max-width:100%;
        flex: 0 0 100%;
    }
`;
export const FooterLinkTitle = styled.div`
    font-size: 18px;
    text-transform: uppercase;
    color: #fff;
    margin-bottom: 15px;
`;
export const FooterLinkWrapper = styled.div`
    
`;
export const FooterLink = styled(Link)`
    display: block;
    font-size: 16px;
    color: #fff;
    opacity: 0.7;
    text-decoration: none;
    margin: 10px 0px;
    &:hover{
        opacity: 1;
    }
`;
export const FooterBtmWrap = styled.div`
    max-width: 1100px;
    margin: 40px auto 0px;
    width: 100%;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media(max-width:991px){
        flex-direction: column;
    }
`;
export const FooterLogo = styled.div`
    font-size:24px;
    font-weight:bold;
    color:#fff;
    @media(max-width:991px){
       margin-bottom:15px;
    }
`;
export const FooterCopyrightText = styled.div`
    font-size: 14px;
    color: #fff;
    @media(max-width:991px){
        margin-bottom:15px;
     }
`;
export const FooterSocial = styled.div`
    
`;
export const SocialLink = styled.a`
    font-size: 20px;
    color: #fff;
    margin: 8px;
    &:hover{
        transition:all .2s ease-in-out;
        color:#01bf71;
    }
`;