/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the DeviceSetConfiguration class.
 * @constructor
 * @member {uuid} [id] The unique id of the device configuration
 * 
 * @member {object} [image]
 * 
 * @member {string} [image.thumb]
 * 
 * @member {object} [model]
 * 
 * @member {string} [model.name]
 * 
 * @member {string} [model.manufacturer]
 * 
 * @member {string} [model.releaseDate]
 * 
 * @member {string} [model.formFactor]
 * 
 * @member {string} [os]
 * 
 */
function DeviceSetConfiguration() {
}

/**
 * Defines the metadata of DeviceSetConfiguration
 *
 * @returns {object} metadata of DeviceSetConfiguration
 *
 */
DeviceSetConfiguration.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'DeviceSetConfiguration',
    type: {
      name: 'Composite',
      className: 'DeviceSetConfiguration',
      modelProperties: {
        id: {
          required: false,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        image: {
          required: false,
          serializedName: 'image',
          type: {
            name: 'Composite',
            className: 'DeviceSetConfigurationImage'
          }
        },
        model: {
          required: false,
          serializedName: 'model',
          type: {
            name: 'Composite',
            className: 'DeviceSetModel'
          }
        },
        os: {
          required: false,
          serializedName: 'os',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = DeviceSetConfiguration;
