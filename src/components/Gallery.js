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
            return (
                <article className="8u 12u$(xsmall) work-item" key={i}>
                    <img alt="thumbnail" src={obj.thumbnail} />
                    <div>
                        <h2>{obj.caption}</h2>
                        <p>{obj.description}</p>
                        <h2><a href={obj.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a></h2> <h2><a href={obj.liveVersion} target="_blank" rel="noopener noreferrer">Live</a></h2>
                    </div>
                </article>
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