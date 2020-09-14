import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class AllPosts extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.data.push(nextProps.newPost);
    }
  }
  render() {
    console.log(this.props.data);
    const history = this.props.data.map((item) => (
      <div>
        <p3>C</p3>
      </div>
    ));
    return <div >{history}</div>;
  }
}

AllPosts.propTypes = {
  data: PropTypes.array.isRequired,
  newPost: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data.items,
  newPost: state.data.item,
});

export default connect(mapStateToProps, {})(AllPosts);
