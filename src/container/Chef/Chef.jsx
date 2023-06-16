import React from 'react';
import { images } from '../../constants'
import { SubHeading } from '../../components'
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img_reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word"/>
      <h1 className='headtext__cormorant'>What we believe in</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="chefs quote" />
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex beatae optio architecto illum amet distinctio.</p>
        </div>
        <p className="p__opensans">Eveniet fugiat explicabo doloribus inventore est blanditiis hic officiis incidunt pariatur placeat reprehenderit veniam labore assumenda eaque commodi perferendis cupiditate porro, quas expedita qui earum ad? Amet eaque ea error labore veniam..</p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef and Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
