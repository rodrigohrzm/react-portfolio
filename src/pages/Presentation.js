import './Presentation.css';
import { NavLink, Route, Routes } from "react-router-dom";
import { useState, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDiagramProject, faPhotoFilm, faUsersViewfinder, faDatabase, faRobot, faBars } from '@fortawesome/free-solid-svg-icons'
import { Sidebar } from '../components/Sidebar.js'
import emailjs from '@emailjs/browser';


function Presentation() {

const [ShowForm, setShowForm] = useState (true);
const [ShowSidebar, setShowSidebar] = useState (false);
const handleToggle = () => {setShowSidebar(!ShowSidebar);};

const [ name , setName ] = useState ("");
const [ email , setEmail ] = useState ("");
const [ subject , setSubject ] = useState ("");
const [ message , setMessage ] = useState ("");

const form = useRef();
const handleSubmit = (e) => {
	e.preventDefault();
	let formData = [name, email, subject, message];
	emailjs.sendForm('service_tihk3c6', 'template_ax1fnkl', form.current, 'CXTj3yKjPUKyka9vT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
	setShowForm(false);
	return null
	}

return (
	<div className={ShowSidebar === false ? "" : "header-visible"}>
		<aside id="titleBar">
			<span className="title"><a href="#">Rodrigo Herranz</a></span>
			<a onClick={() => {handleToggle();}} className="toggle"><FontAwesomeIcon className="brgr" icon={faBars} /></a>
		</aside>
		<Sidebar handleToggle={handleToggle} />
			<div id="wrapper">
					<main id="main">
							<section id="about-section">
								<div className="videobanner" data-position="center">
									<video loop muted autoPlay playsInline>
										<source src={require('../assets/images/banner.mp4')} type="video/mp4" />
									</video>
								</div>
								<div className="container">
									<header className="major">
										<h2>Welcome to my portfolio</h2>
										<p>Front End development, design and marketing.</p>
									</header>
									<p>This page is a sample of my work, a showcase of my experience and skills. I've worked as a marketing professional for most of my career, and have decided to double down on my strengths and formalize the jump to front end software development.</p>
									<p>My goal is to become a well-rounded professional so I can use my skills to the benefit of both users and forward-thinking companies. And also because I really enjoy doing what I do.</p>
								</div>
							</section>

							<section id="portfolio-section">
								<div className="container">
									<h3>A quick demo</h3>
									<p>These are sample works I've prepared to showcase my abilities. My goal was to make them as simple, useful and interactive as possible.<br/>You probably shouldn't try the game, it can be very addicting...</p>
									<div className="features">
										<article>
											<a href="/puzzle" className="image"><img src={require('../assets/images/pic02.jpg')} alt="" /></a>
											<div className="inner">
												<a href="/puzzle"><h4>Puzzle game</h4></a>{/*https://www.chiark.greenend.org.uk/~sgtatham/puzzles/js/unruly.html*/}
												<p>A React remake of Simon Tatham's addicting game Unruly. The goal? Fill a grid with squares following two simple rules: <br/>No three consecutive squares, horizontally or vertically, can have the same color; and each row and column must contain the same number of squares of each color.</p>
											</div>
										</article>
										<article>
											<a href="/service" className="image"><img src={require('../assets/images/pic01.jpg')} alt="" /></a>
											<div className="inner">
												<a href="/service"><h4>Car repair and rental service</h4></a>
												<p>A business website with both customer and owner view.<br/>You can book an appointment for repairs and rent a replacement vehicle from inventory.<br/>If you log in, you see a dashboard with business information like upcoming bookings and the rental schedule.</p>
											</div>
										</article>
									</div>
								</div>
							</section>

							<section id="skills-section" style={{backgroundColor: "#f6f7f9"}}>
								<div className="container">
									<h3>My skills</h3>
									<p>I'm certified by Meta as a front end developer.<br/>For years I have worked with HTML and CSS, and in 2022 I picked up React. In addition to that, I have over 10 years of experience with Photoshop and a bit less with other audio/video creation tools, as well as marketing tech for running email/social campaigns and analytics.</p>
									<ul className="feature-icons">
										<li><span className="skills"><FontAwesomeIcon icon={faCode} /></span>React, JS, HTML & CSS</li>
										<li><span className="skills"><FontAwesomeIcon icon={faDiagramProject} /></span>UI/UX Design</li>
										<li><span className="skills"><FontAwesomeIcon icon={faPhotoFilm} /></span>Image & Video Editing</li>
										<li><span className="skills"><FontAwesomeIcon icon={faUsersViewfinder} /></span>Direct-To-Consumer Campaigns</li>
										<li><span className="skills"><FontAwesomeIcon icon={faDatabase} /></span>Customer Data Management</li>
										<li><span className="skills"><FontAwesomeIcon icon={faRobot} /></span>Process Automation</li>
									</ul>
								</div>
							</section>

							<section id="contact-section">
								<div className="container">
									<h3>Contact me</h3>
									<p>If you like what you see on this page and want to see my full CV or have any other inquiry, you can reach my inbox through here. I'll get back to you within 24 hours.</p>
									<div className={ShowForm === true ? "hiddenAlert" : "showAlert"}>
  										Message sent! I'll get back to you shortly.
									</div>
									<form ref={form} onSubmit={handleSubmit} className={ShowForm === true ? "" : "hiddenForm"}>
										<div className="row gtr-uniform">
											<div className="col-6 col-12-xsmall"><input required type="text" name="name" id="name" placeholder="name" minLength="3" value={name} onChange={(e => setName(e.target.value))}/></div>
											<div className="col-6 col-12-xsmall"><input required type="email" name="email" id="email" placeholder="email" value={email} onChange={(e => setEmail(e.target.value))}/></div>
											<div className="col-12"><input type="text" name="subject" id="subject" placeholder="subject" value={subject} onChange={(e => setSubject(e.target.value))}/></div>
											<div className="col-12"><textarea name="message" id="message" placeholder="your message" rows="6" value={message} onChange={(e => setMessage(e.target.value))}></textarea></div>
											<div className="col-12">
												<ul className="actions">
													<li><input type="submit" className="primary" value="Send Message" /></li>
												</ul>
											</div>
										</div>
									</form>
								</div>
							</section>
							<>{/* <section id="five">
								<div className="container">
									<h3>Elements</h3>

									<section>
										<h4>Text</h4>
										<p>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>.
										This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.
										This is <u>underlined</u> and this is code: {`
                                            <VideoPlayer
                                                ref="videoplayer"
                                                preload={this.props.preload}
                                                classes={this.props.classes}
                                                videoID={this.props.videoID}
                                                controls="controls"
                                            />
                                            `}. Finally, <a href="#">this is a link</a>.</p>
										<hr />
										<header>
											<h4>Heading with a Subtitle</h4>
											<p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
										</header>
										<p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
										<header>
											<h5>Heading with a Subtitle</h5>
											<p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
										</header>
										<p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
										<hr />
										<h2>Heading Level 2</h2>
										<h3>Heading Level 3</h3>
										<h4>Heading Level 4</h4>
										<h5>Heading Level 5</h5>
										<h6>Heading Level 6</h6>
										<hr />
										<h5>Blockquote</h5>
										<blockquote>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in faucibus lorem ipsum dolor sit amet nullam adipiscing eu felis.</blockquote>
										<h5>Preformatted</h5>
										<pre>{`i = 0;
                                            while (!deck.isInOrder()) {
                                                print 'Iteration ' + i;
                                                deck.shuffle();
                                                i++;
                                            }

                                            print 'It took ' + i + ' iterations to sort the deck.'`}</pre>
									</section>

									<section>
										<h4>Lists</h4>
										<div className="row">
											<div className="col-6 col-12-xsmall">
												<h5>Unordered</h5>
												<ul>
													<li>Dolor pulvinar etiam magna etiam.</li>
													<li>Sagittis adipiscing lorem eleifend.</li>
													<li>Felis enim feugiat dolore viverra.</li>
												</ul>
												<h5>Alternate</h5>
												<ul className="alt">
													<li>Dolor pulvinar etiam magna etiam.</li>
													<li>Sagittis adipiscing lorem eleifend.</li>
													<li>Felis enim feugiat dolore viverra.</li>
												</ul>
											</div>
											<div className="col-6 col-12-xsmall">
												<h5>Ordered</h5>
												<ol>
													<li>Dolor pulvinar etiam magna etiam.</li>
													<li>Etiam vel felis at lorem sed viverra.</li>
													<li>Felis enim feugiat dolore viverra.</li>
													<li>Dolor pulvinar etiam magna etiam.</li>
													<li>Etiam vel felis at lorem sed viverra.</li>
													<li>Felis enim feugiat dolore viverra.</li>
												</ol>
												<h5>Icons</h5>
												<ul className="icons">
													<li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
													<li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
													<li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
													<li><a href="#" className="icon brands fa-github"><span className="label">Github</span></a></li>
													<li><a href="#" className="icon brands fa-dribbble"><span className="label">Dribbble</span></a></li>
													<li><a href="#" className="icon brands fa-tumblr"><span className="label">Tumblr</span></a></li>
												</ul>
											</div>
										</div>
										<h5>Actions</h5>
										<ul className="actions">
											<li><a href="#" className="button primary">Default</a></li>
											<li><a href="#" className="button">Default</a></li>
											<li><a href="#" className="button alt">Default</a></li>
										</ul>
										<ul className="actions small">
											<li><a href="#" className="button primary small">Small</a></li>
											<li><a href="#" className="button small">Small</a></li>
											<li><a href="#" className="button alt small">Small</a></li>
										</ul>
										<div className="row">
											<div className="col-3 col-6-medium col-12-xsmall">
												<ul className="actions stacked">
													<li><a href="#" className="button primary">Default</a></li>
													<li><a href="#" className="button">Default</a></li>
													<li><a href="#" className="button alt">Default</a></li>
												</ul>
											</div>
											<div className="col-3 col-6 col-12-xsmall">
												<ul className="actions stacked">
													<li><a href="#" className="button primary small">Small</a></li>
													<li><a href="#" className="button small">Small</a></li>
													<li><a href="#" className="button alt small">Small</a></li>
												</ul>
											</div>
											<div className="col-3 col-6-medium col-12-xsmall">
												<ul className="actions stacked">
													<li><a href="#" className="button primary fit">Default</a></li>
													<li><a href="#" className="button fit">Default</a></li>
													<li><a href="#" className="button alt fit">Default</a></li>
												</ul>
											</div>
											<div className="col-3 col-6-medium col-12-xsmall">
												<ul className="actions stacked">
													<li><a href="#" className="button primary small fit">Small</a></li>
													<li><a href="#" className="button small fit">Small</a></li>
													<li><a href="#" className="button alt small fit">Small</a></li>
												</ul>
											</div>
										</div>
									</section>

									<section>
										<h4>Table</h4>
										<h5>Default</h5>
										<div className="table-wrapper">
											<table>
												<thead>
													<tr>
														<th>Name</th>
														<th>Description</th>
														<th>Price</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>Item One</td>
														<td>Ante turpis integer aliquet porttitor.</td>
														<td>29.99</td>
													</tr>
													<tr>
														<td>Item Two</td>
														<td>Vis ac commodo adipiscing arcu aliquet.</td>
														<td>19.99</td>
													</tr>
													<tr>
														<td>Item Three</td>
														<td> Morbi faucibus arcu accumsan lorem.</td>
														<td>29.99</td>
													</tr>
													<tr>
														<td>Item Four</td>
														<td>Vitae integer tempus condimentum.</td>
														<td>19.99</td>
													</tr>
													<tr>
														<td>Item Five</td>
														<td>Ante turpis integer aliquet porttitor.</td>
														<td>29.99</td>
													</tr>
												</tbody>
												<tfoot>
													<tr>
														<td colspan="2"></td>
														<td>100.00</td>
													</tr>
												</tfoot>
											</table>
										</div>

										<h5>Alternate</h5>
										<div className="table-wrapper">
											<table className="alt">
												<thead>
													<tr>
														<th>Name</th>
														<th>Description</th>
														<th>Price</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>Item One</td>
														<td>Ante turpis integer aliquet porttitor.</td>
														<td>29.99</td>
													</tr>
													<tr>
														<td>Item Two</td>
														<td>Vis ac commodo adipiscing arcu aliquet.</td>
														<td>19.99</td>
													</tr>
													<tr>
														<td>Item Three</td>
														<td> Morbi faucibus arcu accumsan lorem.</td>
														<td>29.99</td>
													</tr>
													<tr>
														<td>Item Four</td>
														<td>Vitae integer tempus condimentum.</td>
														<td>19.99</td>
													</tr>
													<tr>
														<td>Item Five</td>
														<td>Ante turpis integer aliquet porttitor.</td>
														<td>29.99</td>
													</tr>
												</tbody>
												<tfoot>
													<tr>
														<td colspan="2"></td>
														<td>100.00</td>
													</tr>
												</tfoot>
											</table>
										</div>
									</section>

									<section>
										<h4>Buttons</h4>
										<ul className="actions">
											<li><a href="#" className="button primary">Primary</a></li>
											<li><a href="#" className="button">Default</a></li>
											<li><a href="#" className="button alt">Alternate</a></li>
										</ul>
										<ul className="actions">
											<li><a href="#" className="button primary large">Large</a></li>
											<li><a href="#" className="button">Default</a></li>
											<li><a href="#" className="button alt small">Small</a></li>
										</ul>
										<ul className="actions fit">
											<li><a href="#" className="button primary fit">Fit</a></li>
											<li><a href="#" className="button fit">Fit</a></li>
											<li><a href="#" className="button alt fit">Fit</a></li>
										</ul>
										<ul className="actions fit small">
											<li><a href="#" className="button primary fit small">Fit + Small</a></li>
											<li><a href="#" className="button fit small">Fit + Small</a></li>
											<li><a href="#" className="button alt fit small">Fit + Small</a></li>
										</ul>
										<ul className="actions">
											<li><a href="#" className="button primary icon solid fa-download">Icon</a></li>
											<li><a href="#" className="button icon solid fa-download">Icon</a></li>
											<li><a href="#" className="button alt icon solid fa-check">Icon</a></li>
										</ul>
										<ul className="actions">
											<li><span className="button primary disabled">Primary</span></li>
											<li><span className="button disabled">Default</span></li>
											<li><span className="button alt disabled">Alternate</span></li>
										</ul>
									</section>

									<section>
										<h4>Form</h4>
										<form method="post" action="#">
											<div className="row gtr-uniform">
												<div className="col-6 col-12-xsmall">
													<input type="text" name="demo-name" id="demo-name" value="" placeholder="Name" />
												</div>
												<div className="col-6 col-12-xsmall">
													<input type="email" name="demo-email" id="demo-email" value="" placeholder="Email" />
												</div>
												<div className="col-12">
													<select name="demo-category" id="demo-category">
														<option value="">- Category -</option>
														<option value="1">Manufacturing</option>
														<option value="1">Shipping</option>
														<option value="1">Administration</option>
														<option value="1">Human Resources</option>
													</select>
												</div>
												<div className="col-4 col-12-medium">
													<input type="radio" id="demo-priority-low" name="demo-priority" checked />
													<label for="demo-priority-low">Low Priority</label>
												</div>
												<div className="col-4 col-12-medium">
													<input type="radio" id="demo-priority-normal" name="demo-priority" />
													<label for="demo-priority-normal">Normal Priority</label>
												</div>
												<div className="col-4 col-12-medium">
													<input type="radio" id="demo-priority-high" name="demo-priority" />
													<label for="demo-priority-high">High Priority</label>
												</div>
												<div className="col-6 col-12-medium">
													<input type="checkbox" id="demo-copy" name="demo-copy" />
													<label for="demo-copy">Email me a copy of this message</label>
												</div>
												<div className="col-6 col-12-medium">
													<input type="checkbox" id="demo-human" name="demo-human" checked />
													<label for="demo-human">I am a human and not a robot</label>
												</div>
												<div className="col-12">
													<textarea name="demo-message" id="demo-message" placeholder="Enter your message" rows="6"></textarea>
												</div>
												<div className="col-12">
													<ul className="actions">
														<li><input type="submit" value="Send Message" /></li>
														<li><input type="reset" value="Reset" className="alt" /></li>
													</ul>
												</div>
											</div>
										</form>
									</section>

									<section>
										<h4>Image</h4>
										<h5>Fit</h5>
										<span className="image fit"><img src="images/banner.jpg" alt="" /></span>
										<div className="box alt">
											<div className="row gtr-50 gtr-uniform">
												<div className="col-4"><span className="image fit"><img src="images/pic01.jpg" alt="" /></span></div>
												<div className="col-4"><span className="image fit"><img src="images/pic02.jpg" alt="" /></span></div>
												<div className="col-4"><span className="image fit"><img src="images/pic03.jpg" alt="" /></span></div>
												<div className="col-4"><span className="image fit"><img src="images/pic02.jpg" alt="" /></span></div>
												<div className="col-4"><span className="image fit"><img src="images/pic03.jpg" alt="" /></span></div>
												<div className="col-4"><span className="image fit"><img src="images/pic01.jpg" alt="" /></span></div>
												<div className="col-4"><span className="image fit"><img src="images/pic03.jpg" alt="" /></span></div>
												<div className="col-4"><span className="image fit"><img src="images/pic01.jpg" alt="" /></span></div>
												<div className="col-4"><span className="image fit"><img src="images/pic02.jpg" alt="" /></span></div>
											</div>
										</div>
										<h5>Left &amp; Right</h5>
										<p><span className="image left"><img src="images/avatar.jpg" alt="" /></span>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</p>
										<p><span className="image right"><img src="images/avatar.jpg" alt="" /></span>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</p>
									</section>

								</div>
							</section> */}</>
					</main>

					<section id="footer">
						<div className="container">
							<ul className="copyright">
								<li>Copyright: HRZM &copy; {(new Date().getFullYear())} All rights reserved.</li>{/*<li><a href="http://html5up.net">Design template by HTML5 UP</a></li>*/}
							</ul>
						</div>
					</section>

			</div>
	</div>
  );
}

export { Presentation };