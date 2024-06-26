import React from 'react';
import type {Metadata} from "next";
import Link from "next/link";


export const metadata: Metadata = {
    title: "Blog | Next App",
    description: "Generated by create next app",
};

const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        next: {
            revalidate: 60
        }
    })
    return res.json()
}


const Blog = async () => {
    const posts = await getData()
    return (
        <>
            <h1>
                Blog page
            </h1>
            <ul>
                {posts.map((item: any) => (
                    <li key={item.id}>
                        <Link href={`/blog/${item.id}`}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};
export default Blog
