"use client";
import React, { useEffect, useState } from 'react';
import styles from '../src/app/page.module.css'

export default function Footer() {
    const [initialRenderComplete, setInitialRenderComplete] = useState(false);

    // This useEffect will only run once, during the first render
    useEffect(() => {
        // Updating a state causes a re-render
        setInitialRenderComplete(true);
    }, []);

    // initialRenderComplete will be false on the first render and true on all following renders
    if (!initialRenderComplete) {
        // Returning null will prevent the component from rendering, so the content will simply be missing from
        // the server HTML and also wont render during the first client-side render.
        return null;
    } else {
        return (
            <div className={styles.footer}>
                <div className={styles.info}>
                    <p>SAY HELLO</p>
                    <a class="Link--primary" href="mailto:shettyanoosha92@gmail.com">shettyanoosha92@gmail.com</a>
                    <a rel="nofollow me" class="Link--primary" href="https://www.linkedin.com/in/anooshashetty/">in/anooshashetty</a>
                    <a rel="nofollow me" class="Link--primary" href="https://www.facebook.com/anoosha.shetty.33">anoosha.shetty.33</a>
                    <a rel="nofollow me" class="Link--primary" href="https://www.instagram.com/la__incognito/">la__incognito</a>
                </div>
                <div className={styles.work}>
                    <a href='/resume'>My Resume</a>
                    <a href='/work'>My Work</a>
                </div>
            </div>
        )
    }
}