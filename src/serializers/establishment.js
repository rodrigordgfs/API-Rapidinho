"use strict";

const repository = require("../repositories/establishment");

class Establishment {
  constructor({
    id,
    establishment,
    phone,
    country,
    state,
    city,
    zipCode,
    address,
    active,
    createdAt,
    updatedAt,
    version,
  }) {
    this.id = id;
    this.establishment = establishment;
    this.phone = phone;
    this.country = country;
    this.state = state;
    this.city = city;
    this.zipCode = zipCode;
    this.active = active;
    this.address = address;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.version = version;
  }

  async post() {
    const data = await repository.post({
      establishment: this.establishment,
      phone: this.phone,
      country: this.country,
      state: this.state,
      address: this.address,
      city: this.city,
      zipCode: this.zipCode,
    });
    this.id = data.id;
    this.active = data.active;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.version = data.version;
  }
}

module.exports = Establishment;
