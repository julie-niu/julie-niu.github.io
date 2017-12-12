/**
 * @file Class representing project content for both project list and modals
 */

// Global project name list
var projects = ['MicroInstitution', 'StudentHousing'];


class ProjectModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <h1>{Cookies.get('selectedProject')}</h1>;
    }
}

class ProjectTile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {projects: projects.slice(), selected: null};

        this.selectProjectCallback = this.selectProjectCallback.bind(this);
    }

    selectProjectCallback(event, proj) {
        Cookies.set('selectedProject', proj);
        ReactDOM.render(<ProjectModal></ProjectModal>, document.getElementById('project-root'));
    }

    render() {
        let projectElements = this.state.projects.map((proj) => 
            <div className="col-md-3 col-sm-6 portfolio-item">
                <a className="portfolio-link" onClick={(e) => this.selectProjectCallback(e, proj)} data-toggle="modal" href="#portfolioModal">
                    <div className="portfolio-hover">
                        <div className="portfolio-hover-content">
                            <h1>{proj}</h1>
                        </div>
                    </div>
                    <img className="img-fluid project-tile" src={"media/icons/" + proj + ".jpg"} alt=""/>
                </a>
            </div>
        );

        return (
            <div className="row">
                {projectElements}
            </div>
        );
    }
}


$(document).ready(function() {
    ReactDOM.render(
        <ProjectTile></ProjectTile>,
        document.getElementById('project-list-root')
    );
})

