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
				<p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus porttitor dui.</p>

				<p class="lead">Sim in vestibulum metus pulvinar sit amet.

				</p>

			</div>
		</div>
        <button type="button" class="btn btn-primary">Saber más</button>
	</div>
</div>
        );
    }
}
 
export default Hero;