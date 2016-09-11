import React from 'react';
import fetch from 'whatwg-fetch';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      points: [],
    };
  }
  populateTweets() {
    fetch('/tweets/:username', {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        Accept: 'application/json',
        ContentType: 'application/json',
      },
    })
    .then(body => {
      this.setState({
        tweets: body,
      });
    });
  }
  populatePoints() {
    fetch('/getPoints/:username', {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        Accept: 'application/json',
        ContentType: 'application/json',
      },
    })
    .then(body => {
      this.setState({
        points: body,
      });
    });
  }
  ComponentDidMount() {
    this.populateTweets();
    this.populatePoints();
  }
  render() {
    return (
      <div>
        <div className='dashboardHeader'>
          <button onClick='' />
          <h2>Dashboard</h2>
        </div>
        <div className='dashboardTweets'>
          <ul>
              Your Tweets | Your Advertisements | Your Points | Your Upcoming Rewards
            {this.state.tweets.map(tweet =>
              <li>`${tweet.tweet} | ${tweet.company} | ${tweet.points} | ${tweet.reward}`</li>
            )}
          </ul>
        </div>
        <div className='dashboardPoints'>
        </div>
      </div>
    );
  }
}

export default Dashboard;
