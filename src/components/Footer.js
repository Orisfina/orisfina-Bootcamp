import React from 'react'

function Footer() {
    let cYear = new Date().getFullYear();
    return (
		<>
        <section className="subFooter container">
			<div className="grid4 grid3-footer">
				<div className="followUs">
					<h6 className="subFooter__heading p-b-small uppercase">Social Links</h6>
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
					<h6 className="subFooter__heading p-b-small uppercase">Follow Us</h6>
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
				<div className='about'>
					<h6 className='subFooter__heading p-b-small uppercase'>About us</h6>
					<p className='about-us'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti neque hic minima quia at dolor itaque, unde sequi, magni doloribus mollitia! Provident dolores perspiciatis non fugiat excepturi optio expedita autem quae. Beatae, neque? Id inventore, minus eligendi, at consectetur rerum sapiente eum cupiditate temporibus repellat quasi, omnis pariatur facere deserunt.</p>
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
