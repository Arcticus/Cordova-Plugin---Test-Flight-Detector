<!---
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
-->

Cordova TestFlight Detector Plugin
===========================

# Plugin's Purpose

The purpose of the plugin is to create a method for [Cordova](https://cordova.apache.org/) based iOS applications to determine at runtime whether an application was installed via the Apple App Store or as a beta app via [TestFlight](https://developer.apple.com/testflight/) or launched from XCode to an attached USB device or iOS Simulator.  This allows a developer to use a single build and exercise separate code for testing versus production. 

# com.gosyntactix.cordova.testflightdetector

This plugin defines a global `TFDetect` object, which on app launch queries whether an app was installed via TestFlight or launched from XCode.  The launch from XCode works for both the Simulator and an attached USB device.

Although the object is in the global scope, it is not available until after the `deviceready` event.

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        console.log(TFDetect.isRunningTestFlightBeta);
    }

## Installation

    cordova plugin add com.gosyntactix.cordova.testflightdetector

## Properties

- TFDetect.isTFXC
- TFDetect.isAppStore

## TFDetect.isRunningTestFlightBeta

Returns **<u>true</u>** if the app was installed via TestFlight or launched from XCode to an attached USB device or iOS Simulator.  Returns **<u>false</u>** if the app was installed via the official Apple App Store.

### Supported Platforms

- iOS

### Quick Example
   
    if (TFDetect.isTFXC) {
    	//DEBUG CODE HERE    } else {
    	//PRODUCTION CODE HERE    }

## TFDetect.isAppStore

Returns **<u>true</u>** if the app was installed via the Apple App Store.  Returns **<u>false</u>** if the app was installed via TestFlight or launched from XCode to an attached USB device or iOS Simulator. 

### Supported Platforms

- iOS

### Quick Example
   
    if (TFDetect.isAppStore) {
    	//PRODUCTION CODE HERE    } else {
    	//DEBUG CODE HERE    }
