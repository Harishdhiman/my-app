import '../css/style.css';
import React from 'react'

export default function Home() {
  return (
    <>
      <section id="home" className="gray_bg main_banner banner_bg">
				<div className="container">
					<div className="row">
						<div className="col-md-6 col-sm-12 col-xs-12">
							<div className="banner_content">
								<strong>Welcome!</strong>
								<h1 className="cd-headline clip">
									<span className="fw_600">I Am</span>
									<span className="cd-words-wrapper message">
										<div className="fw_300 ">Web Designer</div>
										<div className="fw_300 ">Web Developer</div>
										<div className="fw_300">Photographer</div>
									</span>
								</h1>
								<p>I'm a Web Developer with extensive experience for over 5 years. My expertise is to create and Websites design, graphic design and many more...</p>
								<ul className="banner_social_link">					
									<li><a href="/"><i className="fa fa-facebook"></i></a></li>
									<li><a href="/"><i className="fa fa-twitter"></i></a></li>
									<li><a href="/"><i className="fa fa-linkedin"></i></a></li>		
									<li><a href="/"><i className="fa fa-instagram"></i></a></li>
									<li><a href="/"><i className="fa fa-behance"></i></a></li>
								</ul>
							</div>
						</div>
						<div className="col-md-6 col-sm-12 col-xs-12">
							<div className="banner-images">
								
							   
							</div>
						</div>						
					</div>
				</div>
			</section>
						
<section id="about" className="gray_bg section_padding">
				<div className="container">
					<div className="single_about">
						<div className="row">
							<div className="col-md-6 col-sm-6 col-xs-12">
								<div className="about_image wow fadeInLeft" >
									<img src="https://belaltheme.com/Mp/Masud/Masud/images/banner.jpg" alt="about"/>
								</div>
							</div>
					
							<div className="col-md-6 col-sm-6 col-xs-12">
								<div className="about_content_area wow fadeInRight">
								    <div className="profile-items clearfix">
                                        <div className="profile-preword"><span>Hello</span></div>
                                    </div>
									<h4>I am Masud Iqbal</h4>					
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
									
									<a href="resume.php" className="btn btn-default main_btn">Download Cv</a>
								</div>
							</div>
						</div>
					</div>
				</div>
</section>

 
 
 <section id="service" className="gray_bg section_padding">
				<div className="container">
					<div className="col-md-12 col-sm-12-col-xs-12">
						<div className="section_heading text-center">
							<h2>My <span>Services</span></h2>							
							<div className="sm_border"></div>
						</div>	
					</div>
					
					<div className="row text-center">
						<div className="col-md-4 col-sm-6 col-xs-12">
							<div className="single-service wow fadeInDown" >
								<i className="fa fa-github"></i>
								<h4>Web Development</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis lectus tortorism.</p>
							</div>
						</div> 
						<div className="col-md-4 col-sm-6 col-xs-12">
							<div className="single-service wow fadeInDown" >
								<i className="fa fa-camera"></i>
								<h4>Photography</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis lectus tortorism.</p>
							</div>
						</div>		
						<div className="col-md-4 col-sm-6 col-xs-12">
							<div className="single-service wow fadeInDown">
								<i className="fa fa-codepen"></i>
								<h4>Web Design</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis lectus tortorism.</p>
							</div>
						</div>
						<div className="col-md-4 col-sm-6 col-xs-12">
							<div className="single-service wow fadeInUp">
								<i className="fa fa-apple"></i>
								<h4>App Developing</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis lectus tortorism.</p>
							</div>
						</div> 
						<div className="col-md-4 col-sm-6 col-xs-12">
							<div className="single-service wow fadeInUp" >
								<i className="fa fa-file-video-o"></i>
								<h4>Video Editing</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis lectus tortorism.</p>
							</div>
						</div> 
						<div className="col-md-4 col-sm-6 col-xs-12">
							<div className="single-service wow fadeInUp">
								<i className="fa fa-search-plus"></i>
								<h4>SEO Expart</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis lectus tortorism.</p>
							</div>
						</div> 
					</div>
				</div>
</section>



<section id="portfolio" className="gray_bg section_padding">
				<div className="container">	
					<div className="col-md-12 col-sm-12-col-xs-12">
						<div className="section_heading text-center">
							<h2>My <span>Portfolio</span></h2>						
							<div className="sm_border"></div>
						</div>	
					</div>
					
					<div className="row">
						<ul className="nav nav-tabs work_filter text-center" id="myTab" role="tablist">
                              <li className="nav-item">
                                <a className="nav-link active" id="all-tab" data-toggle="tab" href="#all" role="tab" aria-controls="all" aria-selected="true">All</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" id="design-tab" data-toggle="tab" href="#design" role="tab" aria-controls="design" aria-selected="false">Design</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" id="marketing-tab" data-toggle="tab" href="#marketing" role="tab" aria-controls="marketing" aria-selected="false">Marketing</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" id="photography-tab" data-toggle="tab" href="#photography" role="tab" aria-controls="photography" aria-selected="false">Photography</a>
                              </li>
                            
                            </ul>
                            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
        
        
                            <div className="work_content_area row">
            							<div className="col-md-4 col-sm-6 col-xs-12">
            								<div className="item-img">
            									<img src="https://belaltheme.com/Mp/Masud/Masud/images/portfolio/1.jpg" alt=""/>
            									<div className="item-img-overlay">
            										<div className="overlay-info full-width">
            											<h5>Creative Web Design</h5>
            											<p>Category</p>											
            											<a href="/" data-lightbox="images">
            												<span className="icon"><i className="ti-arrow-right"></i></span>
            											</a>
            										</div>
            									</div>
            								</div>
            							</div>
            							<div className="col-md-4 col-sm-6 col-xs-12 element-item design Photography">
            								<div className="item-img">
            									<img src="https://belaltheme.com/Mp/Masud/Masud/images/portfolio/2.jpg" alt=""/>
            									<div className="item-img-overlay">
            										<div className="overlay-info full-width">
            											<h5>Awesome Logo Design</h5>
            											<p>Category</p>											
            											<a href="/" data-lightbox="images">
            												<span className="icon"><i className="ti-arrow-right"></i></span>
            											</a>
            										</div>
            									</div>
            								</div>
            							</div>
            							<div className="col-md-4 col-sm-6 col-xs-12 element-item Photography marketing" >
            								<div className="item-img">
            									<img src="https://belaltheme.com/Mp/Masud/Masud/images/portfolio/3.jpg" alt=""/>
            									<div className="item-img-overlay">
            										<div className="overlay-info full-width">
            											<h5>Unique Photography Design</h5>
            											<p>Category</p>											
            											<a href="/" data-lightbox="images">
            												<span className="icon"><i className="ti-arrow-right"></i></span>
            											</a>
            										</div>
            									</div>
            								</div>
            							</div>
            							<div className="col-md-4 col-sm-6 col-xs-12 element-item design Photography" >
            								<div className="item-img">
            									<img src="https://belaltheme.com/Mp/Masud/Masud/images/portfolio/4.jpg" alt=""/>
            									<div className="item-img-overlay">
            										<div className="overlay-info full-width">
            											<h5>Fantastic Logo Design</h5>
            											<p>Category</p>											
            											<a href="/" data-lightbox="images">
            												<span className="icon"><i className="ti-arrow-right"></i></span>
            											</a>
            										</div>
            									</div>
            								</div>
            							</div>
            							<div className="col-md-4 col-sm-6 col-xs-12 element-item marketing Photography" >
            								<div className="item-img">
            									<img src="https://belaltheme.com/Mp/Masud/Masud/images/portfolio/5.jpg" alt=""/>
            									<div className="item-img-overlay">
            										<div className="overlay-info full-width">
            											<h5>Curved And Design</h5>
            											<p>Category</p>											
            											<a href="/" data-lightbox="images">
            												<span className="icon"><i className="ti-arrow-right"></i></span>
            											</a>
            										</div>
            									</div>
            								</div>
            							</div>
            							<div className="col-md-4 col-sm-6 col-xs-12 element-item design marketing" >
            								<div className="item-img">
            									<img src="https://belaltheme.com/Mp/Masud/Masud/images/portfolio/6.jpg" alt=""/>
            									<div className="item-img-overlay">
            										<div className="overlay-info full-width">
            											<h5>Fantastic Apps Design</h5>
            											<p>Category</p>											
            											<a href="/" data-lightbox="images">
            												<span className="icon"><i className="ti-arrow-right"></i></span>
            											</a>
            										</div>
            									</div>
            								</div>
            							</div>
            						</div>   
                    </div>
    
    
                              <div className="tab-pane fade" id="design" role="tabpanel" aria-labelledby="design-tab">
                                      <div className="work_content_area row">
            						
            							<div className="col-md-4 col-sm-6 col-xs-12 element-item design Photography">
            								<div className="item-img">
            									<img src="https://belaltheme.com/Mp/Masud/Masud/images/portfolio/2.jpg" alt=""/>
            									<div className="item-img-overlay">
            										<div className="overlay-info full-width">
            											<h5>Awesome Logo Design</h5>
            											<p>Category</p>											
            											<a href="/" data-lightbox="images">
            												<span className="icon"><i className="ti-arrow-right"></i></span>
            											</a>
            										</div>
            									</div>
            								</div>
            							</div>
            							<div className="col-md-4 col-sm-6 col-xs-12 element-item Photography marketing" >
            								<div className="item-img">
            									<img src="https://belaltheme.com/Mp/Masud/Masud/images/portfolio/3.jpg" alt=""/>
            									<div className="item-img-overlay">
            										<div className="overlay-info full-width">
            											<h5>Unique Photography Design</h5>
            											<p>Category</p>											
            											<a href="/" data-lightbox="images">
            												<span className="icon"><i className="ti-arrow-right"></i></span>
            											</a>
            										</div>
            									</div>
            								</div>
            							</div>
            					
            							<div className="col-md-4 col-sm-6 col-xs-12 element-item marketing Photography" >
            								<div className="item-img">
            									<img src="https://belaltheme.com/Mp/Masud/Masud/images/portfolio/5.jpg" alt=""/>
            									<div className="item-img-overlay">
            										<div className="overlay-info full-width">
            											<h5>Curved And Design</h5>
            											<p>Category</p>											
            											<a href="/" data-lightbox="images">
            												<span className="icon"><i className="ti-arrow-right"></i></span>
            											</a>
            										</div>
            									</div>
            								</div>
            							</div>
            							<div className="col-md-4 col-sm-6 col-xs-12 element-item design marketing" >
            								<div className="item-img">
            									<img src="https://belaltheme.com/Mp/Masud/Masud/images/portfolio/6.jpg" alt=""/>
            									<div className="item-img-overlay">
            										<div className="overlay-info full-width">
            											<h5>Fantastic Apps Design</h5>
            											<p>Category</p>											
            											<a href="/" data-lightbox="images">
            												<span className="icon"><i className="ti-arrow-right"></i></span>
            											</a>
            										</div>
            									</div>
            								</div>
            							</div>
            						</div>   
                              
                              
                              </div>
                            <div className="tab-pane fade" id="marketing" role="tabpanel" aria-labelledby="marketing-tab">
                                <div className="work_content_area row">
            							<div className="col-md-4 col-sm-6 col-xs-12">
            								<div className="item-img">
            									<img src="https://belaltheme.com/Mp/Masud/Masud/images/portfolio/1.jpg" alt=""/>
            									<div className="item-img-overlay">
            										<div className="overlay-info full-width">
            											<h5>Creative Web Design</h5>
            											<p>Category</p>											
            											<a href="/" data-lightbox="images">
            												<span className="icon"><i className="ti-arrow-right"></i></span>
            											</a>
            										</div>
            									</div>
            								</div>
            							</div>
            						
            							<div className="col-md-4 col-sm-6 col-xs-12 element-item Photography marketing" >
            								<div className="item-img">
            									<img src="https://belaltheme.com/Mp/Masud/Masud/images/portfolio/3.jpg" alt=""/>
            									<div className="item-img-overlay">
            										<div className="overlay-info full-width">
            											<h5>Unique Photography Design</h5>
            											<p>Category</p>											
            											<a href="/" data-lightbox="images">
            												<span className="icon"><i className="ti-arrow-right"></i></span>
            											</a>
            										</div>
            									</div>
            								</div>
            							</div>
            							<div className="col-md-4 col-sm-6 col-xs-12 element-item design Photography" >
            								<div className="item-img">
            									<img src="https://belaltheme.com/Mp/Masud/Masud/images/portfolio/4.jpg" alt=""/>
            									<div className="item-img-overlay">
            										<div className="overlay-info full-width">
            											<h5>Fantastic Logo Design</h5>
            											<p>Category</p>											
            											<a href="/" data-lightbox="images">
            												<span className="icon"><i className="ti-arrow-right"></i></span>
            											</a>
            										</div>
            									</div>
            								</div>
            							</div>
            							<div className="col-md-4 col-sm-6 col-xs-12 element-item marketing Photography" >
            								<div className="item-img">
            									<img src="https://belaltheme.com/Mp/Masud/Masud/images/portfolio/5.jpg" alt=""/>
            									<div className="item-img-overlay">
            										<div className="overlay-info full-width">
            											<h5>Curved And Design</h5>
            											<p>Category</p>											
            											<a href="/" data-lightbox="images">
            												<span className="icon"><i className="ti-arrow-right"></i></span>
            											</a>
            										</div>
            									</div>
            								</div>
            							</div>
            						
            						</div>   
                            </div>
                            
                            <div className="tab-pane fade" id="photography" role="tabpanel" aria-labelledby="photography-tab">
                                
                            <div className="work_content_area row">
            							<div className="col-md-4 col-sm-6 col-xs-12">
            								<div className="item-img">
            									<img src="https://belaltheme.com/Mp/Masud/Masud/images/portfolio/1.jpg" alt=""/>
            									<div className="item-img-overlay">
            										<div className="overlay-info full-width">
            											<h5>Creative Web Design</h5>
            											<p>Category</p>											
            											<a href="/" data-lightbox="images">
            												<span className="icon"><i className="ti-arrow-right"></i></span>
            											</a>
            										</div>
            									</div>
            								</div>
            							</div>
            							<div className="col-md-4 col-sm-6 col-xs-12 element-item design Photography">
            								<div className="item-img">
            									<img src={' https://belaltheme.com/Mp/Masud/Masud/images/portfolio/2.jpg '} alt=""/>
            									<div className="item-img-overlay">
            										<div className="overlay-info full-width">
            											<h5>Awesome Logo Design</h5>
            											<p>Category</p>											
            											<a href="/" data-lightbox="images">
            												<span className="icon"><i className="ti-arrow-right"></i></span>
            											</a>
            										</div>
            									</div>
            								</div>
            							</div>
            							
            						
            						
            							<div className="col-md-4 col-sm-6 col-xs-12 element-item design marketing" >
            								<div className="item-img">
            									<img src="https://belaltheme.com/Mp/Masud/Masud/images/portfolio/6.jpg" alt=""/>
            									<div className="item-img-overlay">
            										<div className="overlay-info full-width">
            											<h5>Fantastic Apps Design</h5>
            											<p>Category</p>											
            											<a href="/" data-lightbox="images">
            												<span className="icon"><i className="ti-arrow-right"></i></span>
            											</a>
            										</div>
            									</div>
            								</div>
            							</div>
            						</div>     
                            </div>
                            </div>					
					</div>
				</div>			
</section>

<section id="blog" className="gray_bg section_padding">
				<div className="container">
					<div className="row">
						<div className="col-md-12 col-sm-12-col-xs-12">
							<div className="section_heading text-center">
								<h2>My <span>Blog</span></h2>							
								<div className="sm_border"></div>
							</div>	
						</div>	
						
						<div className="blog_slide_area">
							<div className="col-md-4 col-sm-6 col-xs-12">
								<div className="single_blog wow fadeInLeft">
									<div className="blog-thumb">
										<div className="blog-image">
										   <a href="/"><img src="https://belaltheme.com/Mp/Masud/Masud/images/blog/1.jpg" className="img-responsive" alt=""/></a>
										</div>
										<div className="blog-info">
											<a href="/"><h4>Data Science And Apps</h4></a>	
											<small><i className="fa fa-clock-o"></i>May 30, 2022</small>
											<span>| Design</span>																																
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet incidunt quidem illum repellat</p>
											<a href="/" className="btn blog_btn">Read More</a>
										</div>
									</div>
								</div>
							</div>
			
							<div className="col-md-4 col-sm-6 col-xs-12">
								<div className="single_blog wow fadeInUp" >
									<div className="blog-thumb">
										<div className="blog-image">
										   <a href="/"><img src="https://belaltheme.com/Mp/Masud/Masud/images/blog/2.jpg" className="img-responsive" alt=""/></a>
										</div>
										<div className="blog-info">
											<a href="/"><h4>Best Developer of Asia</h4></a>
											<small><i className="fa fa-clock-o"></i>May 30, 2022</small>
											<span>| Design</span>																																	
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet incidunt quidem illum repellat</p>
											<a href="/" className="btn blog_btn">Read More</a>
										</div>
									</div>
								</div>
							</div>
							
							<div className="col-md-4 col-sm-6 col-xs-12">
								<div className="single_blog wow fadeInRight">
									<div className="blog-thumb">
										<div className="blog-image">
										   <a href="/"><img src="https://belaltheme.com/Mp/Masud/Masud/images/blog/3.jpg" className="img-responsive" alt=""/></a>
										</div>
										<div className="blog-info">
											<a href="/"><h4>Best Design Works</h4></a>	
											<small><i className="fa fa-clock-o"></i>May 30, 2022</small>
											<span>| Design</span>																																
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet incidunt quidem illum repellat</p>
											<a href="/" className="btn blog_btn">Read More</a>
										</div>
									</div>
								</div>
							</div>	
						</div>
					</div>
				</div>
			</section>
			
			
<section id="contact" className="gray_bg section_padding">
				<div className="container">
					<div className="col-md-12 col-sm-12-col-xs-12">
						<div className="section_heading text-center">
							<h2>Contact <span>Us</span></h2>							
							<div className="sm_border"></div>
						</div>	
					</div>	
					
					<div className="row">						
						<div className="col-md-12 col-sm-12">
							<form action="" className="form" method="POST">
								<div className="row">
									<div className="form-group col-md-4">
										<input type="text" name="name" className="form-control" placeholder="Name" required="required"/>
									</div>
									<div className="form-group col-md-4">
										<input type="email" name="email" className="form-control" placeholder="Email" required="required"/>
									</div>
									<div className="form-group col-md-4">
										<input type="number" name="number" className="form-control" placeholder="Phone Number" required="required"/>
									</div>
									<div className="form-group col-md-12">
										<textarea rows="6" name="message" className="form-control" placeholder="Your Message" required="required"></textarea>
									</div>
									<div className="col-md-12 text-center">
										<button type="submit" value="Send message" name="submit_send" id="submitButton" className="btn btn-default main_btn" title="Submit Your Message!">Send Message</button>
									</div>
								</div>
							</form>
						</div>						
					</div>
				</div>
			</section>			
	










    </>
  )
}

