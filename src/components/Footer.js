import React from 'react'

function Footer() {
    let cYear = new Date().getFullYear();
    return (
		<div>
        <section class="subFooter container">
			<div class="grid3 a-i-center">
				<div class="followUs">
					<h3 class="subFooter__heading p-b-small uppercase">Follow Us</h3>
					<ul>
						<li class="subFooter__list">
							<i class="fab fa-youtube"></i>
							<a href="https://www.youtube.com/channel/UCFVxdmgojHfxOZ8j16UapiA" class="subFooter__link">Youtube</a>
						</li>
						<li class="subFooter__list">
							<i class="fab fa-facebook"></i>
							<a href="https://web.facebook.com/orisfinacomputerinstitute" target="_blank" rel="noopener noreferrer" class="subFooter__link">Facebook</a>
						</li>
						<li class="subFooter__list">
							<i class="fab fa-twitter"></i>
							<a href="https://twitter.com/orisfinacomputerinstitute" class="subFooter__link">Twitter</a>
						</li>
						<li class="subFooter__list">
							<i class="fab fa-instagram"></i>
							<a href="https://www.instagram.com/joshuaoyewole11/" class="subFooter__link">Instagram</a>
						</li>
					</ul>
				</div>

				<div class="contactUs">
					<h3 class="subFooter__heading p-b-small uppercase m-t-medium">Contact Us</h3>
					<ul>
						<li class="subFooter__list">
							<i class="fas fa-map-marker-alt"></i>
							<span class="subFooter__link">  Back of Mechanic site, Auchi, Edo State Nigeria.</span>
						</li>
						<li class="subFooter__list">
							<i class="fas fa-mobile-alt"></i>
							<span class="subFooter__link"> +2347032054367, +2347036994665</span>
						</li>
						<li class="subFooter__list">
							<i class="far fa-envelope"></i>
							<span class="subFooter__link">info@oci.com.ng</span>
						</li>
					</ul>
				</div>
				<div class="followUs">
					<h3 class="subFooter__heading p-b-small uppercase">Follow Us</h3>
					<ul>
						<li class="subFooter__list">
							<i class="fab fa-youtube"></i>
							<a href="https://www.youtube.com/channel/UCFVxdmgojHfxOZ8j16UapiA" class="subFooter__link">Youtube</a>
						</li>
						<li class="subFooter__list">
							<i class="fab fa-facebook"></i>
							<a href="https://web.facebook.com/orisfinacomputerinstitute" target="_blank" rel="noopener noreferrer" class="subFooter__link">Facebook</a>
						</li>
						<li class="subFooter__list">
							<i class="fab fa-twitter"></i>
							<a href="https://twitter.com/orisfinacomputerinstitute" class="subFooter__link">Twitter</a>
						</li>
						<li class="subFooter__list">
							<i class="fab fa-instagram"></i>
							<a href="https://www.instagram.com/joshuaoyewole11/" class="subFooter__link">Instagram</a>
						</li>
					</ul>
				</div>
			</div>
		</section>
			<p className='pt-m footer'>
                 Copyright &copy; 
                 <span id='copyrightYear'> {cYear}</span>. 
                 Orisfina Bootcamp. All rights Reserved
            </p>
		</div>
    )
}

export default Footer
