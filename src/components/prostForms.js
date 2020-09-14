import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createPost } from "../actions/postActions";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { CardHeader } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";

//  {/* <input
//         onChange={(e) => {
//           this.setState({ NEwdata: e.target.value });
//         }}
//       />
//       <button
//         onClick={() => {
//           console.log(this.props.data);
//           this.props.createPost(this.state.NEwdata, this.props.data);
//         }}
//       >
//         aaaaaa
//       </button> */}

class PostForms extends React.Component {
  state = {
    NameAdded: "",
  };

  render() {
    return (
      <Card className="root" variant="outlined" style={{ marginTop: "3%" }}>
        <Paper>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" style={{ backgroundColor: "green" }}>
                A
              </Avatar>
            }
            title={<h3>Add Name</h3>}
          />

          <CardContent>
            <TextField
              style={{ textAlign: "center", width: "50%" }}
              id="filled-basic"
              label="Name"
              variant="filled"
              onChange={(e) => {
                this.setState({ NameAdded: e.target.value });
              }}
            />
            <Button
              style={{
                float: "right",
                backgroundColor: "green",
                color: "white",
                marginTop: "10px",
              }}
              variant="contained"
              // color="green"
              size="large"
              onClick={() => {
                console.log(this.props.data);
                this.props.createPost(this.state.NameAdded);
              }}
            >
              Add
            </Button>
          </CardContent>
        </Paper>
      </Card>
    );
  }
}

PostForms.protoType = {
  createPost: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data.items,
  // newPost: state.data.item,
});

export default connect(mapStateToProps, { createPost })(PostForms);
