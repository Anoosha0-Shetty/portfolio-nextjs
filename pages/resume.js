"use client";
import React, { useEffect, useState } from 'react';
import RootLayout from '../src/app/layout'
import styles from '../src/app/page.module.css'

export default function Resume() {
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
                <div className={styles.resume}>
                    <aside className={styles.meta}>
                        <a target="_blank" href="https://www.linkedin.com/in/anooshashetty/" aria-label="Connect with Olaolu on LinkedIn, opens a new tab." class="no-marker linkedin">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                            </svg>
                        </a>
                        <a href="https://olaolu.dev/Resume-Olaolu-Olawuyi.pdf" target="_blank" aria-label="Download a PDF copy of this resume, opens a new tab." class="no-marker">
                            <svg height="24" viewBox="8 8.003 48 47.997" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.283 12.19a19.624 19.624 0 015.434 0 2 2 0 00.567-3.959 23.75 23.75 0 00-6.566 0 2 2 0 00.565 3.959z"></path>
                                <path d="M42.91 10.619a2 2 0 00-1.82 3.561C47.819 17.621 52 24.449 52 32c0 11.028-8.972 20-20 20s-20-8.972-20-20c0-7.551 4.181-14.379 10.911-17.819a2 2 0 00-1.821-3.561C13.016 14.747 8 22.939 8 32c0 13.233 10.766 24 24 24 13.233 0 24-10.767 24-24 0-9.061-5.016-17.253-13.09-21.381z"></path>
                                <path d="M22.586 36.586a2 2 0 000 2.828l8 8c.39.391.902.586 1.414.586s1.023-.195 1.414-.586l8-8a2 2 0 10-2.828-2.828L34 41.172V18a2 2 0 00-4 0v23.172l-4.586-4.586a2 2 0 00-2.828 0z"></path>
                            </svg>
                            <span>Download</span>
                        </a>
                    </aside>
                    <main className={styles.main} tabindex="-1">
                        <div className={styles.resumeoutlines}>
                            <section><span>Bengaluru, Karnataka</span><a href="mailto:shettyanoosha92@gmail.com">
                                shettyanoosha92@gmail.com
                            </a>
                            </section>
                            <section>
                                <h3>Core Technologies:</h3>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>JQuery</li>
                                    <li>Bootstrap</li>
                                    <li>Sass</li>
                                    <li>LessCSS</li>
                                    <li>ESNext</li>
                                    <li>Gatsby</li>
                                    <li>GraphQL</li>
                                    <li>React</li>
                                    <li>Next.js</li>
                                    <li>BackboneJS</li>
                                    <li>Underscore Template</li>
                                    <li>Accessibility</li>
                                    <li>MaterialUI</li>
                                </ul>
                            </section>
                            <section>
                                <h3>Others:</h3>
                                <ul>
                                    <li>E2E Testing</li>
                                    <li>Performance Optimization</li>
                                    <li>Software Testing</li>
                                    <li>SE Optimization</li>
                                    <li>Accessibility Testing</li>
                                    <li>Responsive Web Design</li>
                                </ul>
                            </section>
                        </div>
                        <article className={styles.articles}>
                            <header className={styles.profilesummary}>
                                <h1 className={styles.name}>Anoosha Shetty</h1>
                                <h2>Frontend developer.</h2>
                                <p>
                                    To pursue a challenging career in a progressive organization that gives me scope to apply my
                                    knowledge, experience and skills and provides ample opportunity to grow along with the organization
                                    allowing scope for personal and professional growth.
                                </p>
                            </header>
                            <section>
                                <h3 className={styles.heading}>Experience</h3>
                                <p>
                                    I’ve worked on a handful of web projects over the past
                                    8 years, some of which were for the following organizations:
                                </p>
                                <ul className={styles.companies}>
                                    <li >
                                        <header className={styles.companyinfo}>
                                            <h4>Guidesly India Private Limited <span>Senior Frontend Developer</span></h4>
                                            <span className={styles.period}>March 2021 - Present</span>
                                        </header>
                                        <p>Working on outdoor recreational activity platform with technologies like React Js, Next JS, Gatsby, GraphQL, MaterialUI etc. I am also actively involved in SEO for the websites.</p>
                                        <ul></ul>
                                        <p ></p>
                                    </li>
                                    <li >
                                        <header className={styles.companyinfo}>
                                            <h4>Ascena Retail Group <span>Frontend Engineer</span></h4>
                                            <span className={styles.period}>Dec 2017 - March 2021</span>
                                        </header>
                                        <ul className={styles.points}>
                                            <li>
                                                Developing functionalities for ecommerce websites mostly from cart page to place order section, for
                                                various brands of the company with Backbone JS, Underscore Templets, JavaScript, jQuery, HTML and
                                                CSS
                                            </li>
                                            <li>
                                                Implemented Aurus Payment gateway in the checkout.
                                            </li>
                                            <li>
                                                Delivered an overall fast, yet accessible and silky smooth user experience in the web application.
                                            </li>
                                        </ul>
                                        <p ></p>
                                    </li>
                                    <li >
                                        <header className={styles.companyinfo}>
                                            <h4>Cognizant Technology Solutions <span>Programmer Analyst</span></h4>
                                            <span className={styles.period}>Nov 2017 - Dec 2014</span>
                                        </header>
                                        <ul className={styles.points}>
                                            <li>
                                                Developed responsive and accessible websites in AEM CQ5 tool using HTML, CSS,
                                                JavaScript and JQuery.
                                            </li>
                                            <li>
                                                Accessibility experience for all the products.
                                            </li>
                                            <li>
                                                Enforced healthy codebases, coding style and standards.
                                            </li>
                                            <li>
                                                Completed projects on time and delivered to clients accordingly.
                                            </li>
                                            <li>
                                                Communicated effectively with project managers and the team.
                                            </li>
                                        </ul>
                                        <p ></p>
                                    </li>
                                </ul>
                            </section>
                            <section className={styles.projects}>
                                <h3 class="heading">Projects</h3>
                                <p>
                                    Links to some of my work can be found on
                                    <a href="/work">
                                        olaolu.dev/work
                                    </a>
                                </p>
                            </section>
                        </article>
                    </main>
                </div>
            </RootLayout>
        )
    }
}