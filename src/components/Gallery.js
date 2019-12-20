import React, { Component } from 'react';

class Gallery extends Component {
    constructor () {
        super();

        this.state = {

        };
    }

    renderGallery (images) {
        if (!images) return;

        const gallery = images.map((obj, i) => {
            let githubLink;
            if (obj.githubLink) {
                githubLink = <li><p title="GitHub"><a href={obj.githubLink} className="icon fa-github" target="_blank" rel="noopener noreferrer"><span> GitHub</span></a></p></li>
            }

            let liveVersionLink;
            if (obj.liveVersion) {
                liveVersionLink = <li><p title="Live version"><a href={obj.liveVersion} className="icon fa-globe" target="_blank" rel="noopener noreferrer"><span> Live version</span></a></p></li>
            }

            return (
                <div className="project">
                    <div key={i}>
                        <img alt="thumbnail" src={obj.thumbnail} />
                    </div>
                    <div className="projectDetails" key={i}>
                            <h2>{obj.caption}</h2>
                            <h5>{obj.description}</h5>
                            <ul className="icons">
                                { githubLink }
                                { liveVersionLink }
                            </ul>
                    </div>
                </div>
            );
        });

        return (
            <div className="row">
                {gallery}
            </div>
        );
    }
    render () {
        const { images } = this.props;

        return (
            <div>
                {this.renderGallery(images)}
            </div>
        );
    }
}

Gallery.displayName = 'Gallery';

export default Gallery;