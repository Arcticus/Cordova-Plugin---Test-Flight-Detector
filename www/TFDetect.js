/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

var channel = require('cordova/channel'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec'),
    cordova = require('cordova');

channel.createSticky('onCordovaTFDetectReady');
// Tell cordova channel to wait on the CordovaTFDetectReady event
channel.waitForInitialization('onCordovaTFDetectReady');

/**
 * This calls across the bridge to tell if the app is running on testflight or the simulator then caches the result
 * It is tied to the deviceReady event (deviceReady will wait on this) so this will be available immediatly.
 * @constructor
 */
function TFDetect() {
    this.available = false;
    this.isRunningTestFlightBeta = false;

    var me = this;

    channel.onCordovaReady.subscribe(function() {
        me.detect(function(info) {
            //ignoring info.cordova returning from native, we should use value from cordova.version defined in cordova.js

            me.available = true;
            me.isRunningTestFlightBeta = info;

            channel.onCordovaTFDetectReady.fire();
        },function(e) {
            me.available = false;
            utils.alert("[ERROR] Error initializing Cordova: " + e);
        });
    });
}

/**
 * TFDetect detect
 *
 * @param {Function} successCallback The function to call when the heading data is available
 * @param {Function} errorCallback The function to call when there is an error getting the heading data. (OPTIONAL)
 */
 TFDetect.prototype.detect = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, "TFDetect", "detect", []);
};

module.exports = new TFDetect();
