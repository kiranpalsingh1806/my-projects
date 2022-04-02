import React from 'react';
import './ProjectList.css';

const ProjectList = () => {
    return (
        <>
            <h1 className='main-heading'>My Projects</h1>
            <main>
                <section className="leading">
                </section>
                <h1 className='project-types'> Web Development Projects</h1>
                <section className="cards">
                    <a href='https://flamboyant-wing-4bc731.netlify.app/' target="_blank">
                        <article>
                            <img className="article-img" src="https://images.pexels.com/photos/1790556/pexels-photo-1790556.jpeg" alt=" " />
                            <h1 className="article-title">
                                Movie Explorer App
                            </h1>
                        </article>
                    </a>
                    <a href='' target="_blank">
                        <article>
                            <img className="article-img" src="https://images.pexels.com/photos/248533/pexels-photo-248533.jpeg" alt=" " />
                            <h1 className="article-title">
                                Instagram Clone
                            </h1>
                        </article>
                    </a>
                    <a href='' target="_blank">
                        <article>
                            <img className="article-img" src="https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg" alt=" " />
                            <h1 className="article-title">
                                Blog Website
                            </h1>
                        </article>
                    </a>
                    <a href='' target="_blank">
                        <article>
                            <img className="article-img" src="https://www.imore.com/sites/imore.com/files/styles/xlarge/public/field/image/2018/07/new-apple-maps-comp.jpg" alt=" " />
                            <h1 className="article-title">
                                Map Route Finder
                            </h1>
                        </article>
                    </a>
                </section>

                <h1 className='project-types'>PHP and Laravel Projects</h1>
                <section className="cards">
                    <a href='https://github.com/kiranpalsingh1806/INT220-Server-Side-Scripting/tree/master/7-Others/Todo-List' target="_blank">
                        <article>
                            <img className="article-img" src="https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps.png" alt=" " />
                            <h1 className="article-title">
                                Todo List
                            </h1>
                        </article>
                    </a>

                </section>
                <h1 className='project-types'>MySQL</h1>
                <section className="cards">
                    <a href='' target="_blank">
                        <article>
                            <img className="article-img" src="https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg" alt=" " />
                            <h1 className="article-title">
                                Employee Watcher
                            </h1>
                        </article>
                    </a>

                </section>
                <h1 className='project-types'>APIs</h1>
                <section className="cards">
                    <a href='https://the-actor-api.herokuapp.com/actor' target="_blank">
                        <article>
                            <img className="article-img" src="https://images.squarespace-cdn.com/content/v1/5ba435b8e666690c8f22d323/1582842361066-UDU5303DVFTUJAXT698N/acting+auditions" alt=" " />
                            <h1 className="article-title">
                                Actor API
                            </h1>
                        </article>
                    </a>
                    <a href='https://the-climate-news-api.herokuapp.com/news' target="_blank">
                        <article>
                            <img className="article-img" src="https://images.pexels.com/photos/60013/desert-drought-dehydrated-clay-soil-60013.jpeg" alt=" " />
                            <h1 className="article-title">
                                Climate News API
                            </h1>
                        </article>
                    </a>
                </section>
                <h1 className='project-types'>Scrapers</h1>
                <section className="cards">
                    <a href='https://github.com/kiranpalsingh1806/web-scraper' target="_blank">
                        <article>
                            <img className="article-img" src="https://images.pexels.com/photos/3944454/pexels-photo-3944454.jpeg" alt=" " />
                            <h1 className="article-title">
                                News Scraper
                            </h1>
                        </article>
                    </a>
                </section>
                <h1 className='project-types'>Ongoing Projects</h1>
                <section className="cards">
                    <a href='' target="_blank">
                        <article>
                            <img className="article-img" src="https://www.seniorlifestyle.com/wp-content/uploads/2013/09/iStock_000005385085Medium.jpg" alt=" " />
                            <h1 className="article-title">
                                Sudoku Solver
                            </h1>
                        </article>
                    </a>
                </section>
                <h1 className='project-types'>Project Ideas</h1>
                <section className="cards">
                    <a href='' target="_blank">
                        <article>
                            <img className="article-img" src="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg" alt=" " />
                            <h1 className="article-title">
                                Development Dairy
                            </h1>
                        </article>
                    </a>
                    <a href='' target="_blank">
                        <article>
                            <img className="article-img" src="https://gamipress.com/wp-content/uploads/2018/12/leaderboards.svg" alt=" " />
                            <h1 className="article-title">
                                Leaderboard App
                            </h1>
                        </article>
                    </a>
                    <a href='' target="_blank">
                        <article>
                            <img className="article-img" src="https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg" alt=" " />
                            <h1 className="article-title">
                                The Fact Planet
                            </h1>
                        </article>
                    </a>
                </section>
                <h1 className='project-types'>Mini Educational Projects</h1>
                <section className="cards">
                    <a href='' target="_blank">
                        <article>
                            <img className="article-img" src="https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg" alt=" " />
                            <h1 className="article-title">
                                Weather App
                            </h1>
                        </article>
                    </a>
                </section>
            </main>
        </>
    );
}

export default ProjectList;
