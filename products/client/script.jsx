var Products = React.createClass({
  loadProductData: function () {
    $.ajax({
      url: this.state.url,
      dataType: 'json',
      cache: false,
      success: function (data) {
        console.log(data);
        this.setState({
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
        <ProductList productData={this.state.productData}/>
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
    var productNodes = this.props.productData.map(function (product, index) {
      var productFields = {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        buy_url: product.buy_url,
        image_url: product.image_url
      }
      return(
        <Product productFields={productFields}/>
      );
    });
    return(
      <div>
        {productNodes}
      </div>
    );
  }
});

var Product = React.createClass({
  render: function () {
    return(
      <div>
        <h3>{this.props.productFields.name}</h3>
      </div>
    );
  }
});

ReactDOM.render(
  <Products />,
  document.getElementById('products')
);
