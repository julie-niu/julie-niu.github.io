/**
 * @file Class representing project content for both project list and modals
 */

// Global project name list
var projects = ['One', 'Two', 'Three'];


class ProjectModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

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
    }

    render() {
        let projectElements = this.state.projects.map((proj) => 
            <a class="portfolio-link" onClick={(e) => this.selectProjectCallback(e, proj)} data-toggle="modal" href="#portfolioModal">
                <h1>{proj}</h1>
            </a>
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

