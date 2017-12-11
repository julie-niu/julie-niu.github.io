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
        console.log(proj);
        Cookies.set('selectedProject', proj);
    }

    render() {
        let projectElements = this.state.projects.map((proj) => 
            <h1 id="proj" onClick={(e) => this.selectProjectCallback(e, proj)}>{proj}</h1>
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

