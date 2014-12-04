function clickScan() {
cordova.plugins.barcodeScanner.scan(
  function (result) {
      alert("We got a barcode\n" +
            "Result: " + result.text + "\n" +
            "Format: " + result.format + "\n" +
            "Cancelled: " + result.cancelled);
  }, 
  function (error) {
      alert("Scanning failed: " + error);
  });}
  
cordova.plugins.flashlight.available(function(isAvailable) {
  if (isAvailable) {

    // switch on
    cordova.plugins.flashlight.switchOn(); // success/error callbacks may be passed

    // switch off after 3 seconds
    setTimeout(function() {
      cordova.plugins.flashlight.switchOff(); // success/error callbacks may be passed
    }, 3000);

  } else {
    alert("Flashlight not available on this device");
  }
});