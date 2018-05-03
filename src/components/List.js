import React from "react";

export class List extends React.Component {
  constructor(props) {
    super(props);
  }

  // 受け取った props を元に
  // render の内容を作成する
  render() {
    const list = this.props.todos.map(todo => {
      return (
        <li>
          #{todo.id} {todo.title}
        </li>
      );
    });

    return (
      <div>
        <h2>List</h2>
        <ul>{list}</ul>
      </div>
    );
  }
}
