import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from 'axios';

class CreatorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: '',
      channelName: '',
      subscribersCount: '',
      mostViewedVideo: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { names, channelName, subscribersCount, mostViewedVideo } = this.state;

    // Adjust the API endpoint accordingly
    axios.post('http://localhost:5000/contentcreators', {
      names,
      channelName,
      subscribersCount,
      mostViewedVideo,
    })
      .then(() => alert('Content creator inserted successfully'))
      .catch(() => alert('Error inserting content creator'));
  };

  render() {
    return (
      <div>
        <Typography variant="h4">Content Creator Form</Typography>
        <form onSubmit={this.handleSubmit}>
          <Box display="flex" flexDirection="column">
            <TextField
              label="Name"
              name="names"
              value={this.state.names}
              onChange={this.handleInputChange}
              margin="normal"
            />
            <TextField
              label="Channel Name"
              name="channelName"
              value={this.state.channelName}
              onChange={this.handleInputChange}
              margin="normal"
            />
            <TextField
              label="Subscribers Count"
              name="subscribersCount"
              value={this.state.subscribersCount}
              onChange={this.handleInputChange}
              margin="normal"
            />
            <TextField
              label="Most Viewed Video"
              name="mostViewedVideo"
              value={this.state.mostViewedVideo}
              onChange={this.handleInputChange}
              margin="normal"
            />
          </Box>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default CreatorForm;
