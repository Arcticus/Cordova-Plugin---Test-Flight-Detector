/*
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
 */

#import "TFDetect.h"
#import <TargetConditionals.h>

@implementation TFDetect

/* #if TARGET_IPHONE_SIMULATOR
  BOOL const isOnSim = YES;
# else
  BOOL const isOnSim = NO;
#endif */

- (void)detect:(CDVInvokedUrlCommand*)command
{
BOOL isDebug = NO;
#ifdef DEBUG
    isDebug = YES;
#endif
 
 CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsBool:isDebug];
 [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

/* - (void)detect:(CDVInvokedUrlCommand*)command
{
  NSURL *receiptURL = [[NSBundle mainBundle] appStoreReceiptURL];
  NSString *receiptURLString = [receiptURL path];
  BOOL isRunningTestFlightBeta =  ([receiptURLString rangeOfString:@"sandboxReceipt"].location != NSNotFound);

  isRunningTestFlightBeta = isRunningTestFlightBeta | isOnSim;

  CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsBool:isRunningTestFlightBeta];

  [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
} */

@end
