/**
 * @file Class representing project content for both project list and modals
 */

// Global project name list
var projects = {'MicroInstitution': {
        title: 'The Urban Library',
        subtitle: 'Micro-Institution'
    }, 
    'StudentHousing': {
        title: 'The Modern Village',
        subtitle: 'Student Housing'
    },
    'Oasis': {
        title: 'The Astronomer\'s House',
        subtitle: 'Oasis'
    },
    'PotteryStudio': {
        title: 'The Pottery Studio',
        subtitle: 'Artist\'s Residence'
    },
    'WishingTree': {
        title: 'The Wishing Tree',
        subtitle: 'Steel Assemblage'
    }
};



class ProjectModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {current: null, projects: projects.slice()};
    }

    componentWillReceiveProps(nextProps) {
        var selectedProj = Cookies.get('selectedProject');
        if (this.state.current != selectedProj) {
            this.setState({current: selectedProj});
        }
    }

    render() {
        return <h1>{this.state.projects[this.state.current].subtitle}</h1>;
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
        this.setState({selected: proj});
        ReactDOM.render(<ProjectModal></ProjectModal>, document.getElementById('project-root'));
    }

    render() {
        let projectElements = Object.keys(this.state.projects).map((proj) => 
            <div className="col-md-3 col-sm-6 portfolio-item">
                <a className="portfolio-link" onClick={(e) => this.selectProjectCallback(e, proj)} data-toggle="modal" href="#portfolioModal">
                    <div className="portfolio-hover">
                        <div className="portfolio-hover-content">
                            <p className="project-name">{this.state.projoects[proj].title}</p>
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

