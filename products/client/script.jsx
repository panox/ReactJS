var Products = React.createClass({
  loadProductData: function () {
    $.ajax({
      url: this.state.url,
      dataType: 'json',
      cache: false,
      success: function (data) {
        console.log(data);
        setState({
          productData: data
        });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
      }.bind(this)
    });
  },
  getDefaultprops: function () {
    return {
      interval: 2000
    };
  },
  getInitialState: function () {
    return {
      productData: [],
      url: "/api/products"
    };
  },
  componentDidMount: function () {
    this.loadProductData();
  },
  render: function () {
    return(
      <div>
        <h2>Products</h2>
        <ProductForm />
        <ProductList />
      </div>
    );
  }
});

var ProductForm = React.createClass({
  render: function () {
    return(
      <div>
        Form
      </div>
    );
  }
});

var ProductList = React.createClass({
  render: function () {
    return(
      <div>
        List
      </div>
    );
  }
});

ReactDOM.render(
  <Products />,
  document.getElementById('products')
);
