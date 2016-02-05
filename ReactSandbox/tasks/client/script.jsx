var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var TaskList = React.createClass({
  getInitialState: function(){
    return {items: ['Bring the kids to school - 7am']}
  },
  handleAdd: function(){
    var newItems =
      this.state.items.concat([prompt('Add A Task')]);
      this.setState({items: newItems});
  },
  handleRemove: function(index){
    var newItems = this.state.items;
    newItems.splice(index, 1);
    this.setState({items: newItems});
  },
  render: function(){
    var items = this.state.items.map(function(item, index){
      return (
          <div key={item} onClick={this.handleRemove.bind(this, index)}>
            {item}
          </div>
        );
    }.bind(this));
    return(
        <div>
          <button className="btn btn-primary btn-block" onClick={this.handleAdd}>Add Task</button>
          <ReactCSSTransitionGroup transitionName="tasks"
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={500}>
          {items}
          </ReactCSSTransitionGroup>
        </div>
      );
  }
});

React.render(<TaskList />, document.getElementById('tasks'));
