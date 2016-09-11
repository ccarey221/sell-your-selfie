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
    fetch('/getpoints/sell_your_selfi', {
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

  ComponentDidMount() {
    this.populateTweets();
  }

  render() {
    return (
      <div>
        <div className="dashboardHeader">
          <h2>Dashboard</h2>
        </div>
        <div className="dashboardTweets">
          <ul>
              Your Advertisements | Your Points
            {this.state.tweets.map(tweet =>
              <li>`${tweet.name} | ${tweet.points}`</li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default Dashboard;
