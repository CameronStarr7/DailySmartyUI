import React, { Component } from 'react';

import { connect, Connect } from 'react-redux';

class ResultsPosts extends Component {
    renderPosts() {
        const posts = this.props.posts.map((post, index) => {
            return <Post key={index} {...post} />
        })
    }

    

    render() {
        return (
            <div className='results-posts'>
                <div className='results-posts_wrapper'>
                    <ul className='results-posts_posts'>
                        {this.renderPosts()}
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts.resultsPosts
    }
}

export default connect(mapStateToProps)(ResultsPosts);