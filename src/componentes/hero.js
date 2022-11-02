import React, {Component}  from "react";

class Hero extends Component {
    render() { 
        return (
            <div className="d-flex min-vh-100 home-img" lc-helper="background">
	<div className="align-self-center text-center text-light col-md-8 offset-md-2">
		<div className="lc-block mb-4">
			<div editable="rich">
				<h1 className="display-2 fw-bolder white">Desconectate de la rutina y renuevate</h1>
			</div>
		</div>

		<div className="lc-block">
			<div editable="rich">
				<p class="lead">Sabemos la importancia que tiene el cuidado de la salud fisica y mental asi que ponemos a tu alcance diversos servicios y actividades que te permitirán mejorar tu calidad de vida.</p>



			</div>
		</div>
        <button type="button" class="btn btn-primary">Saber más</button>
	</div>
</div>
        );
    }
}
 
export default Hero;