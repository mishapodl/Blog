import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Comments, Article } from "../../components/index";
import "./Post.scss";

class Post extends Component {
  static propTypes = {};
  render() {
    const {
      posts,
      comments,
      match: {
        params: { id_post }
      }
    } = this.props;
    return (
      <main>
        <section>
          <article className="post">
            {posts.length ? <Article post={posts[+id_post]} /> : false}
            <Comments comments={comments} />
          </article>
        </section>
      </main>
    );
  }
}

const mapStateToProps = ({ posts, comments }) => ({
  posts,
  comments
});

export default connect(
  mapStateToProps,
  null
)(Post);
