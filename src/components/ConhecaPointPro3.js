import React from 'react';
import './ConhecaPointPro3.css';
import SvgIcons from './SvgIcons';
import EspecificacoesTecnicas from './EspecificacoesTecnicas';

const ConhecaPointPro3 = () => {
  return (
    <div className='container mt-20'>
      <div className='title-container flex justify-center items-center text-center mb-10 text-4xl font-bold'>
        <h2>Conheça a Point Pro 3</h2>
        
      </div>
    <section className="image-section">
      
      <div className="animated-prop" style={{ top: '-1.5%', left: '8.5%', width: '23%', height: '23%', opacity: 1, transform: 'none', willChange: 'auto' }}>
        <SvgIcons.Aproximacao />
      </div>
      <div className="animated-prop" style={{ top: '3%', left: '31%', width: '30%', height: '9.5%', opacity: 1, transform: 'none', willChange: 'auto' }}>
        <SvgIcons.Bobinas />
      </div>
      <div className="animated-prop" style={{ top: '22%', left: '68%', width: '18%', height: '21%', opacity: 1, transform: 'none', willChange: 'auto' }}>
        <SvgIcons.Magnetica />
      </div>
      <div className="animated-prop" style={{ right: '0%', width: '22%', bottom: '5%', height: '24%', opacity: 1, transform: 'none', willChange: 'auto' }}>
        <SvgIcons.Chip />
      </div>
      <div className="animated-prop" style={{ top: '49%', left: '13%', width: '21%', height: '23.5%', opacity: 1, transform: 'none', willChange: 'auto' }}>
        <SvgIcons.OnOff />
      </div>
      <div style={{ transform: 'scale(1)', willChange: 'auto' }}>
        <img 
          width="" 
          decoding="sync" 
          src="https://http2.mlstatic.com/storage/pog-cm-admin/calm-assets/mercado-pago-pro-3-especificacoes-desktop--5ba00079--rebrand-mp.webp" 
          fetchPriority="high" 
          alt="Detalhes da Point Smart 2"
        />
      </div>
    </section>
    <EspecificacoesTecnicas />
    </div>
  );
};

export default ConhecaPointPro3;
