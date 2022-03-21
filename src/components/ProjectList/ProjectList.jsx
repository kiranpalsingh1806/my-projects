import React from 'react';
import './ProjectList.css';

const ProjectList = () => {
    return (
        <>
            <h1 className='main-heading'>My Projects</h1>
            <main>
                <section className="leading">
                </section>
                <h1 className='project-types'>React JS Projects</h1>
                <section className="cards">
                    <a href='https://flamboyant-wing-4bc731.netlify.app/' target="_blank">
                        <article>
                            <img className="article-img" src="https://images.pexels.com/photos/1790556/pexels-photo-1790556.jpeg" alt=" " />
                            <h1 className="article-title">
                                Movie Explorer App
                            </h1>
                        </article>
                    </a>
                    <article>
                        <img className="article-img" src="https://cdn.create.vista.com/api/media/medium/383670414/stock-photo-cheerful-young-man-chatting-smartphone" />
                        <h1 className="article-title">
                            Chatting Ground
                        </h1>
                    </article>
                    <article>
                        <img className="article-img" src="https://www.garyvaynerchuk.com/wp-content/uploads/150624-The_Current_state_of_blogging_1200x628-01.png" alt=" " />
                        <h1 className="article-title">
                            Blog Website
                        </h1>
                    </article>
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
                <h1 className='project-types'>APIs</h1>
                <section className="cards">
                    <a href='https://flamboyant-wing-4bc731.netlify.app/' target="_blank">
                        <article>
                            <img className="article-img" src="https://images.squarespace-cdn.com/content/v1/5ba435b8e666690c8f22d323/1582842361066-UDU5303DVFTUJAXT698N/acting+auditions" alt=" " />
                            <h1 className="article-title">
                                Actor API
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
            </main>
        </>
    );
}

export default ProjectList;
