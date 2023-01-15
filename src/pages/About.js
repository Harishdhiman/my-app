import '../css/style.css';
import React from 'react'

export default function About() {
  return (
    <>
     
<section className="top_heading_section">
    	<div className="col-md-12 col-sm-12-col-xs-12">
			<div className="section_heading text-center pb-0">
				<h2 className="mb-0">About <span>Us</span></h2>							
				<div className="sm_border"></div>
				<div className="breadcrumbs">
				    <ul className="breadcrumb">
                          <li><a href="/">Home</a></li>
                          <li>About</li>
                        </ul>
				</div>
			</div>	
		</div>
</section>
		
<section id="about" className="gray_bg section_padding pt-3">
    
				<div className="container">
					<div className="single_about">
						<div className="row">
							<div className="col-md-6 col-sm-6 col-xs-12">
								<div className="about_image wow fadeInLeft">
									<image src="https://belaltheme.com/Mp/Masud/Masud/images/about.jpg" alt="about-image"/>
								</div>
							</div>
							
							<div className="col-md-6 col-sm-6 col-xs-12">
								<div className="about_content_area wow fadeInRight" >
									<h4>Hello, I am Masud Iqbal</h4>					
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tellus est,
									finibus ut congue sed, faucibus ut dui. Sed congue nisl dolor, id dapibus leo
									elementum posuere. Ut aliquam metus quis laoreet elementum. In hac habitasse platea dictumst.
									In hac habitasse platea dictumst. Aliquam porta faucibus arcu, et consequat velit vestibulum in.
									Donec quis tellus ut urna volutpat posuere quis consectetur quam.</p>
									<div className="about_details">
										<div className="row">
											<div className="col-md-12">
												<div className="ct_about">
												   <span> Name </span> : Masud Iqbal											   
												</div>
											</div>
											
											<div className="col-md-12">
												<div className="ct_about">
												   <span> Age </span>
												   : 30
												</div>
											</div>
											
											<div className="col-md-12">
												<div className="ct_about">
												   <span> Address </span>
												   : Karachi, Pakistan
												</div>
											</div>
											
											<div className="col-md-12">
												<div className="ct_about">
												   <span> Phone Number </span>
												   : +00 820-585-1321
												</div>
											</div>
											
											<div className="col-md-12">
												<div className="ct_about">
												   <span> Email </span>
												   : Example@gmail.com
												</div>
											</div>
										</div>
									</div>
									<a href="/" className="btn btn-default main_btn">Download Cv</a>
								</div>
							</div>
						</div>
					</div>
				</div>
</section>
    </>
  )
}
