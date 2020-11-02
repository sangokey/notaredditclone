import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import Group from "../components/Group";
import Header from '../components/Header';

const Groups = ({ match }) => {
    
    const groupData = [
  {
    group_id: 1,
    name: "movies",
    description:
      "News & Discussion about Major Motion Pictures",
    create_date: "2020-10-01",
  },
  {
    group_id: 2,
    name: "gaming",
    description:
      "A subreddit for (almost) anything related to games - video games, board games, card games, etc. (but not sports).",
    create_date: "2020-11-01",
  },
  {
    group_id: 3,
    name: "computerscience",
    description:
      "Welcome to computerscience.",
    create_date: "2020-06-23",
  },
  {
    group_id: 4,
    name: "politics",
    description:
      "/r/Politics is for news and discussion about U.S. politics.",
    create_date: "2007-08-06",
  },
    ];

    const { url } = useRouteMatch();

    /* Create an array of `<li>` items for each group */
    const linkList = groupData.map((group) => {
        return (
        <li key={group.group_id}>
            <Link to={`${url}/${group.group_id}`}>{group.name}</Link>
        </li>
        );
    });
  

  return (
    <div>
      <div>
        <div>
          <h3>Groups</h3>
          <ul>{linkList}</ul>
        </div>
      </div>

      <Route path={`${url}/:groupId`}>
        <Group data={groupData} />
      </Route>
      <Route exact path={url}>
        <p>Please select a group.</p>
      </Route>

      <Link to ="/creategroup">
          <button type ="button">
              Create Group
          </button>
      </Link>
    </div>
  );
};

export default Groups;