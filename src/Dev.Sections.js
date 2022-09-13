import React from 'react';
import './styles/Dev-styles.css';

export const DevInfo = () => {
    return (
        <div class="body">
            <section class="content">
                <h1>How did I make this website</h1>
                <p>The answer to that is pretty simple. I used HTML and CSS to design the webpage you are viewing. There was
                    a lot of learning involved in this project. I will be going into detail on all of that in later sections
                    but, needless to say as I flexed this skill I found gaps in my knowledge. So what was the goal? Here is
                    what I see as the requirements I set for this project:</p>
                <ul>
                    <li>Create at least 3 webpages using only HTML & CSS</li>
                    <li>Utilize a unique feature of both languages</li>
                    <li>Create a responsive website</li>
                </ul>
                <p>So...That is not a lot of requirements right. I did put some restrictions on myself. See, with this
                    project I am really trying to understand what I am doing. From start to finish I am wanting to write all
                    of the code myself. I don't care if it is less than ideal, completely wrong, or not within a standard
                    design practice. I will be doing a follow up to this project where I do a deep dive and refine the
                    design. Because of this I did put restrictions on myself. I am well aware that I could have made this a
                    lot easier by using tools like Bootstrap or Tailwind. I didn't take the easy way out and made these
                    restrictions:</p>
                <ul>
                    <li>The webpage can only be created and styled using HTML & CSS that I wrote</li>
                    <li>Javascript can be used only for the use of interacting with the DOM for the applications part of
                        this project</li>
                    <li>The site must be completely self-contained and run offline
                        <ul>
                            <li>An exclusion is made for Fonts...Get off my back</li>
                        </ul>
                    </li>
                    <li>When asking Dr. Google a question I am only allowed to read documentation
                        <ul>
                            <li>The only exclusion I gave myself was when I would get truly stuck and allowed myself to read
                                Stackoverflow</li>
                            <li>I did not allow myself to directly rip code. I required myself to read anything I didn't
                                understand and rewrite it from scratch</li>
                        </ul>
                    </li>
                </ul>
                <p>That's the project. It's nothing fancy. I feel like a lot the projects I have going are too big scale. I
                    wanted to have a project I could start, give myself a date for completion, and know I could make that
                    date. This is a test of my ability to pickup and learn something. The timeframe is meant to be a
                    constraint on me to not obsess. I drafted this project with the understanding I would be coming back to
                    it. Many times. Each time I want to find optimizations to existing good code and rework bad code. This
                    is in an attempt to better understand the reflexes I want to build. I have had a lot of fun with this.
                    It isn't flashy but it's mine. I spent the time to make it and I am glad I did. Now, I will have two
                    more sections that will detail the specifics of how I designed the pages and what I think can be
                    improved. Enjoy.</p>
                <h2>Home Page:</h2>
                <p>This took me a long time to design. I didn’t draft the content I wanted in any particular section of the
                    Home page so I
                    learned a lesson in having assets ready to go before drafting the HTML for a page. Even if it is just
                    Lorem Ipsum text
                    filling a space it is better than nothing. I found that it greatly helps with styling once you get the
                    bones put into
                    place. I went in with a partial design in mind. I didn’t try to create a rough draft in paint or
                    anything. In future I
                    think I would like to do this to gather my thoughts on how to construct the page.</p>
                <h3>With all of that said, the design of the page I had in mind followed the below:</h3>
                <ul>
                    <li>I wanted to have a header that filled the width of the screen and followed the page as it scrolled
                        <ul>
                            <li>Within this I wanted to have a logo and navigation options
                                <ul>
                                    <li>This expanded to adding the social logos in the header as well</li>
                                    <li>This was because I didn’t know how to space things the way I wanted with no content
                                        in a spot</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>I wanted to have 3 unique sections
                        <ul>
                            <li>The first section would be a background image that filled the initial loading screen</li>
                            <li>The second section would be a quick textual description on the project</li>
                            <li>The third section would be a card system to link to the various apps and version of the site
                                I have developed</li>
                        </ul>
                    </li>
                    <li>The last section was the footer
                        <ul>
                            <li>Honestly, not much to talk about here</li>
                            <li>Ripped code from the header and adjusted it for the footer</li>
                        </ul>
                    </li>
                </ul>
                <p>When designing this page I started styling it entirely with Flexbox. I played around with different
                    design systems on
                    other pages. The visuals I have in my head but the execution of code seems to be my issue. I feel like
                    there are some
                    common practices in design that would be of benefit to learn. I intentionally didn’t read anything about
                    common design
                    practices when styling with CSS. This was to force myself to make it work. Regardless of if there was a
                    better or easier
                    way. I’ll keep it a buck with you; in future iterations of the site I will be using Tailwind. Why
                    Tailwind? Well, I just
                    want something lightweight and simple. I am not looking to have complex UI options. Tailwind seems to be
                    the best option
                    here.</p>
                <p>The cover image was a pain. I forgot a bunch of the CSS tools I needed to accomplish the same task and
                    ended
                    up doing this
                    version in a way that I regret. Instead of using the background-image: url(); option in my
                    CSS styling I went with an <img src="" /> tag. This
                    meant that I had to do more work than necessary to get it to position correctly. I will be looking at
                    redesigning that section
                    of the page at some point
                    when I do a
                    refactor of the basic site. The reason that I am not doing this now is I will need to revamp the whole
                    page to accomodate the change to the overlay image. This is because the entire Homepage was built uppon
                    that image. I am still happy with the
                    visual of it. I
                    took some advice from my fiancé on the styling between the header and image overlay. I spent some time
                    making it where
                    the colored background for the header was hidden behind the image and appears naturally when scrolling
                    past it. This was
                    a pretty easy implementation but the Z-indexing I did didn’t translate well to other pages. This meant
                    that if I wanted
                    to use the header CSS settings in a global CSS file I would have issues with the Z-Indexing lining up
                    correctly on
                    another page that didn’t have the same design layout.</p>
                <p>The explanation section was easy. Nothing to talk about here. Because I used flexbox I had to do a little
                    more work to
                    get everything to stay within the bounds of their containers. I eventually got there. The part of the
                    design that I hate
                    is the responsive sizing. When the window get’s to small on the width I wasn’t able to work out the best
                    way to get the
                    containers to go from being side by side to top on bottom. I know I can get it to work like this but,
                    within the time
                    constraints of the project I opted to not pour a lot of energy into it and moved on.</p>
                <p>I created the app and site cards from scratch and learned a lot of about positioning and how best to lay
                    things out
                    within a box. I am confident that there is a better way to do this. I also got to play around with some
                    applications for
                    creating the assets I used within the cards. They aren’t anything special but, I enjoyed the
                    process to an
                    extent. I wouldn’t want to do asset creation full time. It became tedious after a point and I am glad I
                    get to reuse a
                    lot of it across my other iterations.</p>
                <h2>About Me</h2>
                <p>This page was pretty easy to make. I wanted this to be a single page with a very simple layout. Two boxes
                    side by side
                    with the left being a series of images and the right being a short description of credentials. I wanted
                    to try a
                    different layout style using the Grid system. I will be honest in that I can’t say I have a preference
                    yet. I am still
                    learning the best ways to use each so I feel there is a healthy balance between the two. I am trying to
                    do things where
                    I am creating the least amount of complicated site generation as I can.</p>
                <p>One thing I learned on this page was that I liked the easier to position grid system for this purpose. It
                    was very quick
                    to get things in their place so I can think through the content. I didn’t really do anything special on
                    this page. It
                    was more so I could have an example of a simple page.</p>

                <h2>Dev Info</h2>
                <p>This page is my baby. I reworked it from scratch compared to the first page. I found out that I have been
                    using the tag completely wrong. I was pissed when I figured this out.
                    Once I did the process of designing the UI went a ton faster than it was going. I made some design
                    changes in my color scheme which I think look better than the Maroon system I was working with
                    previously. This page is utilizing mostly Flexbox as the container positioner. I didn't see a reason to
                    go away from this method as I have been refining it over the interations of the site. I have a much
                    better understanding of the Flexbox system after uisng it more. There are some features I need to
                    impement but we will get there in the next section.
                </p>
                <h2>Synopsis & To-Do</h2>
                <p>After all of the work I have put in to this project we are at the end of phase 1. This was enlightening
                    to say the least. I feel that there are deceptive complexities in simple languages like HTML & CSS. I
                    didn't expect this to take as long as it did but, that is more due to the fact that I am not very
                    skilled with UI design in practice. Functionality is more of my area of expertise and I did force myself
                    to think about the user experience more than the functionality of the site. I believe that we are in a
                    good state with the site. Things I like is there are plenty of things I created that can be reused
                    acrossed pages. This means I have a good place to work from when I go to refactor the website later on.
                    I also very much like the general design concept I went with. It was simplistic and not an eye sore.
                    There are a number of things I do not like. I do not like my Homepages overlay. I dont particularly like
                    my header and footer but, here I am wanting to adjust the content more than anything. Functionally they
                    are perfect. I do not like the way I handled content within the Homepage but, I did attempt to fix this
                    on the About Me and Dev Info pages. </p>
                <p>So what is there left to do on this website. Well a lot. This is just Phase 1 of a 3 Phase project. I
                    will be moving into the To-Do list next when it comes to refactoring and designing the websites content
                    display. For now, here is what I have on that list:</p>
                <ul>
                    <li>Create a true Global Styles sheet for common items across pages</li>
                    <li>Refactor the Homepage to correct the Overlay and page content issues</li>
                    <li>Refactor the responsiveness of the website on non-standard sizings
                        <ul>
                            <li>This is primarily looking at Mobile sized web browsers</li>
                        </ul>
                    </li>
                    <li>Add global styling for the below tags
                        <ul>
                            <li>Paragraphs
                            </li>
                            <li>Lists
                            </li>
                            <li>Headings -
                                <ul>
                                    <li>Heading 1
                                    </li>
                                    <li>Heading 2
                                    </li>
                                    <li>Heading 3
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
        </div>
    )
}