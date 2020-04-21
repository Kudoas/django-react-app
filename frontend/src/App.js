import React, { Component } from "react";
import styled from "@emotion/styled";

class App extends Component {
  state = {
    data: [],
    loaded: false,
    placeholder: "Loading",
  };

  componentDidMount() {
    fetch("api/lead")
      .then((response) => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then((data) => {
        this.setState(() => {
          return {
            data,
            loaded: true,
          };
        });
        console.log(data);
      });
  }

  render() {
    return (
      <StyledComponent>
        {this.state.data.map((contact) => {
          return (
            <div className="post-list">
              <li key={contact.id}>
                {contact.name} - {contact.email}
              </li>
              <li>{contact.message}</li>
            </div>
          );
        })}
        <p>さよならただ愛しき日々よ、ずっと忘れないだろう。僕は君を</p>
      </StyledComponent>
    );
  }
}

const StyledComponent = styled.div`
  li {
    color: blue;
    text-align: center;
    list-style: none;
  }
`;

export default App;
