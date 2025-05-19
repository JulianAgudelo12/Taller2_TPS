
/**
 * @class Pokenea
 * 
 * A simple data model for a “Pokenea” with the following fields:
 * 
 * @param {number} id         - Unique numeric identifier for this Pokenea.
 * @param {string} name       - The name of the Pokenea.
 * @param {number} height     - Height of the Pokenea in meters.
 * @param {string} abilities  - Primary ability or skill of the Pokenea.
 * @param {string} image      - URL pointing to the Pokenea’s image.
 * @param {string} phrase     - A signature phrase or motto.
 * 
 */

class Pokenea {
  constructor({ id, name, height, abilities, image, phrase }) {
    this._id        = id;
    this._name      = name;
    this._height    = height;
    this._abilities = abilities;
    this._image     = image;
    this._phrase    = phrase;
  }

  // —— Getters & Setters —— 

   /**
   * @returns {number} 
   */
  get id() {
    return this._id;
  }

  /**
   * @param {number} id
   */
  set id(id) {
    this._id = id;
  }

  /**
   * @returns {string} 
   */
  get name() {
    return this._name;
  }

  /**
   * @param {string} name
   */
  set name(name) {
    this._name = name;
  }

  /**
   * @returns {number}
   */
  get height() {
    return this._height;
  }

  /**
   * @param {number} height
   */
  set height(height) {
    this._height = height;
  }

  /**
   * @returns {string}
   */
  get abilities() {
    return this._abilities;
  }

  /**
   * @param {string} abilities
   */
  set abilities(abilities) {
    this._abilities = abilities;
  }

  /**
   * @returns {string}
   */
  get image() {
    return this._image;
  }

  /**
   * @param {string} pathImage
   */
  set image(pathImage) {
    this._image = pathImage;
  }

  /**
   * @returns {string}
   */
  get phrase() {
    return this._phrase;
  }

  /**
   * @param {string} phrase
   */
  set phrase(phrase) {
    this._phrase = phrase;
  }
}

module.exports = Pokenea;
