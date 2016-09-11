import React from 'react';
import 'whatwg-fetch';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      points: [],
    };
  }

  componentDidMount() {
    this.populateTweets();
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
      console.log(body);
      this.setState({
        tweets: body,
      });
    });
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
