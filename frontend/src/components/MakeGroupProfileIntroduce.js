import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '200'
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: '200'
  }
}));

class MakeGroupProfileIntroduce extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="introduce">
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="standard-full-width"
            label="Group Name"
            style={{ margin: 1 }}
            placeholder="Write your Group Name"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
          />{' '}
          <br />
          <br />
          <TextField
            id="date"
            label="Valuable Date"
            type="date"
            defaultValue="2017-05-24"
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
          />
          <br /> <br />
          <TextField
            id="standard-full-width"
            label="About Us"
            style={{ margin: 1 }}
            placeholder="Short Introduction For Others!"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
          />
        </form>
      </div>
    );
  }
}

export default withStyles(useStyles)(MakeGroupProfileIntroduce);
