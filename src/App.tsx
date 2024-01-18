import React from 'react';
import './App.css';
import BlockItem from "./components/block-arrow/BlockItem";
import MainImg from './components/images/mainImg.webp'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import SvoiLoogo from './components/images/logo_2.png'
class App extends React.Component {
    render() {
        return (
            <div className="main">
            <div className={'Image'}>
            <img className={'MainImage'} src={MainImg} alt={''}/> </div>
                <div className={"Name"}>
                    <h3 className={'NamePerson'}>Алина Гугасян</h3>
                    <p>Руководитель партнерского отдела   </p>
                    <p>АН «Свои на юге»</p>
                    <p> г. Краснодар</p>
                </div>
                <BlockItem/>
                <div className={'ContainerBlock'}>
                    {/*<div className={'WhatsappWrapper'}>*/}
                <div className={'BlockContact'}>
                    <a rel={"noreferrer"} target={"_blank"} href={'https://wa.me/79284082605'} className={"WhatsApp"}>
                        <WhatsAppIcon className="iconWhatsApp" />
                        <div>WhatsApp</div>
                    </a>
                </div>
                 {/*   <div className={'BlockContact'}>
                        <a rel={"noreferrer"} target={"_blank"} href={'https://wa.me/79180892823'} className={"WhatsApp"}>
                            <WhatsAppIcon
                                className="iconWhatsApp" />
                            <div>Личный</div>
                        </a>
                    </div>
                    </div>*/}

                    <div className={'BlockContact'}>
                    <a rel={"noreferrer"} href={'https://www.instagram.com/svoi.live/'} target={"_blank"} className={"Instagram"}>
                        <InstagramIcon className={'iconInst'}/>
                        Instagram</a>
                </div>
                    <div className={'BlockContact'}>
                        <a rel={"noreferrer"}  href={'https://t.me/+4YItH4K3uuk5NTk6'} target={"_blank"} className={"Telegram"}>
                            <TelegramIcon className={'iconTg'}/>
                            Telegram</a>
                    </div>
                {/*    <div className={'BlockContact'}>
                    <a rel={"noreferrer"} href={'https://vk.com/svoi.live'} className={"Link"} target={"_blank"}> <img src={VkLogo} alt={''} className={'vkLogo'}/> </a>
                </div>*/}
                    <div className={'BlockContact'}>
                        <a rel={"noreferrer"} href={'https://svoi.live'} className={"Link"} target={"_blank"}> <img className={'SvoiLogo'} alt={''} src={SvoiLoogo} />
                      </a>
                    </div>

                </div>

            </div>
        );
    }
}

export default App;