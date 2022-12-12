import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import factory from "../ethereum/factory";
import Layout from "../components/Layout";
import { Link } from "../routes";
import Campaign from "../ethereum/campaign";
import HeaderBelow from "../components/HeaderBelow";
import Working from "../components/Working";
class CampaignIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: null,
      summary: null,
    };
  }
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns };
  }
  async componentDidMount() {
    const c = Campaign(this.props.campaigns[0]);
    const summary = await Promise.all(
      this.props.campaigns.map((campaign, i) =>
        Campaign(this.props.campaigns[i]).methods.getSummary().call()
      )
    );
    this.setState({ summary });
  }
  renderCampaigns() {
    let summ;
    const items = this.props.campaigns.map((address, i) => {
      if (this.state.summary) summ = this.state.summary[i];
      else summ = { 5: "null", 7: "null" };
      return {
        key: i,
        image: <img src={summ[7]} style={{ width: 150 }} />,
        header: summ[5],
        meta: `by ` + address,
        description: (
          <div>
            <Link route={`/campaigns/${address}`}>
              <a>View Campaign &nbsp;</a>
            </Link>
            {/* <a
              href={`http://localhost:8000/?name=${summ[5]}&description=${summ[6]}`}
            >
              Coummunity
            </a> */}
          </div>
        ),
        fluid: true,
        style: { overflowWrap: "break-word" },
      };
    });

    return <Card.Group items={items} />;
  }
  render() {
    return (
      <>
        <Layout>
          <div>
            <HeaderBelow />
            <div className="open-capaigns-box">
              <h3 className="open-campaigns">✨Open Campaigns</h3>
              <br></br>
            </div>
            {this.renderCampaigns()}
            <Working />
          </div>
        </Layout>
      </>
    );
  }
}

export default CampaignIndex;
