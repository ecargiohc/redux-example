import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postActions';

class Posts extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    };

    // when it receives new property from the state, this will run:
    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost)
        } 
    }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         posts: []
    //     }
    // }

    // runs simultaneously/when the component mounts, so make 'fetch' request here
    // componentWillMount() {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(response => response.json())
    //     .then(data => this.setState({
    //         posts: data
    //     }));
    // }
    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        return(
            <div>
            <h1>Posts</h1>
            {postItems}
            </div>
        )
    }
}
Posts.propTypes = {
// remember, fetchPosts is a 'property'
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object.isRequired
}

// reducer:
const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
})
// export default Posts;
export default connect(mapStateToProps, {fetchPosts})(Posts)