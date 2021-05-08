import React from 'react';
import { FaDribbble, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { 
    FooterContainer,
    FooterTopWrap,
    FooterTopItems,
    FooterTopItem,
    FooterLinkTitle,
    FooterLinkWrapper,
    FooterLink,
    FooterBtmWrap,
    FooterLogo,
    FooterCopyrightText,
    FooterSocial,
    SocialLink 
} from './FooterElements';


const Footer = () => {
    return (
       <>
        <FooterContainer>
            <FooterTopWrap>
                <FooterTopItems>
                    <FooterTopItem>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLinkWrapper>
                            <FooterLink to="/signin">about link</FooterLink>
                            <FooterLink to="/signin">about link</FooterLink>
                            <FooterLink to="/signin">about link</FooterLink>
                            <FooterLink to="/signin">about link</FooterLink>
                        </FooterLinkWrapper>
                    </FooterTopItem>
                    <FooterTopItem>
                        <FooterLinkTitle>conatct Us</FooterLinkTitle>
                        <FooterLinkWrapper>
                            <FooterLink to="/signin">conatct link</FooterLink>
                            <FooterLink to="/signin">conatct link</FooterLink>
                            <FooterLink to="/signin">conatct link</FooterLink>
                            <FooterLink to="/signin">conatct link</FooterLink>
                        </FooterLinkWrapper>
                    </FooterTopItem>
                    <FooterTopItem>
                        <FooterLinkTitle>Special Links</FooterLinkTitle>
                        <FooterLinkWrapper>
                            <FooterLink to="/signin">special link</FooterLink>
                            <FooterLink to="/signin">special link</FooterLink>
                            <FooterLink to="/signin">special link</FooterLink>
                            <FooterLink to="/signin">special link</FooterLink>
                        </FooterLinkWrapper>
                    </FooterTopItem>
                    <FooterTopItem>
                        <FooterLinkTitle>Quick Links</FooterLinkTitle>
                        <FooterLinkWrapper>
                            <FooterLink to="/signin">quick link</FooterLink>
                            <FooterLink to="/signin">quick link</FooterLink>
                            <FooterLink to="/signin">quick link</FooterLink>
                            <FooterLink to="/signin">quick link</FooterLink>
                        </FooterLinkWrapper>
                    </FooterTopItem>
                </FooterTopItems>
            </FooterTopWrap>
                <FooterBtmWrap>
                    <FooterLogo>Dolla</FooterLogo>
                    <FooterCopyrightText>dolla {new Date().getFullYear()} - All Rights Reserved.</FooterCopyrightText>
                    <FooterSocial>
                        <SocialLink href="https://www.facebook.com/" target="_blank"><FaFacebookF/></SocialLink>
                        <SocialLink href="https://twitter.com/" target="_blank"><FaTwitter/></SocialLink>
                        <SocialLink href="https://www.instagram.com/" target="_blank"><FaInstagram/></SocialLink>
                        <SocialLink href="https://dribbble.com/" target="_blank"><FaDribbble/></SocialLink>
                    </FooterSocial>
                </FooterBtmWrap>
        </FooterContainer>
       </>
    )
}

export default Footer
