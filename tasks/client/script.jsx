var ReactCSSTransitionGroup = React.addons.ReactCSSTransitionGroup;
var TaskList = React.createClass({
  getInitialState: function () {
    return {items: ['bring the kids to school']}
  },
  handdleAdd: function () {
    var newItems = this.state.items.concat([prompt('Add a task')]);
    this.setState({
      items: newItems
    });
  },
  handleRemove: function () {

  }
  render: function () {
    var items = this.state.items.map(function (item, index) {
      return(
        <div key={item} onClick={this.handleRemove.bind(this, index)}>
          {item}
        </div>
      );
    }.bind(this));
    return (
      <div>
        <button className="btn btn-primary btn-block" onClick={this.handdleAdd}>Add Task</button>
        <ReactCSSTransitionGroup tranistionName="tasks" tranistionTimeout={1000}
        tranistionLeaveTimeout={500}>
        {items}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});
ReactDOM.render(<TaskList />, document.getElementById('tasks'));
