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
const MultiArrayLayoutWrapper = require('../../generated/std_msgs/std_msgs__msg__MultiArrayLayout.js');
const Int16Wrapper = require('../../generated/std_msgs/std_msgs__msg__Int16.js');
const Int16MultiArrayRefStruct = StructType({
  layout: MultiArrayLayoutWrapper.refObjectType,
  data: Int16Wrapper.refObjectArrayType,
});
const Int16MultiArrayRefArray = ArrayType(Int16MultiArrayRefStruct);
const Int16MultiArrayRefStructArray = StructType({
  data: Int16MultiArrayRefArray,
  size: ref.types.size_t,
  capacity: ref.types.size_t
});
// Define the wrapper class.
class Int16MultiArrayWrapper {
  constructor(other) {
    this._wrapperFields = {};
    if (typeof other === 'object' && other._refObject) {
      this._refObject = new Int16MultiArrayRefStruct(other._refObject.toObject());
      this._wrapperFields.layout =  new MultiArrayLayoutWrapper(other._wrapperFields.layout);
      this._wrapperFields.data = Int16Wrapper.createArray();
      this._wrapperFields.data.copy(other._wrapperFields.data);
    } else if (typeof other !== 'undefined') {
      this._initMembers();
      translator.constructFromPlanObject(this, other);
    } else {
      this._initMembers();
    }
    this.freeze();
  }
  _initMembers() {
    this._refObject = new Int16MultiArrayRefStruct();
    this._wrapperFields.layout = new MultiArrayLayoutWrapper();
    this._wrapperFields.data = Int16Wrapper.createArray();
  }
  static createFromRefObject(refObject) {
    let self = new Int16MultiArrayWrapper();
    self.copyRefObject(refObject);
    return self;
  }
  static createArray() {
    return new Int16MultiArrayArrayWrapper;
  }
  static get ArrayType() {
    return Int16MultiArrayArrayWrapper;
  }
  static get refObjectArrayType() {
    return Int16MultiArrayRefStructArray
  }
  static get refObjectType() {
    return Int16MultiArrayRefStruct;
  }
  toRawROS() {
    this.freeze(true);
    return this._refObject.ref();
  }
  freeze(own = false, checkConsistency = false) {
    if (checkConsistency) {
    }
    this._wrapperFields.layout.freeze(own, checkConsistency);
    this._refObject.layout = this._wrapperFields.layout.refObject;
    this._wrapperFields.data.freeze(own, checkConsistency);
    this._refObject.data = this._wrapperFields.data.refObject;
  }
  serialize() {
    this.freeze(false, true);
    return this._refObject.ref();
  }
  deserialize(refObject) {
    this._wrapperFields.layout.copyRefObject(refObject.layout);
    this._wrapperFields.data.copyRefObject(refObject.data);
  }
  toPlainObject() {
    return translator.toPlainObject(this);
  }
  static freeStruct(refObject) {
    MultiArrayLayoutWrapper.freeStruct(refObject.layout);
    if (refObject.data.size != 0) {
      Int16Wrapper.ArrayType.freeArray(refObject.data);
      if (Int16Wrapper.ArrayType.useTypedArray) {
        deallocator.delayFreeStructMember(refObject.data, Int16Wrapper.refObjectArrayType, 'data');
      } else {
        deallocator.freeStructMember(refObject.data, Int16Wrapper.refObjectArrayType, 'data');
      }
    }
  }
  static destoryRawROS(msg) {
    Int16MultiArrayWrapper.freeStruct(msg.refObject);
  }
  static type() {
    return {pkgName: 'std_msgs', subFolder: 'msg', interfaceName: 'Int16MultiArray'};
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
  get layout() {
    return this._wrapperFields.layout;
  }
  set layout(value) {
    this._wrapperFields.layout.copy(value);
  }
  get data() {
    return this._wrapperFields['data'].data;
  }
  set data(value) {
    this._wrapperFields['data'].fill(value);
  }
  copyRefObject(refObject) {
    this._refObject = new Int16MultiArrayRefStruct(refObject.toObject());
    this._wrapperFields.layout.copyRefObject(this._refObject.layout);
    this._wrapperFields.data.copyRefObject(this._refObject.data);
  }
  copy(other) {
    this._refObject = new Int16MultiArrayRefStruct(other._refObject.toObject());
    this._wrapperFields.layout.copy(other._wrapperFields.layout);
    this._wrapperFields.data.copy(other._wrapperFields.data);
  }
  static get classType() {
    return Int16MultiArrayWrapper;
  }
  static get ROSMessageDef() {
    return {"constants":[],"fields":[{"name":"layout","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":"std_msgs","type":"MultiArrayLayout","stringUpperBound":null,"isPrimitiveType":false}},{"name":"data","type":{"isArray":true,"arraySize":null,"isUpperBound":false,"isDynamicArray":true,"isFixedSizeArray":null,"pkgName":null,"type":"int16","stringUpperBound":null,"isPrimitiveType":true}}],"baseType":{"pkgName":"std_msgs","type":"Int16MultiArray","stringUpperBound":null,"isPrimitiveType":false},"msgName":"Int16MultiArray"};
  }
  hasMember(name) {
    let memberNames = ["layout","data"];
    return memberNames.indexOf(name) !== -1;
  }
}
// Define the wrapper of array class.
class Int16MultiArrayArrayWrapper {
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
      throw new TypeError('Invalid argument: should provide a number to Int16MultiArrayArrayWrapper.size setter');
      return;
    }
    return this._resize(value);
  }
  get capacity() {
    return this._wrappers.length;
  }
  set capacity(value) {
    if (typeof value != 'number') {
      throw new TypeError('Invalid argument: should provide a number to Int16MultiArrayArrayWrapper.capacity setter');
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
    this._refArray = new Int16MultiArrayRefArray(size);
    this._refObject = new Int16MultiArrayRefStructArray();
    this._refObject.size = size;
    this._refObject.capacity = size;
    this._wrappers = new Array();
    for (let i = 0; i < size; i++) {
      this._wrappers.push(new Int16MultiArrayWrapper());
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
    if (! (other instanceof Int16MultiArrayArrayWrapper)) {
      throw new TypeError('Invalid argument: should provide "Int16MultiArrayArrayWrapper".');
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
      Int16MultiArrayWrapper.freeStruct(refObjectArray[index]);
    }
  }
  static get elementType() {
    return Int16MultiArrayWrapper;
  }
  static get isROSArray() {
    return true;
  }
  static get useTypedArray() {
    return false;
  }
  get classType() {
    return Int16MultiArrayArrayWrapper;
  }
}
module.exports = Int16MultiArrayWrapper;
/*
 * The following is the original spec object coming from parser:
{
  "constants": [],
  "fields": [
    {
      "name": "layout",
      "type": {
        "isArray": false,
        "arraySize": null,
        "isUpperBound": false,
        "isDynamicArray": false,
        "isFixedSizeArray": false,
        "pkgName": "std_msgs",
        "type": "MultiArrayLayout",
        "stringUpperBound": null,
        "isPrimitiveType": false
      }
    },
    {
      "name": "data",
      "type": {
        "isArray": true,
        "arraySize": null,
        "isUpperBound": false,
        "isDynamicArray": true,
        "isFixedSizeArray": null,
        "pkgName": null,
        "type": "int16",
        "stringUpperBound": null,
        "isPrimitiveType": true
      }
    }
  ],
  "baseType": {
    "pkgName": "std_msgs",
    "type": "Int16MultiArray",
    "stringUpperBound": null,
    "isPrimitiveType": false
  },
  "msgName": "Int16MultiArray"
}
*/