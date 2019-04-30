import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import { withStyles } from '@material-ui/core/styles';
import ImagePreview from '../../components/UI/ImagePreview';
import {
  Typography,
  Grid,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%'
  },
  button: {
    width: '100%',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },
  grid: {
    width: '85%'
  },
  buttonGrid: {
    marginTop: '5vh',
    width: '100%',
    justifyContent: 'space-between'
  },
  formHeader: {
    display: 'block',
    marginBottom: '5vh',
    width: '85%',
    padding: '2% 2%',
    backgroundColor: '#fff',
    boxShadow: `0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)`,
    // fontSize: '25vw',
    borderRadius: '4px',
    boxSizing: 'inherit',
    margin: '0 auto',
    [theme.breakpoints.up('md')]: {
      // fontSize: '15vh'
    }
  },
  list: {
    background: theme.palette.background.paper,
    boxShadow: `0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)`,
    borderRadius: '4px',
    ' & span': {
      fontSize: '1.3rem'
    },
    '& p': {
      fontSize: '22px'
    }
  }
});

const Confirm = props => {
  const { classes, values } = props;

  const {
    values: {
      address: { street, city, state, zipCode },
      price,
      squareFootage,
      bedrooms,
      bathrooms,
      listingType,
      dateAvailable,
      amenities,
      name,
      photos
    }
  } = props;

  let address;

  if (street && city && state && zipCode) {
    address = `${street} ${city}, ${state} ${zipCode} `;
  }

  const goBack = e => {
    e.preventDefault();
    props.prevStep();
  };

  const submitListing = e => {
    e.preventDefault();
    props.submitListing();
  };
  return (
    <div className={classes.root}>
      <Typography className={classes.formHeader} variant="h6" color="primary">
        Let's review & confirm the details:
      </Typography>
      <Grid container className={classes.grid}>
        <Grid item xs={12}>
          <List className={classes.list}>
            <ListItem>
              <ListItemText
                primary="Name of property:"
                secondary={name || 'N/A'}
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary="Photos:"
                secondary={<ImagePreview values={values} /> || 'N/A'}
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary="Type of Listing:"
                secondary={listingType ? listingType.join(', ') : 'N/A'}
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary="Date avalible:"
                secondary={dateAvailable || 'N/A'}
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Address:" secondary={address || 'N/A'} />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Price:" secondary={price || 'N/A'} />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Bedrooms:" secondary={bedrooms || 'N/A'} />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary="Bathrooms:"
                secondary={bathrooms || 'N/A'}
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary="Square footage:"
                secondary={squareFootage || 'N/A'}
              />
            </ListItem>
          </List>
        </Grid>

        {/* Button Grid */}
        <Grid container className={classes.buttonGrid}>
          <Grid item xs={4}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={goBack}
            >
              Back
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={submitListing}
            >
              Done
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    // state: reducerSlice.prop
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createUser: user => dispatch(actions.registerInit(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Confirm));
