import '../css/style.css';
import React from 'react'

export default function Contact() {
  return (
    <>
      <section className="top_heading_section">
                <div className="col-md-12 col-sm-12-col-xs-12">
                    <div className="section_heading text-center pb-0">
                        <h2 className="mb-0">Contact<span>Us</span></h2>							
                        <div className="sm_border"></div>
                        <div className="breadcrumbs">
                            <ul className="breadcrumb">
                                <li><a href="/">Home</a></li>
                                <li>Contact</li>
                                </ul>
                        </div>
                    </div>	
                </div>
        </section> 

		
<section id="contact" className="gray_bg section_padding ">
				<div className="container">
					<div className="row">						
						<div className="col-md-12 col-sm-12">
							<form className="form"  action="" method="POST">
								<div className="row">
									<div className="form-group col-md-4">
										<input type="text" name="name" className="form-control" placeholder="Name" required="required"/>
									</div>
									<div className="form-group col-md-4">
										<input type="email" name="email" className="form-control" placeholder="Email" required="required"/>
									</div>
									<div className="form-group col-md-4">
										<input type="text" name="number" className="form-control" placeholder="Phone" required="required"/>
									</div>
									<div className="form-group col-md-12">
										<textarea rows="6" name="message" className="form-control" placeholder="Your Message" required="required"></textarea>
									</div>
									<div className="col-md-12 text-center">
										<button type="submit" value="Send message" name="submit_contact" id="submitButton" className="btn btn-default main_btn" title="Submit Your Message!">Send Message</button>
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

