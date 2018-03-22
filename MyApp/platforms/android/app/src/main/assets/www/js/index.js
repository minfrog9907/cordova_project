/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
function scanBarCode(){
    alert("asdf");
    cordova.plugins.barcodeScanner.scan(
        function (result) {
            alert("We got a barcode\n" +
                  "Result: " + result.text + "\n" +
                  "Format: " + result.format + "\n" +
                  "Cancelled: " + result.cancelled);
        },
        function (error) {
            alert("Scanning failed: " + error);
        },
        {
            preferFrontCamera : false, // 전후면 카메라 (Android, iOS)
            showFlipCameraButton : true, // 카메라 전환 (Android, iOS)
            showTorchButton : true, // 플레시 버튼 (Android, iOS)
            torchOn: true, // 플레시 켜짐 (Android)
            saveHistory: true, // 스켄 히스토리 (Android) (default false)
            prompt : "Place a barcode inside the scan area", // 메세지 (Android)
            resultDisplayDuration: 500, // (Android), display scanned text for X ms. 0 suppresses it entirely, default 1500
            formats : "PDF_417,EAN_8,EAN_13,QR_CODE", // default: all but PDF_417 and RSS_EXPANDED
            orientation : "portrait", // 장치와 함께 회전하도록 기본값이 설정 해제 됨 (Android only) (portrait|landscape)
            disableAnimations : true, // (iOS)
            disableSuccessBeep: false // (iOS, Android)
        }
    );
}

function testNoti(){
    navigator.notification.alert(
        'You are the winner!',  // message
        null,         // callback
        'Game Over',            // title
        'Done'                  // buttonName
    );
}

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

document.getElementById("barcode").addEventListener("click", scanBarCode);
document.getElementById("notification").addEventListener("click", testNoti);