// This file is automatically generated by Intel rclnodejs
//
// *** DO NOT EDIT directly
//
'use strict';
const StructType = require('ref-struct');
const ref = require('ref');
const ArrayType = require('ref-array');
const primitiveTypes = require('../../rosidl_gen/generator_primitive.js');
const deallocator = require('../../rosidl_gen/deallocator.js');
const translator = require('../../rosidl_gen/message_translator.js');
const StringWrapper = require('../../generated/std_msgs/std_msgs__msg__String.js');
const TransitionRefStruct = StructType({
  id: primitiveTypes.uint8,
  label: primitiveTypes.string,
});
const TransitionRefArray = ArrayType(TransitionRefStruct);
const TransitionRefStructArray = StructType({
  data: TransitionRefArray,
  size: ref.types.size_t,
  capacity: ref.types.size_t
});
// Define the wrapper class.
class TransitionWrapper {
  constructor(other) {
    this._wrapperFields = {};
    if (typeof other === 'object' && other._refObject) {
      this._refObject = new TransitionRefStruct(other._refObject.toObject());
      this._idIntialized = true;
      this._labelIntialized = true;
      this._wrapperFields.label =  new StringWrapper(other._wrapperFields.label);
    } else if (typeof other !== 'undefined') {
      this._initMembers();
      translator.constructFromPlanObject(this, other);
    } else {
      this._initMembers();
    }
    this.freeze();
  }
  _initMembers() {
    this._refObject = new TransitionRefStruct();
    this._idIntialized = false;
    this._labelIntialized = false;
    this._wrapperFields.label = new StringWrapper();
  }
  static createFromRefObject(refObject) {
    let self = new TransitionWrapper();
    self.copyRefObject(refObject);
    return self;
  }
  static createArray() {
    return new TransitionArrayWrapper;
  }
  static get ArrayType() {
    return TransitionArrayWrapper;
  }
  static get refObjectArrayType() {
    return TransitionRefStructArray
  }
  static get refObjectType() {
    return TransitionRefStruct;
  }
  toRawROS() {
    this.freeze(true);
    return this._refObject.ref();
  }
  freeze(own = false, checkConsistency = false) {
    if (checkConsistency) {
      if (!this._idIntialized) {
        throw new TypeError('Invalid argument: id in Transition');
      }
      if (!this._labelIntialized) {
        throw new TypeError('Invalid argument: label in Transition');
      }
    }
    if (own) {
      this._wrapperFields.label.freeze(own, checkConsistency);
    }
    this._refObject.label = this._wrapperFields.label.refObject;
  }
  serialize() {
    this.freeze(false, true);
    return this._refObject.ref();
  }
  deserialize(refObject) {
    this._idIntialized = true;
    this._refObject.id = refObject.id;
    this._labelIntialized = true;
    this._wrapperFields.label.data = refObject.label.data;
  }
  toPlainObject() {
    return translator.toPlainObject(this);
  }
  static freeStruct(refObject) {
    StringWrapper.freeStruct(refObject.label);
  }
  static destoryRawROS(msg) {
    TransitionWrapper.freeStruct(msg.refObject);
  }
  static type() {
    return {pkgName: 'lifecycle_msgs', subFolder: 'msg', interfaceName: 'Transition'};
  }
  static isPrimitive() {
    return false;
  }
  static get isROSArray() {
    return false;
  }
  get refObject() {
    return this._refObject;
  }
  get id() {
    if (!this._idIntialized) {
      return undefined;
    }
    return this._refObject.id;
  }
  set id(value) {
    this._idIntialized = true;
    this._refObject.id = value;
  }
  get label() {
    if (!this._labelIntialized) {
      return undefined;
    }
    return this._wrapperFields.label.data;
  }
  set label(value) {
    this._labelIntialized = true;
    this._wrapperFields.label.data = value;
  }
  copyRefObject(refObject) {
    this._refObject = new TransitionRefStruct(refObject.toObject());
    this._idIntialized = true;
    this._labelIntialized = true;
    this._wrapperFields.label.copyRefObject(this._refObject.label);
  }
  copy(other) {
    this._refObject = new TransitionRefStruct(other._refObject.toObject());
    this._idIntialized = true;
    this._labelIntialized = true;
    this._wrapperFields.label.copy(other._wrapperFields.label);
  }
  static get classType() {
    return TransitionWrapper;
  }
  static get ROSMessageDef() {
    return {"constants":[{"type":"uint8","name":"TRANSITION_CREATE","value":0},{"type":"uint8","name":"TRANSITION_CONFIGURE","value":1},{"type":"uint8","name":"TRANSITION_CLEANUP","value":2},{"type":"uint8","name":"TRANSITION_ACTIVATE","value":3},{"type":"uint8","name":"TRANSITION_DEACTIVATE","value":4},{"type":"uint8","name":"TRANSITION_SHUTDOWN","value":5},{"type":"uint8","name":"TRANSITION_DESTROY","value":6},{"type":"uint8","name":"TRANSITION_ON_CONFIGURE_SUCCESS","value":10},{"type":"uint8","name":"TRANSITION_ON_CONFIGURE_FAILURE","value":11},{"type":"uint8","name":"TRANSITION_ON_CONFIGURE_ERROR","value":12},{"type":"uint8","name":"TRANSITION_ON_CLEANUP_SUCCESS","value":20},{"type":"uint8","name":"TRANSITION_ON_CLEANUP_FAILURE","value":21},{"type":"uint8","name":"TRANSITION_ON_CLEANUP_ERROR","value":22},{"type":"uint8","name":"TRANSITION_ON_ACTIVATE_SUCCESS","value":30},{"type":"uint8","name":"TRANSITION_ON_ACTIVATE_FAILURE","value":31},{"type":"uint8","name":"TRANSITION_ON_ACTIVATE_ERROR","value":32},{"type":"uint8","name":"TRANSITION_ON_DEACTIVATE_SUCCESS","value":40},{"type":"uint8","name":"TRANSITION_ON_DEACTIVATE_FAILURE","value":41},{"type":"uint8","name":"TRANSITION_ON_DEACTIVATE_ERROR","value":42},{"type":"uint8","name":"TRANSITION_UNCONFIGURED_SHUTDOWN","value":50},{"type":"uint8","name":"TRANSITION_INACTIVE_SHUTDOWN","value":51},{"type":"uint8","name":"TRANSITION_ACTIVE_SHUTDOWN","value":52},{"type":"uint8","name":"TRANSITION_ON_SHUTDOWN_SUCCESS","value":53},{"type":"uint8","name":"TRANSITION_ON_SHUTDOWN_FAILURE","value":54},{"type":"uint8","name":"TRANSITION_ON_SHUTDOWN_ERROR","value":55},{"type":"uint8","name":"TRANSITION_ON_ERROR_SUCCESS","value":60},{"type":"uint8","name":"TRANSITION_ON_ERROR_FAILURE","value":61},{"type":"uint8","name":"TRANSITION_ON_ERROR_ERROR","value":62},{"type":"uint8","name":"TRANSITION_CALLBACK_SUCCESS","value":97},{"type":"uint8","name":"TRANSITION_CALLBACK_FAILURE","value":98},{"type":"uint8","name":"TRANSITION_CALLBACK_ERROR","value":99}],"fields":[{"name":"id","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":null,"type":"uint8","stringUpperBound":null,"isPrimitiveType":true}},{"name":"label","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":null,"type":"string","stringUpperBound":null,"isPrimitiveType":true}}],"baseType":{"pkgName":"lifecycle_msgs","type":"Transition","stringUpperBound":null,"isPrimitiveType":false},"msgName":"Transition"};
  }
  hasMember(name) {
    let memberNames = ["id","label"];
    return memberNames.indexOf(name) !== -1;
  }
}
// Define the wrapper of array class.
class TransitionArrayWrapper {
  constructor(size = 0) {
    this._resize(size);
  }
  toRawROS() {
    return this._refObject.ref();
  }
  fill(values) {
    const length = values.length;
    this._resize(length);
    values.forEach((value, index) => {
      this._wrappers[index].copy(value);
    });
  }
  // Put all data currently stored in `this._wrappers` into `this._refObject`
  freeze(own) {
    this._wrappers.forEach((wrapper, index) => {
      wrapper.freeze(own);
      this._refArray[index] = wrapper.refObject;
    });
    this._refObject.size = this._wrappers.length;
    this._refObject.capacity = this._wrappers.length;
    this._refObject.data = this._refArray.buffer;
  }
  get refObject() {
    return this._refObject;
  }
  get data() {
    return this._wrappers;
  }
  get size() {
    return this._wrappers.length;
  }
  set size(value) {
    if (typeof value != 'number') {
      throw new TypeError('Invalid argument: should provide a number to TransitionArrayWrapper.size setter');
      return;
    }
    return this._resize(value);
  }
  get capacity() {
    return this._wrappers.length;
  }
  set capacity(value) {
    if (typeof value != 'number') {
      throw new TypeError('Invalid argument: should provide a number to TransitionArrayWrapper.capacity setter');
    }
    return this._resize(value);
  }
  get refObject() {
    return this._refObject;
  }
  _resize(size) {
    if (size < 0) {
      throw new RangeError('Invalid argument: should provide a positive number');
      return;
    }
    this._refArray = new TransitionRefArray(size);
    this._refObject = new TransitionRefStructArray();
    this._refObject.size = size;
    this._refObject.capacity = size;
    this._wrappers = new Array();
    for (let i = 0; i < size; i++) {
      this._wrappers.push(new TransitionWrapper());
    }
  }
  // Copy all data from `this._refObject` into `this._wrappers`
  copyRefObject(refObject) {
    this._refObject = refObject;
    let refObjectArray = this._refObject.data;
    refObjectArray.length = this._refObject.size;
    this._resize(this._refObject.size);
    for (let index = 0; index < this._refObject.size; index++) {
      this._wrappers[index].copyRefObject(refObjectArray[index]);
    }
  }
  copy(other) {
    if (! (other instanceof TransitionArrayWrapper)) {
      throw new TypeError('Invalid argument: should provide "TransitionArrayWrapper".');
    }
    this._resize(other.size);
    // Array deep copy
    other._wrappers.forEach((wrapper, index) => {
      this._wrappers[index].copy(wrapper);
    });
  }
  static freeArray(refObject) {
    let refObjectArray = refObject.data;
    refObjectArray.length = refObject.size;
    for (let index = 0; index < refObject.size; index++) {
      TransitionWrapper.freeStruct(refObjectArray[index]);
    }
  }
  static get elementType() {
    return TransitionWrapper;
  }
  static get isROSArray() {
    return true;
  }
  static get useTypedArray() {
    return false;
  }
  get classType() {
    return TransitionArrayWrapper;
  }
}
// Define constants (31 in total)
Object.defineProperty(TransitionWrapper, "TRANSITION_CREATE", {value: 0, writable: false, enumerable: true, configurable: true});
Object.defineProperty(TransitionWrapper, "TRANSITION_CONFIGURE", {value: 1, writable: false, enumerable: true, configurable: true});
Object.defineProperty(TransitionWrapper, "TRANSITION_CLEANUP", {value: 2, writable: false, enumerable: true, configurable: true});
Object.defineProperty(TransitionWrapper, "TRANSITION_ACTIVATE", {value: 3, writable: false, enumerable: true, configurable: true});
Object.defineProperty(TransitionWrapper, "TRANSITION_DEACTIVATE", {value: 4, writable: false, enumerable: true, configurable: true});
Object.defineProperty(TransitionWrapper, "TRANSITION_SHUTDOWN", {value: 5, writable: false, enumerable: true, configurable: true});
Object.defineProperty(TransitionWrapper, "TRANSITION_DESTROY", {value: 6, writable: false, enumerable: true, configurable: true});
Object.defineProperty(TransitionWrapper, "TRANSITION_ON_CONFIGURE_SUCCESS", {value: 10, writable: false, enumerable: true, configurable: true});
Object.defineProperty(TransitionWrapper, "TRANSITION_ON_CONFIGURE_FAILURE", {value: 11, writable: false, enumerable: true, configurable: true});
Object.defineProperty(TransitionWrapper, "TRANSITION_ON_CONFIGURE_ERROR", {value: 12, writable: false, enumerable: true, configurable: true});
Object.defineProperty(TransitionWrapper, "TRANSITION_ON_CLEANUP_SUCCESS", {value: 20, writable: false, enumerable: true, configurable: true});
Object.defineProperty(TransitionWrapper, "TRANSITION_ON_CLEANUP_FAILURE", {value: 21, writable: false, enumerable: true, configurable: true});
Object.defineProperty(TransitionWrapper, "TRANSITION_ON_CLEANUP_ERROR", {value: 22, writable: false, enumerable: true, configurable: true});
Object.defineProperty(TransitionWrapper, "TRANSITION_ON_ACTIVATE_SUCCESS", {value: 30, writable: false, enumerable: true, configurable: true});
Object.defineProperty(TransitionWrapper, "TRANSITION_ON_ACTIVATE_FAILURE", {value: 31, writable: false, enumerable: true, configurable: true});
Object.defineProperty(TransitionWrapper, "TRANSITION_ON_ACTIVATE_ERROR", {value: 32, writable: false, enumerable: true, configurable: true});
Object.defineProperty(TransitionWrapper, "TRANSITION_ON_DEACTIVATE_SUCCESS", {value: 40, writable: false, enumerable: true, configurable: true});
Object.defineProperty(TransitionWrapper, "TRANSITION_ON_DEACTIVATE_FAILURE", {value: 41, writable: false, enumerable: true, configurable: true});
Object.defineProperty(TransitionWrapper, "TRANSITION_ON_DEACTIVATE_ERROR", {value: 42, writable: false, enumerable: true, configurable: true});
Object.defineProperty(TransitionWrapper, "TRANSITION_UNCONFIGURED_SHUTDOWN", {value: 50, writable: false, enumerable: true, configurable: true});
Object.defineProperty(TransitionWrapper, "TRANSITION_INACTIVE_SHUTDOWN", {value: 51, writable: false, enumerable: true, configurable: true});
Object.defineProperty(TransitionWrapper, "TRANSITION_ACTIVE_SHUTDOWN", {value: 52, writable: false, enumerable: true, configurable: true});
Object.defineProperty(TransitionWrapper, "TRANSITION_ON_SHUTDOWN_SUCCESS", {value: 53, writable: false, enumerable: true, configurable: true});
Object.defineProperty(TransitionWrapper, "TRANSITION_ON_SHUTDOWN_FAILURE", {value: 54, writable: false, enumerable: true, configurable: true});
Object.defineProperty(TransitionWrapper, "TRANSITION_ON_SHUTDOWN_ERROR", {value: 55, writable: false, enumerable: true, configurable: true});
Object.defineProperty(TransitionWrapper, "TRANSITION_ON_ERROR_SUCCESS", {value: 60, writable: false, enumerable: true, configurable: true});
Object.defineProperty(TransitionWrapper, "TRANSITION_ON_ERROR_FAILURE", {value: 61, writable: false, enumerable: true, configurable: true});
Object.defineProperty(TransitionWrapper, "TRANSITION_ON_ERROR_ERROR", {value: 62, writable: false, enumerable: true, configurable: true});
Object.defineProperty(TransitionWrapper, "TRANSITION_CALLBACK_SUCCESS", {value: 97, writable: false, enumerable: true, configurable: true});
Object.defineProperty(TransitionWrapper, "TRANSITION_CALLBACK_FAILURE", {value: 98, writable: false, enumerable: true, configurable: true});
Object.defineProperty(TransitionWrapper, "TRANSITION_CALLBACK_ERROR", {value: 99, writable: false, enumerable: true, configurable: true});
module.exports = TransitionWrapper;
/*
 * The following is the original spec object coming from parser:
{
  "constants": [
    {
      "type": "uint8",
      "name": "TRANSITION_CREATE",
      "value": 0
    },
    {
      "type": "uint8",
      "name": "TRANSITION_CONFIGURE",
      "value": 1
    },
    {
      "type": "uint8",
      "name": "TRANSITION_CLEANUP",
      "value": 2
    },
    {
      "type": "uint8",
      "name": "TRANSITION_ACTIVATE",
      "value": 3
    },
    {
      "type": "uint8",
      "name": "TRANSITION_DEACTIVATE",
      "value": 4
    },
    {
      "type": "uint8",
      "name": "TRANSITION_SHUTDOWN",
      "value": 5
    },
    {
      "type": "uint8",
      "name": "TRANSITION_DESTROY",
      "value": 6
    },
    {
      "type": "uint8",
      "name": "TRANSITION_ON_CONFIGURE_SUCCESS",
      "value": 10
    },
    {
      "type": "uint8",
      "name": "TRANSITION_ON_CONFIGURE_FAILURE",
      "value": 11
    },
    {
      "type": "uint8",
      "name": "TRANSITION_ON_CONFIGURE_ERROR",
      "value": 12
    },
    {
      "type": "uint8",
      "name": "TRANSITION_ON_CLEANUP_SUCCESS",
      "value": 20
    },
    {
      "type": "uint8",
      "name": "TRANSITION_ON_CLEANUP_FAILURE",
      "value": 21
    },
    {
      "type": "uint8",
      "name": "TRANSITION_ON_CLEANUP_ERROR",
      "value": 22
    },
    {
      "type": "uint8",
      "name": "TRANSITION_ON_ACTIVATE_SUCCESS",
      "value": 30
    },
    {
      "type": "uint8",
      "name": "TRANSITION_ON_ACTIVATE_FAILURE",
      "value": 31
    },
    {
      "type": "uint8",
      "name": "TRANSITION_ON_ACTIVATE_ERROR",
      "value": 32
    },
    {
      "type": "uint8",
      "name": "TRANSITION_ON_DEACTIVATE_SUCCESS",
      "value": 40
    },
    {
      "type": "uint8",
      "name": "TRANSITION_ON_DEACTIVATE_FAILURE",
      "value": 41
    },
    {
      "type": "uint8",
      "name": "TRANSITION_ON_DEACTIVATE_ERROR",
      "value": 42
    },
    {
      "type": "uint8",
      "name": "TRANSITION_UNCONFIGURED_SHUTDOWN",
      "value": 50
    },
    {
      "type": "uint8",
      "name": "TRANSITION_INACTIVE_SHUTDOWN",
      "value": 51
    },
    {
      "type": "uint8",
      "name": "TRANSITION_ACTIVE_SHUTDOWN",
      "value": 52
    },
    {
      "type": "uint8",
      "name": "TRANSITION_ON_SHUTDOWN_SUCCESS",
      "value": 53
    },
    {
      "type": "uint8",
      "name": "TRANSITION_ON_SHUTDOWN_FAILURE",
      "value": 54
    },
    {
      "type": "uint8",
      "name": "TRANSITION_ON_SHUTDOWN_ERROR",
      "value": 55
    },
    {
      "type": "uint8",
      "name": "TRANSITION_ON_ERROR_SUCCESS",
      "value": 60
    },
    {
      "type": "uint8",
      "name": "TRANSITION_ON_ERROR_FAILURE",
      "value": 61
    },
    {
      "type": "uint8",
      "name": "TRANSITION_ON_ERROR_ERROR",
      "value": 62
    },
    {
      "type": "uint8",
      "name": "TRANSITION_CALLBACK_SUCCESS",
      "value": 97
    },
    {
      "type": "uint8",
      "name": "TRANSITION_CALLBACK_FAILURE",
      "value": 98
    },
    {
      "type": "uint8",
      "name": "TRANSITION_CALLBACK_ERROR",
      "value": 99
    }
  ],
  "fields": [
    {
      "name": "id",
      "type": {
        "isArray": false,
        "arraySize": null,
        "isUpperBound": false,
        "isDynamicArray": false,
        "isFixedSizeArray": false,
        "pkgName": null,
        "type": "uint8",
        "stringUpperBound": null,
        "isPrimitiveType": true
      }
    },
    {
      "name": "label",
      "type": {
        "isArray": false,
        "arraySize": null,
        "isUpperBound": false,
        "isDynamicArray": false,
        "isFixedSizeArray": false,
        "pkgName": null,
        "type": "string",
        "stringUpperBound": null,
        "isPrimitiveType": true
      }
    }
  ],
  "baseType": {
    "pkgName": "lifecycle_msgs",
    "type": "Transition",
    "stringUpperBound": null,
    "isPrimitiveType": false
  },
  "msgName": "Transition"
}
*/