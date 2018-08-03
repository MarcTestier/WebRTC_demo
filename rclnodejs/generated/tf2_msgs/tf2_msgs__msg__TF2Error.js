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
const TF2ErrorRefStruct = StructType({
  error: primitiveTypes.uint8,
  error_string: primitiveTypes.string,
});
const TF2ErrorRefArray = ArrayType(TF2ErrorRefStruct);
const TF2ErrorRefStructArray = StructType({
  data: TF2ErrorRefArray,
  size: ref.types.size_t,
  capacity: ref.types.size_t
});
// Define the wrapper class.
class TF2ErrorWrapper {
  constructor(other) {
    this._wrapperFields = {};
    if (typeof other === 'object' && other._refObject) {
      this._refObject = new TF2ErrorRefStruct(other._refObject.toObject());
      this._errorIntialized = true;
      this._error_stringIntialized = true;
      this._wrapperFields.error_string =  new StringWrapper(other._wrapperFields.error_string);
    } else if (typeof other !== 'undefined') {
      this._initMembers();
      translator.constructFromPlanObject(this, other);
    } else {
      this._initMembers();
    }
    this.freeze();
  }
  _initMembers() {
    this._refObject = new TF2ErrorRefStruct();
    this._errorIntialized = false;
    this._error_stringIntialized = false;
    this._wrapperFields.error_string = new StringWrapper();
  }
  static createFromRefObject(refObject) {
    let self = new TF2ErrorWrapper();
    self.copyRefObject(refObject);
    return self;
  }
  static createArray() {
    return new TF2ErrorArrayWrapper;
  }
  static get ArrayType() {
    return TF2ErrorArrayWrapper;
  }
  static get refObjectArrayType() {
    return TF2ErrorRefStructArray
  }
  static get refObjectType() {
    return TF2ErrorRefStruct;
  }
  toRawROS() {
    this.freeze(true);
    return this._refObject.ref();
  }
  freeze(own = false, checkConsistency = false) {
    if (checkConsistency) {
      if (!this._errorIntialized) {
        throw new TypeError('Invalid argument: error in TF2Error');
      }
      if (!this._error_stringIntialized) {
        throw new TypeError('Invalid argument: error_string in TF2Error');
      }
    }
    if (own) {
      this._wrapperFields.error_string.freeze(own, checkConsistency);
    }
    this._refObject.error_string = this._wrapperFields.error_string.refObject;
  }
  serialize() {
    this.freeze(false, true);
    return this._refObject.ref();
  }
  deserialize(refObject) {
    this._errorIntialized = true;
    this._refObject.error = refObject.error;
    this._error_stringIntialized = true;
    this._wrapperFields.error_string.data = refObject.error_string.data;
  }
  toPlainObject() {
    return translator.toPlainObject(this);
  }
  static freeStruct(refObject) {
    StringWrapper.freeStruct(refObject.error_string);
  }
  static destoryRawROS(msg) {
    TF2ErrorWrapper.freeStruct(msg.refObject);
  }
  static type() {
    return {pkgName: 'tf2_msgs', subFolder: 'msg', interfaceName: 'TF2Error'};
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
  get error() {
    if (!this._errorIntialized) {
      return undefined;
    }
    return this._refObject.error;
  }
  set error(value) {
    this._errorIntialized = true;
    this._refObject.error = value;
  }
  get error_string() {
    if (!this._error_stringIntialized) {
      return undefined;
    }
    return this._wrapperFields.error_string.data;
  }
  set error_string(value) {
    this._error_stringIntialized = true;
    this._wrapperFields.error_string.data = value;
  }
  copyRefObject(refObject) {
    this._refObject = new TF2ErrorRefStruct(refObject.toObject());
    this._errorIntialized = true;
    this._error_stringIntialized = true;
    this._wrapperFields.error_string.copyRefObject(this._refObject.error_string);
  }
  copy(other) {
    this._refObject = new TF2ErrorRefStruct(other._refObject.toObject());
    this._errorIntialized = true;
    this._error_stringIntialized = true;
    this._wrapperFields.error_string.copy(other._wrapperFields.error_string);
  }
  static get classType() {
    return TF2ErrorWrapper;
  }
  static get ROSMessageDef() {
    return {"constants":[{"type":"uint8","name":"NO_ERROR","value":0},{"type":"uint8","name":"LOOKUP_ERROR","value":1},{"type":"uint8","name":"CONNECTIVITY_ERROR","value":2},{"type":"uint8","name":"EXTRAPOLATION_ERROR","value":3},{"type":"uint8","name":"INVALID_ARGUMENT_ERROR","value":4},{"type":"uint8","name":"TIMEOUT_ERROR","value":5},{"type":"uint8","name":"TRANSFORM_ERROR","value":6}],"fields":[{"name":"error","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":null,"type":"uint8","stringUpperBound":null,"isPrimitiveType":true}},{"name":"error_string","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":null,"type":"string","stringUpperBound":null,"isPrimitiveType":true}}],"baseType":{"pkgName":"tf2_msgs","type":"TF2Error","stringUpperBound":null,"isPrimitiveType":false},"msgName":"TF2Error"};
  }
  hasMember(name) {
    let memberNames = ["error","error_string"];
    return memberNames.indexOf(name) !== -1;
  }
}
// Define the wrapper of array class.
class TF2ErrorArrayWrapper {
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
      throw new TypeError('Invalid argument: should provide a number to TF2ErrorArrayWrapper.size setter');
      return;
    }
    return this._resize(value);
  }
  get capacity() {
    return this._wrappers.length;
  }
  set capacity(value) {
    if (typeof value != 'number') {
      throw new TypeError('Invalid argument: should provide a number to TF2ErrorArrayWrapper.capacity setter');
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
    this._refArray = new TF2ErrorRefArray(size);
    this._refObject = new TF2ErrorRefStructArray();
    this._refObject.size = size;
    this._refObject.capacity = size;
    this._wrappers = new Array();
    for (let i = 0; i < size; i++) {
      this._wrappers.push(new TF2ErrorWrapper());
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
    if (! (other instanceof TF2ErrorArrayWrapper)) {
      throw new TypeError('Invalid argument: should provide "TF2ErrorArrayWrapper".');
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
      TF2ErrorWrapper.freeStruct(refObjectArray[index]);
    }
  }
  static get elementType() {
    return TF2ErrorWrapper;
  }
  static get isROSArray() {
    return true;
  }
  static get useTypedArray() {
    return false;
  }
  get classType() {
    return TF2ErrorArrayWrapper;
  }
}
// Define constants (7 in total)
Object.defineProperty(TF2ErrorWrapper, "NO_ERROR", {value: 0, writable: false, enumerable: true, configurable: true});
Object.defineProperty(TF2ErrorWrapper, "LOOKUP_ERROR", {value: 1, writable: false, enumerable: true, configurable: true});
Object.defineProperty(TF2ErrorWrapper, "CONNECTIVITY_ERROR", {value: 2, writable: false, enumerable: true, configurable: true});
Object.defineProperty(TF2ErrorWrapper, "EXTRAPOLATION_ERROR", {value: 3, writable: false, enumerable: true, configurable: true});
Object.defineProperty(TF2ErrorWrapper, "INVALID_ARGUMENT_ERROR", {value: 4, writable: false, enumerable: true, configurable: true});
Object.defineProperty(TF2ErrorWrapper, "TIMEOUT_ERROR", {value: 5, writable: false, enumerable: true, configurable: true});
Object.defineProperty(TF2ErrorWrapper, "TRANSFORM_ERROR", {value: 6, writable: false, enumerable: true, configurable: true});
module.exports = TF2ErrorWrapper;
/*
 * The following is the original spec object coming from parser:
{
  "constants": [
    {
      "type": "uint8",
      "name": "NO_ERROR",
      "value": 0
    },
    {
      "type": "uint8",
      "name": "LOOKUP_ERROR",
      "value": 1
    },
    {
      "type": "uint8",
      "name": "CONNECTIVITY_ERROR",
      "value": 2
    },
    {
      "type": "uint8",
      "name": "EXTRAPOLATION_ERROR",
      "value": 3
    },
    {
      "type": "uint8",
      "name": "INVALID_ARGUMENT_ERROR",
      "value": 4
    },
    {
      "type": "uint8",
      "name": "TIMEOUT_ERROR",
      "value": 5
    },
    {
      "type": "uint8",
      "name": "TRANSFORM_ERROR",
      "value": 6
    }
  ],
  "fields": [
    {
      "name": "error",
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
      "name": "error_string",
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
    "pkgName": "tf2_msgs",
    "type": "TF2Error",
    "stringUpperBound": null,
    "isPrimitiveType": false
  },
  "msgName": "TF2Error"
}
*/