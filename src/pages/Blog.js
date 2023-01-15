import '../css/style.css';
import React from 'react'


export default function Blog() {
  return (
    <>
      
            <section className="top_heading_section">
                    <div className="col-md-12 col-sm-12-col-xs-12">
                        <div className="section_heading text-center pb-0">
                            <h2 className="mb-0"><span>Blog</span></h2>							
                            <div className="sm_border"></div>
                            <div className="breadcrumbs">
                                <ul className="breadcrumb">
                                    <li><a href="/">Home</a></li>
                                    <li>Blog</li>
                                    </ul>
                            </div>
                        </div>	
                    </div>
            </section> 
            <section id="blog" className="gray_bg section_padding ">
				<div className="container">
					<div className="row">
						<div className="blog_slide_area">
							<div className="col-md-4 col-sm-6 col-xs-12">
								<div className="single_blog wow fadeInLeft">
									<div className="blog-thumb">
										<div className="blog-image">
										   <a href="/"><image src="https://belaltheme.com/Mp/Masud/Masud/images/blog/1.jpg" className="img-responsive" alt=""/></a>
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
			
    </>
  )
}
