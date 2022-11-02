/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {Component}  from "react";

class Section1 extends Component {
    render() { 
        return (
          <div class="container py-6">
            <div class="row align-items-center flex-md-row-reverse">
              <div class="col-md-6">
                <div class="lc-block mb-4">
                  <div editable="rich">
                    <h2 class="fw-bold display-5">
                      Prueba nuestra gama de servicios de spa vigorizantes
                    </h2>
                  </div>
                </div>
                <div class="lc-block mb-5">
                  <div editable="rich">
                    <p class="lead text-muted">
                      Ya sea que esté lidiando con tensión muscular, brotes
                      relacionados con el estrés o fatiga general, nuestros
                      esteticistas y terapeutas pueden proporcionarle un
                      tratamiento personalizado que se adapte a sus necesidades.
                      Cada uno de nuestros servicios de spa se ofrece de la
                      manera más profesional posible, mientras se centra en su
                      comodidad y bienestar.
                    </p>
                  </div>
                </div>
                <div class="lc-block d-sm-flex align-items-center mb-4">
                  <div class="d-inline-flex">
                    <div></div>
                  </div>
                </div>
                <div class="lc-block d-sm-flex align-items-center mb-4">
                  <div class="d-inline-flex">
                    <div></div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 d-flex gap-4">
                <div class="col">
                  <div class="lc-block">
                    <img
                      class="img-fluid"
                      src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2624&q=80https://images.unsplash.com/photo-1582794543462-0d7922e50cf5?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8Mzh8fGZsb3dlcnN8ZW58MHwxfHx8MTY1OTk0Njc0Ng&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080"
                      srcset="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2624&q=80"
                      sizes="(max-width: 1080px) 100vw, 1080px"
                      width="1080"
                      height=""
                      alt="Photo by Rikonavt"
                    />
                  </div>
                  <div class="lc-block my-4 bg-dark bg-opacity-10 ft-sm"></div>
                </div>
                <div class="col">
                  <div class="lc-block my-4 bg-dark bg-opacity-10 ft-sm"></div>
                  <div class="lc-block">
                    <img
                      class="img-fluid"
                      srcset="https://images.pexels.com/photos/3212164/pexels-photo-3212164.jpeg"
                      sizes="(max-width: 1080px) 100vw, 1080px"
                      width="1080"
                      height=""
                      alt="Photo by Europeana"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
 
export default Section1;