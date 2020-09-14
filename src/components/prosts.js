import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { forwardRef } from "react";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import MaterialTable from "material-table";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import "../App.css";
import { fetchPost } from "../actions/postActions";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

class Posts extends React.Component {
  componentWillMount() {
    this.props.fetchPost();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.data.push(nextProps.newPost);
    }
  }
  render() {
    console.log(this.props.data);
    const history = this.props.data.map((item, index) => (
      <Grid item xs={12}>
        <Paper style={{ paddingLeft: "30px", marginTop: "20px" }}>
          <Typography variant="subtitle1" gutterBottom>
            <Box
              fontSize={18}
              m={1}
              fontStyle="oblique"
              fontFamily="Segoe UI Emoji"
              fontWeight="fontWeightLight"
            >
              Name : {item.name}
            </Box>
          </Typography>
        </Paper>
      </Grid>
    ));
    return (
      <div className="proof">
        <Card className="root2" variant="outlined">
          <CardContent>
            <Grid container spacing={3}>
              {history}
            </Grid>
          </CardContent>
        </Card>
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPost: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  newPost: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data.items,
  newPost: state.data.item,
});

export default connect(mapStateToProps, { fetchPost })(Posts);
