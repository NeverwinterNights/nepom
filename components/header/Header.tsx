import React from 'react';
import Link from "next/link";
import s from "./header.module.css"

export const Header = () => {
    return (
        <header className={s.root}>
            <Link href={'/'}>Home</Link>
            <Link href={"/blog"}>Blog</Link>
            <Link href={"/about"}>About</Link>
        </header>
    );
};
