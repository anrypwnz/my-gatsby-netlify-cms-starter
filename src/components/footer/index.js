import React from 'react';
import { InstagramOutlined, FacebookOutlined } from '@ant-design/icons'

import s from './footer.module.css';

export default function FooterBlock() {
  return (
    <div className={s.footer}>
      <div className={s.footer__block}>
        <div className={s.top__block}>
          <span>Россия г. Москва</span>
          <span>Индекс 121100</span>
          <span>Кривоколенный пер. 5/4</span>
          <span>Телефон: 8-999-777-88-99</span>
          <span>Email: school@gmail.com</span>
        </div>
        <div className={s.top__block}>
          <a className={s.social__item} target="_blank" href="http://facebook.com">
            <InstagramOutlined className={s.icon}/>
            Instagram
          </a>
          <a className={s.social__item} target="_blank" href="https://instagram.com">
            <FacebookOutlined className={s.icon} />
            Facebook
          </a>
        </div>
      </div>
      <div className={s.footer__creators}>
        <span>©2020 developing by anrypwnz</span>
        <span>powered by React</span>
      </div>

    </div>
  );
}