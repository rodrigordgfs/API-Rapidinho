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
    latitude,
    longitude,
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
    this.latitude = latitude;
    this.longitude = longitude;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.version = version;
  }

  async getByID() {
    const data = await repository.getByID(this.id);
    this.establishment = data.establishment;
    this.phone = data.phone;
    this.country = data.country;
    this.state = data.state;
    this.address = data.address;
    this.city = data.city;
    this.zipCode = data.zipCode;
    this.latitude = data.latitude;
    this.longitude = data.longitude;
    this.active = data.active;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.version = data.version;
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
      latitude: this.latitude,
      longitude: this.longitude,
    });
    this.id = data.id;
    this.active = data.active;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.version = data.version;
  }

  async patch() {
    await repository.getByID(this.id);
    const fields = [
      "establishment",
      "phone",
      "country",
      "state",
      "address",
      "city",
      "zipCode",
      "latitude",
      "longitude",
    ];
    const data = {};
    fields.forEach((field) => {
      const value = this[field];

      if (typeof value === "string" || typeof value === "number") {
        if (typeof value === "string" && value.length > 0) {
          data[field] = value;
        } else {
          data[field] = value;
        }
      }
    });

    if (Object.keys(data).length === 0) {
      throw new Error("Sem dados para atualizar");
    }

    await repository.patch(this.id, data);
  }

  async delete() {
    await repository.getByID(this.id);
    await repository.delete(this.id);
  }
}

module.exports = Establishment;
