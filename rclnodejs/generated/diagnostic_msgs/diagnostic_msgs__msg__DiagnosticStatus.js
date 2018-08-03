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
const KeyValueWrapper = require('../../generated/diagnostic_msgs/diagnostic_msgs__msg__KeyValue.js');
const DiagnosticStatusRefStruct = StructType({
  level: primitiveTypes.byte,
  name: primitiveTypes.string,
  message: primitiveTypes.string,
  hardware_id: primitiveTypes.string,
  values: KeyValueWrapper.refObjectArrayType,
});
const DiagnosticStatusRefArray = ArrayType(DiagnosticStatusRefStruct);
const DiagnosticStatusRefStructArray = StructType({
  data: DiagnosticStatusRefArray,
  size: ref.types.size_t,
  capacity: ref.types.size_t
});
// Define the wrapper class.
class DiagnosticStatusWrapper {
  constructor(other) {
    this._wrapperFields = {};
    if (typeof other === 'object' && other._refObject) {
      this._refObject = new DiagnosticStatusRefStruct(other._refObject.toObject());
      this._levelIntialized = true;
      this._nameIntialized = true;
      this._wrapperFields.name =  new StringWrapper(other._wrapperFields.name);
      this._messageIntialized = true;
      this._wrapperFields.message =  new StringWrapper(other._wrapperFields.message);
      this._hardware_idIntialized = true;
      this._wrapperFields.hardware_id =  new StringWrapper(other._wrapperFields.hardware_id);
      this._wrapperFields.values = KeyValueWrapper.createArray();
      this._wrapperFields.values.copy(other._wrapperFields.values);
    } else if (typeof other !== 'undefined') {
      this._initMembers();
      translator.constructFromPlanObject(this, other);
    } else {
      this._initMembers();
    }
    this.freeze();
  }
  _initMembers() {
    this._refObject = new DiagnosticStatusRefStruct();
    this._levelIntialized = false;
    this._nameIntialized = false;
    this._wrapperFields.name = new StringWrapper();
    this._messageIntialized = false;
    this._wrapperFields.message = new StringWrapper();
    this._hardware_idIntialized = false;
    this._wrapperFields.hardware_id = new StringWrapper();
    this._wrapperFields.values = KeyValueWrapper.createArray();
  }
  static createFromRefObject(refObject) {
    let self = new DiagnosticStatusWrapper();
    self.copyRefObject(refObject);
    return self;
  }
  static createArray() {
    return new DiagnosticStatusArrayWrapper;
  }
  static get ArrayType() {
    return DiagnosticStatusArrayWrapper;
  }
  static get refObjectArrayType() {
    return DiagnosticStatusRefStructArray
  }
  static get refObjectType() {
    return DiagnosticStatusRefStruct;
  }
  toRawROS() {
    this.freeze(true);
    return this._refObject.ref();
  }
  freeze(own = false, checkConsistency = false) {
    if (checkConsistency) {
      if (!this._levelIntialized) {
        throw new TypeError('Invalid argument: level in DiagnosticStatus');
      }
      if (!this._nameIntialized) {
        throw new TypeError('Invalid argument: name in DiagnosticStatus');
      }
      if (!this._messageIntialized) {
        throw new TypeError('Invalid argument: message in DiagnosticStatus');
      }
      if (!this._hardware_idIntialized) {
        throw new TypeError('Invalid argument: hardware_id in DiagnosticStatus');
      }
    }
    if (own) {
      this._wrapperFields.name.freeze(own, checkConsistency);
    }
    this._refObject.name = this._wrapperFields.name.refObject;
    if (own) {
      this._wrapperFields.message.freeze(own, checkConsistency);
    }
    this._refObject.message = this._wrapperFields.message.refObject;
    if (own) {
      this._wrapperFields.hardware_id.freeze(own, checkConsistency);
    }
    this._refObject.hardware_id = this._wrapperFields.hardware_id.refObject;
    this._wrapperFields.values.freeze(own, checkConsistency);
    this._refObject.values = this._wrapperFields.values.refObject;
  }
  serialize() {
    this.freeze(false, true);
    return this._refObject.ref();
  }
  deserialize(refObject) {
    this._levelIntialized = true;
    this._refObject.level = refObject.level;
    this._nameIntialized = true;
    this._wrapperFields.name.data = refObject.name.data;
    this._messageIntialized = true;
    this._wrapperFields.message.data = refObject.message.data;
    this._hardware_idIntialized = true;
    this._wrapperFields.hardware_id.data = refObject.hardware_id.data;
    this._wrapperFields.values.copyRefObject(refObject.values);
  }
  toPlainObject() {
    return translator.toPlainObject(this);
  }
  static freeStruct(refObject) {
    StringWrapper.freeStruct(refObject.name);
    StringWrapper.freeStruct(refObject.message);
    StringWrapper.freeStruct(refObject.hardware_id);
    if (refObject.values.size != 0) {
      KeyValueWrapper.ArrayType.freeArray(refObject.values);
      if (KeyValueWrapper.ArrayType.useTypedArray) {
        deallocator.delayFreeStructMember(refObject.values, KeyValueWrapper.refObjectArrayType, 'data');
      } else {
        deallocator.freeStructMember(refObject.values, KeyValueWrapper.refObjectArrayType, 'data');
      }
    }
  }
  static destoryRawROS(msg) {
    DiagnosticStatusWrapper.freeStruct(msg.refObject);
  }
  static type() {
    return {pkgName: 'diagnostic_msgs', subFolder: 'msg', interfaceName: 'DiagnosticStatus'};
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
  get level() {
    if (!this._levelIntialized) {
      return undefined;
    }
    return this._refObject.level;
  }
  set level(value) {
    this._levelIntialized = true;
    this._refObject.level = value;
  }
  get name() {
    if (!this._nameIntialized) {
      return undefined;
    }
    return this._wrapperFields.name.data;
  }
  set name(value) {
    this._nameIntialized = true;
    this._wrapperFields.name.data = value;
  }
  get message() {
    if (!this._messageIntialized) {
      return undefined;
    }
    return this._wrapperFields.message.data;
  }
  set message(value) {
    this._messageIntialized = true;
    this._wrapperFields.message.data = value;
  }
  get hardware_id() {
    if (!this._hardware_idIntialized) {
      return undefined;
    }
    return this._wrapperFields.hardware_id.data;
  }
  set hardware_id(value) {
    this._hardware_idIntialized = true;
    this._wrapperFields.hardware_id.data = value;
  }
  get values() {
    return this._wrapperFields.values;
  }
  set values(value) {
    this._wrapperFields.values.fill(value);
  }
  copyRefObject(refObject) {
    this._refObject = new DiagnosticStatusRefStruct(refObject.toObject());
    this._levelIntialized = true;
    this._nameIntialized = true;
    this._wrapperFields.name.copyRefObject(this._refObject.name);
    this._messageIntialized = true;
    this._wrapperFields.message.copyRefObject(this._refObject.message);
    this._hardware_idIntialized = true;
    this._wrapperFields.hardware_id.copyRefObject(this._refObject.hardware_id);
    this._wrapperFields.values.copyRefObject(this._refObject.values);
  }
  copy(other) {
    this._refObject = new DiagnosticStatusRefStruct(other._refObject.toObject());
    this._levelIntialized = true;
    this._nameIntialized = true;
    this._wrapperFields.name.copy(other._wrapperFields.name);
    this._messageIntialized = true;
    this._wrapperFields.message.copy(other._wrapperFields.message);
    this._hardware_idIntialized = true;
    this._wrapperFields.hardware_id.copy(other._wrapperFields.hardware_id);
    this._wrapperFields.values.copy(other._wrapperFields.values);
  }
  static get classType() {
    return DiagnosticStatusWrapper;
  }
  static get ROSMessageDef() {
    return {"constants":[{"type":"byte","name":"OK","value":0},{"type":"byte","name":"WARN","value":1},{"type":"byte","name":"ERROR","value":2},{"type":"byte","name":"STALE","value":3}],"fields":[{"name":"level","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":null,"type":"byte","stringUpperBound":null,"isPrimitiveType":true}},{"name":"name","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":null,"type":"string","stringUpperBound":null,"isPrimitiveType":true}},{"name":"message","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":null,"type":"string","stringUpperBound":null,"isPrimitiveType":true}},{"name":"hardware_id","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":null,"type":"string","stringUpperBound":null,"isPrimitiveType":true}},{"name":"values","type":{"isArray":true,"arraySize":null,"isUpperBound":false,"isDynamicArray":true,"isFixedSizeArray":null,"pkgName":"diagnostic_msgs","type":"KeyValue","stringUpperBound":null,"isPrimitiveType":false}}],"baseType":{"pkgName":"diagnostic_msgs","type":"DiagnosticStatus","stringUpperBound":null,"isPrimitiveType":false},"msgName":"DiagnosticStatus"};
  }
  hasMember(name) {
    let memberNames = ["level","name","message","hardware_id","values"];
    return memberNames.indexOf(name) !== -1;
  }
}
// Define the wrapper of array class.
class DiagnosticStatusArrayWrapper {
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
      throw new TypeError('Invalid argument: should provide a number to DiagnosticStatusArrayWrapper.size setter');
      return;
    }
    return this._resize(value);
  }
  get capacity() {
    return this._wrappers.length;
  }
  set capacity(value) {
    if (typeof value != 'number') {
      throw new TypeError('Invalid argument: should provide a number to DiagnosticStatusArrayWrapper.capacity setter');
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
    this._refArray = new DiagnosticStatusRefArray(size);
    this._refObject = new DiagnosticStatusRefStructArray();
    this._refObject.size = size;
    this._refObject.capacity = size;
    this._wrappers = new Array();
    for (let i = 0; i < size; i++) {
      this._wrappers.push(new DiagnosticStatusWrapper());
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
    if (! (other instanceof DiagnosticStatusArrayWrapper)) {
      throw new TypeError('Invalid argument: should provide "DiagnosticStatusArrayWrapper".');
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
      DiagnosticStatusWrapper.freeStruct(refObjectArray[index]);
    }
  }
  static get elementType() {
    return DiagnosticStatusWrapper;
  }
  static get isROSArray() {
    return true;
  }
  static get useTypedArray() {
    return false;
  }
  get classType() {
    return DiagnosticStatusArrayWrapper;
  }
}
// Define constants (4 in total)
Object.defineProperty(DiagnosticStatusWrapper, "OK", {value: 0, writable: false, enumerable: true, configurable: true});
Object.defineProperty(DiagnosticStatusWrapper, "WARN", {value: 1, writable: false, enumerable: true, configurable: true});
Object.defineProperty(DiagnosticStatusWrapper, "ERROR", {value: 2, writable: false, enumerable: true, configurable: true});
Object.defineProperty(DiagnosticStatusWrapper, "STALE", {value: 3, writable: false, enumerable: true, configurable: true});
module.exports = DiagnosticStatusWrapper;
/*
 * The following is the original spec object coming from parser:
{
  "constants": [
    {
      "type": "byte",
      "name": "OK",
      "value": 0
    },
    {
      "type": "byte",
      "name": "WARN",
      "value": 1
    },
    {
      "type": "byte",
      "name": "ERROR",
      "value": 2
    },
    {
      "type": "byte",
      "name": "STALE",
      "value": 3
    }
  ],
  "fields": [
    {
      "name": "level",
      "type": {
        "isArray": false,
        "arraySize": null,
        "isUpperBound": false,
        "isDynamicArray": false,
        "isFixedSizeArray": false,
        "pkgName": null,
        "type": "byte",
        "stringUpperBound": null,
        "isPrimitiveType": true
      }
    },
    {
      "name": "name",
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
    },
    {
      "name": "message",
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
    },
    {
      "name": "hardware_id",
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
    },
    {
      "name": "values",
      "type": {
        "isArray": true,
        "arraySize": null,
        "isUpperBound": false,
        "isDynamicArray": true,
        "isFixedSizeArray": null,
        "pkgName": "diagnostic_msgs",
        "type": "KeyValue",
        "stringUpperBound": null,
        "isPrimitiveType": false
      }
    }
  ],
  "baseType": {
    "pkgName": "diagnostic_msgs",
    "type": "DiagnosticStatus",
    "stringUpperBound": null,
    "isPrimitiveType": false
  },
  "msgName": "DiagnosticStatus"
}
*/