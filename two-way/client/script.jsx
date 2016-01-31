var MyComponent = React.createClass({
  mixins: [Reac.addon.LinkedStateMixin],
  getInitialState: function () {
    return {
      value: 'Some Value'
    };
  },
  render: function() {
    return (
      <div>
        <h4>{this.state.value}</h4>
        <MyInput />
      </div>
    );
  }
});

var MyInput = React.createClass({

});
