import React from 'react';
import "./index.css";

const book1 = {
    title: "The Alchemist",
    author: "Paulo Choleo",
    img: "https://images-eu.ssl-images-amazon.com/images/I/71aFt4%2BOTOL._AC_UL200_SR200,200_.jpg"
}
const book2 = {
    title: "Think Like A Monk",
    author: "Jay Shetty",
    img: "https://images-eu.ssl-images-amazon.com/images/I/81s6DUyQCZL._AC_UL200_SR200,200_.jpg"
}
const book3 = {
    title: "One Arranged Murder",
    author: "Chetan Bhagat",
    img: "https://images-eu.ssl-images-amazon.com/images/I/61r-WomIz0L._AC_UL200_SR200,200_.jpg"
}

function Bookstore() {
    return (
        <section className="booklist">
            <Book img={book1.img} title={book1.title} author={book1.author} />
            <Book img={book2.img} title={book2.title} author={book2.author} />
            <Book img={book3.img} title={book3.title} author={book3.author} />

        </section>
    )
}
const Book = (props) => {
    return (<article className="book">
            <img src={props.img} />
            <h1>{props.title}</h1>
            <h3>{props.author}</h3>
            </article >
    );

}
export default Bookstore