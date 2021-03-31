import React from 'react';
import axios from 'axios';

class TemporaryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      founder: '',
      difficulty: '',
      location: {lat: 29.0, lng: -98.3},
      images: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleFounderChange = this.handleFounderChange.bind(this);
    this.handleDifficultyChange = this.handleDifficultyChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:3001/newSpot', {
      name: this.state.name,
      description: this.state.description,
      founder: this.state.founder,
      difficulty: this.state.difficulty,
      location: this.state.location,
      images: this.state.images
    })
    .then((res) => {
      console.log('Successful post')
    })
    .catch((err) => {
      console.log(err)
    });
  }

  handleNameChange(e) {
    e.preventDefault();
    let name = e.target.value;
    this.setState({
      name: name
    });
  }

  handleDescriptionChange(e) {
    e.preventDefault();
    let description = e.target.value;
    this.setState({
      description: description
    });
  }

  handleFounderChange(e) {
    e.preventDefault();
    let founder = e.target.value;
    this.setState({
      founder: founder
    });
  }

  handleDifficultyChange(e) {
    e.preventDefault();
    let difficulty = e.target.value
    this.setState({
      difficulty: difficulty
    })
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Name:
            <input type="text" name="name" onChange={this.handleNameChange}/>
          </label>
          <br></br>
          <label>
            Description:
            <input type="text" name="description" onChange={this.handleDescriptionChange}/>
          </label>
          <br></br>
          <label>
            Founder:
            <input type="text" name="founder" onChange={this.handleFounderChange}/>
          </label>
          <br></br>
          <label>
            Difficulty
            <select value={this.state.difficulty} onChange={this.handleDifficultyChange}>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </label>
        </form>
        <button onClick={this.handleSubmit}>
          Submit New Location
        </button>
      </div>
    )
  }
}

export default TemporaryForm