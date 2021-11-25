import React from 'react';
import ReactDom from 'react-dom';

const firstbook= {
  img: "https://m.media-amazon.com/images/I/61cAHKZJ2AL._AC_UY218_.jpg" ,
  title:"my bo",
  author:"rahul"
}

const secondbook= {
  img: "https://m.media-amazon.com/images/I/61cAHKZJ2AL._AC_UY218_.jpg" ,
  title:"my bookssss",
  author:"rahuls"
}

function Books(){
  return (
  <section className="Booklist">
    <Book
    img={firstbook.img}
    title={firstbook.title}
    author={firstbook.author}
    />
    <Book
    img={secondbook.img}
    title={secondbook.title}
    author={secondbook.author}
    />
  </section>
  );
}

//const Book = (props) =>{
  //return (
    //<article>
      //<img src ={props.img}/>
      //<h1>{props.title}</h1>
     // <h1>{props.author}</h1>
   // </article>
  //)
//}
// destructure props
const Book = (props) =>{
  const {img,title,author} = props
  return (
    <article>
      <img src ={img}/>
      <h1>{title}</h1>
      <h1>{author}</h1>
    </article>
  )
}


ReactDom.render(<Books />,document.getElementById('root'));