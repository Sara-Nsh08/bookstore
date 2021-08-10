import React from 'react';
import "./index.css";
function Bookstore() {
    return (
        <section className="booklist">
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
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
const Title = () => <h1>The Alchemist</h1>
const Author = () => <h3>Paulo Choleo</h3>


export default Bookstore