import React from 'react';
import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-2.svg";
import Icon3 from "../../images/svg-3.svg";
import{
    ServicesContainer,
    ServiceH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServiceH2,
    ServicesP
} from './ServicesElements';


const Services = () => {

    const Servicelist = [
        {
          ServiceIconName: require("../../images/svg-1.svg").default,
          ServiceHeading: 'Reduce expenses',
          ServicePara: 'We Help Reduce your fees and increase your overall revenue.',
        },
        {
            ServiceIconName: require("../../images/svg-2.svg").default,
            ServiceHeading: 'Virtual offices',
            ServicePara: 'You can access our platform online anywhere in the world.',
        },
        {
            ServiceIconName: require("../../images/svg-3.svg").default,
            ServiceHeading: 'Premium Benefits',
            ServicePara: 'Unlock our special membership card that returns 5% cash back.',
        }
      ];

    return (
       
        <ServicesContainer id="services">
            <ServiceH1>Our Services</ServiceH1>
            <ServicesWrapper>
            {Servicelist.map(item => (
                <ServicesCard>
                    <ServicesIcon src={item.ServiceIconName}/>
                    <ServiceH2>{item.ServiceHeading}</ServiceH2>
                    <ServicesP>{item.ServicePara}</ServicesP>
                </ServicesCard>
                ))}
            </ServicesWrapper>
        </ServicesContainer> 
    )
}

export default Services
