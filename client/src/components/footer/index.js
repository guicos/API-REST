import React from 'react';
import { IndexFooter } from './style'

function Footer() {
  return (
    <IndexFooter>
        <div>
          <h2>e-commecer</h2>
          <p>A plataforma de compras online que você confia</p>
        </div>
        <nav>
            <a href="/">Home</a>
            <a href="/">Sobre</a>
            <a href="/">Novo Produto</a>
        </nav>
        <nav>
            <p>1122222-2222</p>
            <a href="/"><img src={'https://freepikpsd.com/wp-content/uploads/2019/10/facebook-cinza-png-Transparent-Images.png'} alt="facebook"/>  Facebook</a>
            <a href="/"><img src={'https://cdn.icon-icons.com/icons2/792/PNG/512/INSTAGRAM_icon-icons.com_65535.png'} alt="instagram"/> Instagram</a>
            <a href="/"><img src={'https://www.ibegesp.org.br/wp-content/plugins/nd-shortcodes/addons/customizer/shortcodes/social/img/linkedin.svg'} alt="linkedin"/> Linkedin</a>
        </nav>
    </IndexFooter>
  );
}

export default Footer;
