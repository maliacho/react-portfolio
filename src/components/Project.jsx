import TechView from '../assets/TechView.png';
import filmfinder from '../assets/filmfinder.png';

const Project = () => {
    return (
        <div>
            <div className="card mb-3 border border-black m-5">
                <img src={TechView} className="card-img-top" alt="screenshot of ticket home page" />
                <div className="card-body text-center">
                    <h5 className="card-title fs-4 fw-bold">IT HELP DESK</h5>
                    <p className="card-text">This application is designed for employees within a company to be able to
                        submit a ticket for help from the IT department.</p>
                    <a className="card-text link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="#"><small className="text-body-secondary text-black">Click Here</small></a>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 g-4 text-center">
                <div className="col">
                    <div className="card m-3">
                        <img src={filmfinder} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title fw-bold">FILM FINDER</h5>
                                <p className="card-text">With Film Finder, you can quickly and effortlessly search for any movie you
                            have in mind. We provide you with all the essential information you need to make an informed
                            decision.</p>
                            <a className="card-text link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="#"><small className="text-body-secondary text-black">Click Here</small></a>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Project