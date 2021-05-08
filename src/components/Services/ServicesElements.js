import styled from 'styled-components';

export const ServicesContainer = styled.div`
    padding:80px 0px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background:#010606;

    @media screen and (max-width:768px){
        padding:60px 0px;
    }
    @media screen and (max-width:480px){
        padding:40px 0px;
    }
`;

export const ServicesWrapper = styled.div`
    max-width:1000px;
    margin:0px auto;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items:center;
    grid-gap:16px;
    padding:0px 50px;
    
    @media (max-width:1000px){
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width:768px){
        grid-template-columns: 1fr;
        padding:0px 20px;
    }
`;

export const ServicesCard = styled.div`
    padding:10px;
    background:#fff;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-radius:10px;
    min-height:340px;
    box-shadow:0px 1px 3px rgba(0,0,0,0.2);
    transition:all 0.2s ease-in-out;

    &:hover{
        transform:scale(1.02);
        transition:all 0.2s ease-in-out;
        cursor:pointer;
    }
`;

export const ServicesIcon = styled.img`
    height:160px;
    width:160px;
    margin-bottom:10px;
    animation: zoom 1s infinite  alternate;
    @keyframes zoom {
        0% { transform: scale(.9); }
        100% { transform: scale(1); }
    }
`;

export const ServiceH1 = styled.h1`
    font-size:2.5rem;
    color:#fff;
    margin-bottom:64px;

    @media (max-width:480px){
        font-size:2rem;
    }
`;

export const ServiceH2 = styled.h2`
    font-size:1rem;
    margin-bottom:10px;
`;

export const ServicesP = styled.p`
    font-size:1rem;
    text-align:center;
`;





