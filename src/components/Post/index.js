import React from 'react';

import './index.css';

function Post({body, title, date, author, highlights, image}) {
  return <article>
    <h1>{title}</h1>
    <p>{author}</p>
    <p>{date}</p>
    <p>{highlights}</p>
    <img src = {image.link} alt={image.alt}></img>
    <p>{body}</p>
  </article>
}

export default Post;
