import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    let cYear = new Date().getFullYear();
    return (
		<>
        <section className="subFooter container">
			<div className="grid4 grid3-footer">
				<div className="followUs">
					<h6 className="subFooter__heading p-b-small uppercase">Join us on Social Media</h6>
					<ul>
						<li className="subFooter__list">
							<i className="fab fa-youtube"></i>
							<a href="https://www.youtube.com/channel/UCFVxdmgojHfxOZ8j16UapiA" className="subFooter__link">Youtube</a>
						</li>
						<li className="subFooter__list">
							<i className="fab fa-facebook"></i>
							<a href="https://web.facebook.com/orisfinacomputerinstitute" target="_blank" rel="noopener noreferrer" className="subFooter__link">Facebook</a>
						</li>
						<li className="subFooter__list">
							<i className="fab fa-twitter"></i>
							<a href="https://twitter.com/orisfinacomputerinstitute" className="subFooter__link">Twitter</a>
						</li>
						<li className="subFooter__list">
							<i className="fab fa-instagram"></i>
							<a href="https://www.instagram.com/joshuaoyewole11/" className="subFooter__link">Instagram</a>
						</li>
					</ul>
				</div>

				<div className="contactUs">
					<h6 className="subFooter__heading p-b-small uppercase m-t-medium">Contact Us</h6>
					<ul>
						<li className="subFooter__list flex a-i-center">
							<i className="fas fa-map-marker-alt"></i>
							<span className="subFooter__link">  Back of Mechanic site, Auchi, Edo State Nigeria.</span>
						</li>
						<li className="subFooter__list flex a-i-center">
							<i className="fas fa-mobile-alt"></i>
							<span className="subFooter__link"> +2347032054367, +2347036994665</span>
						</li>
						<li className="subFooter__list flex a-i-center">
							<i className="far fa-envelope"></i>
							<span className="subFooter__link">info@oci.com.ng</span>
						</li>
					</ul>
				</div>
				<div className="followUs">
					<h6 className="subFooter__heading p-b-small uppercase">Career path</h6>
					<ul>
						<li className="subFooter__list">
                            <Link to='/frontend-web-development-career' className='subFooter__link'>Frontend Web Development</Link>
						</li>
						<li className="subFooter__list">
                            <Link to='/backend-web-development-career' className='subFooter__link'>Backend Web Development</Link>
						</li>
						<li className="subFooter__list">
							<Link to='/graphic-design-career' className='subFooter__link'>Graphic Design</Link>
						</li>
						<li className="subFooter__list">
							<Link to='/application-package-learning-path' className='subFooter__link'>Application Package</Link>
						</li>
					</ul>
				</div>
				<div className='about'>
					<h6 className='subFooter__heading p-b-small uppercase'>About us</h6>
					<p className='about-us'>Orisfina Bootcamp is one of the fastest growing bootcamp in Auchi, Edo State Nigeria which provides you with all the mentorship from our Tutors that will take you from a complete begineer to an Advanced level. 
                    Since Orisfina Bootcamp started in 2019, we've consistently been regarded as one of the best coding bootcamps in Edo State by students and employers.</p>
				</div>
			</div>
		</section>
			<p className='pt-m footer'>
                 Copyright &copy; 
                 <span id='copyrightYear'> {cYear}</span>. 
                 Orisfina Bootcamp. All rights Reserved
            </p>
		</>
    )
}

export default Footer
