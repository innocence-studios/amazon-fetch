
module.exports = class Amazon {
  id;
  name;
  price;
  rating;
  about;
  data;

  /**
   * 
   * @param {String} id_ 
   * @param {String} name_ 
   * @param {Number} price_ 
   * @param {String} description_ 
   * @param {String} brand_ 
   * @param {String} manufacturer_ 
   * @param {Number} rating_ 
   * @param {String[]} about_ 
   * @param {ObjectConstructor} data_ 
   */
  constructor(id_, name_, price_, rating_, about_, data_) {
    this.id = id_;
    this.name = name_;
    this.price = price_;
    this.rating = rating_;
    this.about = about_;
    this.data = data_;
  };
};
