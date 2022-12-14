import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <div className="filter-result">{this.props.count} Items</div>
        <div className="filter-sort">
          Orden{" "}
          <select value={this.props.sort} onChange={this.props.sortProducts}>
            <option>Recientes</option>
            <option value="lowest">más bajo</option>
            <option value="highest">más alto</option>
          </select>
        </div>
        <div className="filter-size">
          Filtro{" "}
          <select value={this.props.size} onChange={this.props.filterProducts}>
            <option value="">Todos</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
      </div>
    );
  }
}
