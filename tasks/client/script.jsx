var ReactCSSTransitionGroup = React.addons.ReactCSSTransitionGroup;
var TaskList = React.createClass({
  getInitialState: function () {
    return {items: ['bring the kids to school']}
  },
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
      </div>
    );
  }
});
