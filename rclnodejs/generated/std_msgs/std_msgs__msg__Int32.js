// This file is automatically generated by Intel rclnodejs
//
// *** DO NOT EDIT directly
//
'use strict';
const rclnodejs = require('bindings')('rclnodejs');
const StructType = require('ref-struct');
const ref = require('ref');
const ArrayType = require('ref-array');
const primitiveTypes = require('../../rosidl_gen/generator_primitive.js');
const deallocator = require('../../rosidl_gen/deallocator.js');
const translator = require('../../rosidl_gen/message_translator.js');
const Int32RefStruct = StructType({
  data: primitiveTypes.int32,
});
const Int32RefArray = ArrayType(Int32RefStruct);
const Int32RefStructArray = StructType({
  data: ref.refType(ref.types.int32),
  size: ref.types.size_t,
  capacity: ref.types.size_t
});
// Define the wrapper class.
class Int32Wrapper {
  constructor(other) {
    this._wrapperFields = {};
    if (typeof other === 'object' && other._refObject) {
      this._refObject = new Int32RefStruct(other._refObject.toObject());
      this._dataIntialized = true;
    } else if (typeof other !== 'undefined') {
      this._initMembers();
      translator.constructFromPlanObject(this, other);
    } else {
      this._initMembers();
    }
    this.freeze();
  }
  _initMembers() {
    this._refObject = new Int32RefStruct();
    this._dataIntialized = false;
  }
  static createFromRefObject(refObject) {
    let self = new Int32Wrapper();
    self.copyRefObject(refObject);
    return self;
  }
  static createArray() {
    return new Int32ArrayWrapper;
  }
  static get ArrayType() {
    return Int32ArrayWrapper;
  }
  static get refObjectArrayType() {
    return Int32RefStructArray
  }
  static get refObjectType() {
    return Int32RefStruct;
  }
  toRawROS() {
    this.freeze(true);
    return this._refObject.ref();
  }
  freeze(own = false, checkConsistency = false) {
    if (checkConsistency) {
      if (!this._dataIntialized) {
        throw new TypeError('Invalid argument: data in Int32');
      }
    }
  }
  serialize() {
    this.freeze(false, true);
    return this._refObject.ref();
  }
  deserialize(refObject) {
    this._dataIntialized = true;
    this._refObject.data = refObject.data;
  }
  toPlainObject() {
    return translator.toPlainObject(this);
  }
  static freeStruct(refObject) {
  }
  static destoryRawROS(msg) {
    Int32Wrapper.freeStruct(msg.refObject);
  }
  static type() {
    return {pkgName: 'std_msgs', subFolder: 'msg', interfaceName: 'Int32'};
  }
  static isPrimitive() {
    return true;
  }
  static get isROSArray() {
    return false;
  }
  get refObject() {
    return this._refObject;
  }
  get data() {
    if (!this._dataIntialized) {
      return undefined;
    }
    return this._refObject.data;
  }
  set data(value) {
    this._dataIntialized = true;
    this._refObject.data = value;
  }
  copyRefObject(refObject) {
    this._refObject = new Int32RefStruct(refObject.toObject());
    this._dataIntialized = true;
  }
  copy(other) {
    this._refObject = new Int32RefStruct(other._refObject.toObject());
    this._dataIntialized = true;
  }
  static get classType() {
    return Int32Wrapper;
  }
  static get ROSMessageDef() {
    return {"constants":[],"fields":[{"name":"data","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":null,"type":"int32","stringUpperBound":null,"isPrimitiveType":true}}],"baseType":{"pkgName":"std_msgs","type":"Int32","stringUpperBound":null,"isPrimitiveType":false},"msgName":"Int32"};
  }
  hasMember(name) {
    let memberNames = ["data"];
    return memberNames.indexOf(name) !== -1;
  }
}
// Define the wrapper of array class.
class Int32ArrayWrapper {
  constructor(size = 0) {
    this._resize(size);
  }
  toRawROS() {
    return this._refObject.ref();
  }
  fill(values) {
    if (Array.isArray(values)) {
      // Convert JavaScript array
      this._wrappers = new Int32Array(values);
    } else {
      this._wrappers = values;
    }
  }
  // Put all data currently stored in `this._wrappers` into `this._refObject`
  freeze(own) {
    // When it's a TypedArray: no need to copy to `this._refArray`
    this._refObject.size = this._wrappers.length;
    this._refObject.capacity = this._wrappers.length;
    const buffer = Buffer.from(new Uint8Array(this._wrappers.buffer));
    this._refObject.data = buffer;
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
      throw new TypeError('Invalid argument: should provide a number to Int32ArrayWrapper.size setter');
      return;
    }
    return this._resize(value);
  }
  get capacity() {
    return this._wrappers.length;
  }
  set capacity(value) {
    if (typeof value != 'number') {
      throw new TypeError('Invalid argument: should provide a number to Int32ArrayWrapper.capacity setter');
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
    this._refArray = undefined;
    this._refObject = new Int32RefStructArray();
    this._refObject.size = size;
    this._refObject.capacity = size;
    this._wrappers = new Int32Array(size);
  }
  // Copy all data from `this._refObject` into `this._wrappers`
  copyRefObject(refObject) {
    this._refObject = refObject;
    const byteLen = refObject.size * ref.types.int32.size;
    // An ArrayBuffer object that doesn't hold the ownership of the address
    const arrayBuffer = rclnodejs.createArrayBufferFromAddress(refObject.data, byteLen);
    this._wrappers = new Int32Array(arrayBuffer);
  }
  copy(other) {
    if (! (other instanceof Int32ArrayWrapper)) {
      throw new TypeError('Invalid argument: should provide "Int32ArrayWrapper".');
    }
    this._resize(other.size);
    this._wrappers = other._wrappers.slice();
  }
  static freeArray(refObject) {
    // For TypedArray: .data will be 'free()'-ed in parent struct
  }
  static get elementType() {
    return Int32Wrapper;
  }
  static get isROSArray() {
    return true;
  }
  static get useTypedArray() {
    return true;
  }
  get classType() {
    return Int32ArrayWrapper;
  }
}
module.exports = Int32Wrapper;
/*
 * The following is the original spec object coming from parser:
{
  "constants": [],
  "fields": [
    {
      "name": "data",
      "type": {
        "isArray": false,
        "arraySize": null,
        "isUpperBound": false,
        "isDynamicArray": false,
        "isFixedSizeArray": false,
        "pkgName": null,
        "type": "int32",
        "stringUpperBound": null,
        "isPrimitiveType": true
      }
    }
  ],
  "baseType": {
    "pkgName": "std_msgs",
    "type": "Int32",
    "stringUpperBound": null,
    "isPrimitiveType": false
  },
  "msgName": "Int32"
}
*/