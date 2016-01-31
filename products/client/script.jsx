var Products = React.createClass({
  handleProductSubmit: function (product) {
    var products = this.state.productData;
    var newProducts = products.concat([product]);
    this.setState({productData: newProducts});
    $.ajax({
      url: this.state.url,
      dataType: 'json',
      type: 'POST',
      data: product,
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
        <div className="row">
          <div className="col-md-6">
            <ProductForm onProductSubmit={this.handleProductSubmit}/>
          </div>
          <div className="col-md-6">
            <ProductList productData={this.state.productData}/>
          </div>
        </div>
      </div>
    );
  }
});

var ProductForm = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var product = {
      id: this.refs.id.value.trim(),
      name: this.refs.name.value.trim(),
      description: this.refs.description.value.trim(),
      price: this.refs.price.value.trim(),
      buy_url: this.refs.buy.value.trim(),
      image_url: this.refs.image.value.trim()
    }

    if (!product.id || !product.name) {
      alert('please fill id and name');
      return;
    }
    this.props.onProductSubmit(product);
    this.refs.id.value = "";
    this.refs.name.value = "";
    this.refs.description.value = "";
    this.refs.price.value = "";
    this.refs.buy.value = "";
    this.refs.image.value = "";

  },
  render: function () {
    return(
      <div>
        <h3>Add Product</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="id" ref="id"></input>
            <input type="text" className="form-control" placeholder="name" ref="name"></input>
            <textarea type="text" className="form-control" placeholder="description" ref="description"></textarea>
            <input type="text" className="form-control" placeholder="price" ref="price"></input>
            <input type="text" className="form-control" placeholder="buy" ref="buy"></input>
            <input type="text" className="form-control" placeholder="image" ref="image"></input>
            <button type="submit">Submit</button>
          </div>
        </form>
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
      <div className="well product">
        <div className="row">
          <div className="col-md-4">
            <img className="img-responsive" src={this.props.productFields.image_url} />
          </div>
          <div className="col-md-8">
            <h3>{this.props.productFields.name}</h3>
            <p>{this.props.productFields.description}</p>
          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <Products />,
  document.getElementById('products')
);
