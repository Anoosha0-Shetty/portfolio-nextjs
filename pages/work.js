"use client";
import React, { useEffect, useState } from 'react';
import RootLayout from '../src/app/layout'
import styles from '../src/app/page.module.css'

export default function Work() {
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
            <RootLayout>
                <div className={styles.workSection}>
                    <div>Personal projects I've worked on.</div>
                    <div>
                        <a href='https://epic-clarke-84c943.netlify.app/' target={'_blank'}> A simple project using gatsby</a>
                        <a href='https://epic-clarke-84c943.netlify.app/' target={'_blank'}> My portfolio with nextJS</a>
                        <a href='https://epic-clarke-84c943.netlify.app/' target={'_blank'}>Amazon App</a>
                        <a href='https://epic-clarke-84c943.netlify.app/' target={'_blank'}>Netflix</a>
                    </div>
                </div>
            </RootLayout>
        )
    }
}