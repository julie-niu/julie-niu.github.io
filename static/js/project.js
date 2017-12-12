/**
 * @file Class representing project content for both project list and modals
 */

// Global project name list
const projects = {'MicroInstitution': {
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
        this.state = {current: null};
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.current != nextProps.current) {
            this.setState({current: nextProps.current});
        }
    }

    render() {
        return <h1>{projects[this.nextProps.current].subtitle}</h1>;
    }
}

class ProjectTile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selected: null};

        this.selectProjectCallback = this.selectProjectCallback.bind(this);
    }

    selectProjectCallback(event, proj) {
        Cookies.set('selectedProject', proj);
        this.setState({selected: proj});
        ReactDOM.render(<ProjectModal current={proj}></ProjectModal>, document.getElementById('project-root'));
    }

    render() {
        let projectElements = Object.keys(projects).map((proj) => 
            <div className="col-md-3 col-sm-6 portfolio-item">
                <a className="portfolio-link" onClick={(e) => this.selectProjectCallback(e, proj)} data-toggle="modal" href="#portfolioModal">
                    <div className="portfolio-hover">
                        <div className="portfolio-hover-content">
                            <p className="project-name">{projects[proj].title}</p>
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

