import React from 'react'
import { Container , Footer, Col, Button, Card, } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function FooterPg() {
  const navigate = useNavigate()
  return (
    <div>
        {/* <Footer className="pt-4 my-md-5 pt-md-5 border-top">
            <Container>
                <div className="row">
                    <div className="col-md-8">
                        <h3>About us</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta saepe cumque sunt! Nam maiores vitae laboriosam animi quia. Iure nesciunt libero sequi, nulla facere eligendi voluptatem reiciendis excepturi laboriosam commodi.</p>
                    </div>
            
                    <div className="col-md-4">
                        <h3>Subscribe</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, odio beatae accusantium.
                        </p>
                        <form action="#">
                            <div className="d-flex mb-5">
                                <input type="text" className="form-control rounded-0" placeholder="Email" />
                                <button type="submit" className="btn btn-outline-dark rounded-0" data-bs-toggle="modal" data-bs-target="#subscribeModal" >Subscribe</button>
                            </div>

                            <div className="modal fade" id="subscribeModal" tabindex="-1" aria-labelledby="subscribeModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    Subscribed!
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                                </div>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </Footer> */}
    <div bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
      </section>

      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className='fas fa-gem me-3'></i>PC Builder
              </h6>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
              esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a onClick={() => {navigate('/StartBuild')}} className='text-reset'>
                  Start Build
                </a>
              </p>
              <p>
                <a onClick={() => {navigate('/Builds')}} className='text-reset'>
                Browse Build
                </a>
              </p>
              <p>
                <a onClick={() => {navigate('/Community')}} className='text-reset'>
                  Community
                </a>
              </p>
              <p>
                <a onClick={() => {navigate('/AboutUs')}} className='text-reset'>
                  About Us
                </a>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className='fas fa-home me-3'></i> Ottawa, ON, CA
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i>
                info@pcbuilder.com
              </p>
              <p>
                <i className='fas fa-phone me-3'></i> + 01 888 888 8888
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      </div>
    </div>
    
    
    
    </div>
  )
}

export default FooterPg