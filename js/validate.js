function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.

  const latData = document.getElementById("lat").value;
  const longData = document.getElementById("long").value;

  const floatLat = parseFloat(latData);
  const floatLong = parseFloat(longData);

  if(!floatLat || floatLat < -90 || floatLat > 90)
  {
    const hidelat = document.querySelector("#invlat");
    hidelat.style.display = "inline";
    event.preventDefault();
  }
  else
  {
    const hidelat = document.querySelector("#invlat");
    hidelat.style.display = "none";
  }

  if(!floatLong || floatLong < -180 || floatLong > 180)
  {
    const hidelong = document.querySelector("#invlong");
    hidelong.style.display = "inline";
    event.preventDefault();
  }
  else
  {
    const hidelong = document.querySelector("#invlong");
    hidelong.style.display = "none";
  }

}
// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
