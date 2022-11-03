import React, {Component}  from "react";

class Servicios extends Component {
    render() { 
        return (
          <section className="py-6  bg-dark bg-opacity-10">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="p-5 mb-2 lc-block text-center">
                    <div className="lc-block mb-4">
                      <div editable="rich">
                        <h2 className="fw-bold display-4">
                          Nuestros Servicios
                        </h2>
                      </div>
                    </div>
                    <div className="lc-block mb-5">
                      <div editable="rich">
                        <p className="  lead">
                          This text briefly introduces visitors to your main
                          services.
                        </p>
                        <button type="button" class="btn btn-primary">
                          Saber más
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="row row-cols-2 row-cols-lg-4 g-lg-5 mb-6">
                    <div className="lc-block mb-4">
                      <img
                        className="img-fluid"
                        src="https://images.unsplash.com/photo-1552072232-059f1a5d76c5?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8Mnx8Ymx1ZXxlbnwwfDJ8fHwxNjQ3Mjc4ODM3&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080&amp;h=1080"
                        srcset="https://images.unsplash.com/photo-1552072232-059f1a5d76c5?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8Mnx8Ymx1ZXxlbnwwfDJ8fHwxNjQ3Mjc4ODM3&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080&amp;h=1080 1080w, https://images.unsplash.com/photo-1552072232-059f1a5d76c5??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8Mnx8Ymx1ZXxlbnwwfDJ8fHwxNjQ3Mjc4ODM3&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=150 150w, https://images.unsplash.com/photo-1552072232-059f1a5d76c5??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8Mnx8Ymx1ZXxlbnwwfDJ8fHwxNjQ3Mjc4ODM3&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=300 300w, https://images.unsplash.com/photo-1552072232-059f1a5d76c5??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8Mnx8Ymx1ZXxlbnwwfDJ8fHwxNjQ3Mjc4ODM3&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=768 768w, https://images.unsplash.com/photo-1552072232-059f1a5d76c5??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8Mnx8Ymx1ZXxlbnwwfDJ8fHwxNjQ3Mjc4ODM3&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1024 1024w"
                        sizes="(max-width: 1080px) 100vw, 1080px"
                        width="1080"
                        height="1080"
                        alt="Photo by Frédéric Perez"
                      />
                    </div>
                    <div className="align-self-center">
                      <div editable="rich">
                        <h2>Masaje con piedras calientes</h2>
                        <p class="lead text-muted">
                          Ayuda a relajar tensiones musculares y a conseguir un
                          perfecto equilibrio energético.
                        </p>
                      </div>
                    </div>
                    <div className="lc-block mb-4">
                      <img
                        className="img-fluid"
                        src="https://images.unsplash.com/photo-1552072232-059f1a5d76c5?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8Mnx8Ymx1ZXxlbnwwfDJ8fHwxNjQ3Mjc4ODM3&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080&amp;h=1080"
                        srcset="https://images.unsplash.com/photo-1552072232-059f1a5d76c5?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8Mnx8Ymx1ZXxlbnwwfDJ8fHwxNjQ3Mjc4ODM3&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080&amp;h=1080 1080w, https://images.unsplash.com/photo-1552072232-059f1a5d76c5??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8Mnx8Ymx1ZXxlbnwwfDJ8fHwxNjQ3Mjc4ODM3&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=150 150w, https://images.unsplash.com/photo-1552072232-059f1a5d76c5??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8Mnx8Ymx1ZXxlbnwwfDJ8fHwxNjQ3Mjc4ODM3&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=300 300w, https://images.unsplash.com/photo-1552072232-059f1a5d76c5??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8Mnx8Ymx1ZXxlbnwwfDJ8fHwxNjQ3Mjc4ODM3&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=768 768w, https://images.unsplash.com/photo-1552072232-059f1a5d76c5??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8Mnx8Ymx1ZXxlbnwwfDJ8fHwxNjQ3Mjc4ODM3&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1024 1024w"
                        sizes="(max-width: 1080px) 100vw, 1080px"
                        width="1080"
                        height="1080"
                        alt="Photo by Frédéric Perez"
                      />
                    </div>
                    <div className="align-self-center">
                      <div editable="rich">
                        <h2>Aromaterapia</h2>
                        <p className="lead text-muted">
                          Mejora tu estado de ánimo, alivia el estrés y relaja
                          el espíritu.
                        </p>
                      </div>
                    </div>
                    <div className="lc-block mb-4">
                      <img
                        class="img-fluid"
                        src="https://images.unsplash.com/photo-1552072232-059f1a5d76c5?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8Mnx8Ymx1ZXxlbnwwfDJ8fHwxNjQ3Mjc4ODM3&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080&amp;h=1080"
                        srcset="https://images.unsplash.com/photo-1552072232-059f1a5d76c5?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8Mnx8Ymx1ZXxlbnwwfDJ8fHwxNjQ3Mjc4ODM3&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080&amp;h=1080 1080w, https://images.unsplash.com/photo-1552072232-059f1a5d76c5??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8Mnx8Ymx1ZXxlbnwwfDJ8fHwxNjQ3Mjc4ODM3&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=150 150w, https://images.unsplash.com/photo-1552072232-059f1a5d76c5??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8Mnx8Ymx1ZXxlbnwwfDJ8fHwxNjQ3Mjc4ODM3&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=300 300w, https://images.unsplash.com/photo-1552072232-059f1a5d76c5??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8Mnx8Ymx1ZXxlbnwwfDJ8fHwxNjQ3Mjc4ODM3&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=768 768w, https://images.unsplash.com/photo-1552072232-059f1a5d76c5??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8Mnx8Ymx1ZXxlbnwwfDJ8fHwxNjQ3Mjc4ODM3&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1024 1024w"
                        sizes="(max-width: 1080px) 100vw, 1080px"
                        width="1080"
                        height="1080"
                        alt="Photo by Frédéric Perez"
                      />
                    </div>
                    <div className="align-self-center">
                      <div editable="rich">
                        <h2>Baños de cerveza</h2>
                        <p class="lead text-muted">
                          Técnica terapéutica que combina baños calientes con la
                          cerveza, la aromaterapia, musicoterapia y los masajes.
                        </p>
                      </div>
                    </div>
                    <div className="lc-block mb-5 align-self-center ">
                      <img
                        className="img-fluid "
                        src="https://images.unsplash.com/photo-1552072232-059f1a5d76c5?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8Mnx8Ymx1ZXxlbnwwfDJ8fHwxNjQ3Mjc4ODM3&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080&amp;h=1080"
                        srcset="https://images.unsplash.com/photo-1552072232-059f1a5d76c5?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8Mnx8Ymx1ZXxlbnwwfDJ8fHwxNjQ3Mjc4ODM3&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080&amp;h=1080 1080w, https://images.unsplash.com/photo-1552072232-059f1a5d76c5??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8Mnx8Ymx1ZXxlbnwwfDJ8fHwxNjQ3Mjc4ODM3&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=150 150w, https://images.unsplash.com/photo-1552072232-059f1a5d76c5??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8Mnx8Ymx1ZXxlbnwwfDJ8fHwxNjQ3Mjc4ODM3&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=300 300w, https://images.unsplash.com/photo-1552072232-059f1a5d76c5??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8Mnx8Ymx1ZXxlbnwwfDJ8fHwxNjQ3Mjc4ODM3&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=768 768w, https://images.unsplash.com/photo-1552072232-059f1a5d76c5??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8Mnx8Ymx1ZXxlbnwwfDJ8fHwxNjQ3Mjc4ODM3&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1024 1024w"
                        sizes="(max-width: 1080px) 100vw, 1080px"
                        width="1080"
                        height="1080"
                        alt="Photo by Frédéric Perez"
                      />
                    </div>
                    <div className=" align-self-center">
                      <div editable="rich">
                        <h2>Masaje terracota</h2>
                        <p className="lead text-muted">
                          Dos artesanos terapeutas te renovarán totalmente con
                          este masaje a 4 manos. Esta exclusiva terapia
                          artesanal estimula al cuerpo y la mente de manera
                          simétrica y armónica.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
    }
}
 
export default Servicios;