import React from 'react';
import { ModalWrapper } from '../ModalWrapper';
import { Image } from '../Image';

export const CompanyModal = ({ logoBlack, title, desc, investors, links, images, onClose }) => {
  const parseLink = (link) => link.split('http')
    .join('').split('s://')
    .join('').split('://')
    .join('').split('/')[0];

  investors = investors.slice(0, 7);
  investors.push({ name: 'and other great investors' });

  const investorsLeftCol = investors.slice(0, Math.ceil(investors.length / 2));
  const investorsRightCol = investors.slice(Math.ceil(investors.length / 2));

  return (
    <ModalWrapper onClose={onClose} modalType="company">
      <div className="modal-company-wrapper">
        <div className="modal-company-description">
          <div className="modal-company-logo">
            <img src={logoBlack?.file.src} alt={logoBlack.alt} />
          </div>
          <h2>{title}</h2>
          <p>{desc?.text || ''}</p>
          <div className="modal-company-investors">
            <h3>Investors</h3>
            <ul>
              {investorsLeftCol && investorsLeftCol.map(({ name }, index) => (
                <li key={index}>{name}</li>
              ))}
            </ul>
            <ul>
              {investorsRightCol && investorsRightCol.map(({ name }, index) => (
                index === investorsRightCol.length - 1 ?
                  <li key={index}><i>{name}</i></li> :
                  <li key={index}>{name}</li>
              ))}
            </ul>
          </div>
          <div className="modal-company-links">
            {links && links.map(({ link }, index) => (
              <div key={index} className="modal-company-link">
                <a target="_blank" rel="noreferrer"
                   href={link.toString()}>{parseLink(link)}</a>
              </div>),
            )}
          </div>
          <div className="modal-company-gallery">
            {images && images.map((imageItem, index) => (
              <div key={index}>
                <div className="image-wrapper">
                  <Image className='img' image={imageItem} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};
