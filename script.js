let constraint = {
  video: {
    facingMode: "user",
  },
  audio: false,
};

const cameraView = document.querySelector("#camera-view"),
  cameraOutput = document.querySelector("#camera-output"),
  cameraSensor = document.querySelector("#camera-sensor"),
  cameraTrigger = document.querySelector("#camera-trigger");

console.log(cameraOutput);

function cameraStart() {
  navigator.mediaDevices
    .getUserMedia(constraint)
    .then(function (stream) {
      track = stream.getTracks()[0];
      cameraView.srcObject = stream;
    })
    .catch(function (err) {
      console.log("oops. something is broken.", err);
    });
}

cameraTrigger.onclick = function () {
  cameraSensor.width = "150px";
  cameraSensor.height = "150px";

  cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);

  cameraOutput.src = cameraSensor.toDataURL("image/webp");
  console.log(cameraOutput);

  cameraOutput.classList.add("taken");
};

window.addEventListener("load", cameraStart, false);
