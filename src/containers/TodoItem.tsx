import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import environment from '../environment/relayEnvironment';
// import graphql from 'babel-plugin-relay/macro';
// import { ExampleQuery } from "__generated__/ExampleQuery.graphql"

export default class TodoItem extends React.Component {
    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={graphql`
                query getProducts {
                    res
                    errors
                    data {
                        ID
                        Name
                        Price
                        Cost
                        Description
                        Img
                        Update_time
                    }
              }
        `}
                variables={{}}
                render={({ error, props }) => {
                    if (error) {
                        return <div>Error!</div>;
                    }
                    if (!props) {
                        return <div>Loading...</div>;
                    }
                    return <div>User ID: {props.data}</div>;
                }}
            />
        );
    }
}