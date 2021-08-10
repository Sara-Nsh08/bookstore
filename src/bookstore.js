import React from 'react';
import "./index.css";
function Bookstore() {
    return (
        <section className="booklist">
            <Book />



        </section>
    )
}
const Book = () => {
    return (
        <article>
            <Title />
            <Img />
            <Author />
        </article>
    )

}
const Img = () => <img src="https://images-eu.ssl-images-amazon.com/images/I/71aFt4%2BOTOL._AC_UL200_SR200,200_.jpg"
    alt=""></img>
const Title = () => <h1 style={{ color: 'yellow', fontSize: '0.95rem' }}>The Alchemist</h1>
const Author = () => <h3 style={{ color: 'blue', fontSize: '0.75rem', marginTop: '0.25rem' }}>Paulo Choleo</h3>


export default Bookstore