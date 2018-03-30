import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ article }) => (<img src={article.urlToImage} alt="" />);
const Title = ({ article }) => (<h3 className="text-center">{article.title}</h3>);
const Description = ({ article }) => (<p className="text-center">{article.description}</p>);
const Link = ({ article }) =>
  (<div>
    <a href={article.url} target="_blank"> read more </a>
   </div>);

const Item = ({ article }) => (
  <article className="col-md-6">
    <div className="article-wrapper">
      <Title article={article} />
      <Image article={article} />
      <Description article={article} />
      <Link article={article} />
    </div>
  </article>
);


export { Image, Title, Description, Link, Item };
