import React from 'react';
import Image from 'next/image';
import '@/app/styles/Card.css';

interface propsType {
  title: string;
  descr: string;
  img: string;
  tags: string[];
}

const Card: React.FC<propsType> = ({ title, descr, img, tags }) => {
  return (
    <div className="card-container" data-aos="fade-down">
      <div>
        <Image
          className="card-image"
          src={img}
          width={350}
          height={350}
          alt={title}
          data-aos="fade-down"
        />
      </div>
      <div className="card-content" data-aos="fade-down">
        <div className="card-title">{title}</div>
        <div className="card-description">{descr}</div>
        <div className="card-tags">
          {tags.map((el) => (
            <span className="tag" key={el}>
              {el}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
