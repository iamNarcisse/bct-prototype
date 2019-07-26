/*
===================================
Author : Narcisse Egonu
Difficulty : So Simple
Date written : 24-07-2019
For : BlueDrive AI
Project Type : Prototype
===================================
*/

const sand = document.getElementById("sand").value;
const silt = document.getElementById("silt").value;
const clay = document.getElementById("clay").value;
const calculate = document.getElementById("calculate");

function handleCalculate() {
  const sand = document.getElementById("sand").value;
  const silt = document.getElementById("silt").value;
  const clay = document.getElementById("clay").value;
  const soilType = document.getElementById("soilType");
  const resultSection = document.getElementById("answer");
  const cropA = document.getElementById("crop_a");
  const cropB = document.getElementById("crop_b");
  const soilSample = {
    sand,
    silt,
    clay,
    sum: parseFloat(sand) + parseFloat(silt) + parseFloat(clay)
  };

  if (soilSample.sum > 100) {
    alert("Error: Soil sample values more than 100");
    return;
  }

  //Determine Loam Soil
  if (
    parseFloat(soilSample.clay) >= 7.5 &&
    parseFloat(soilSample.clay) <= 27.5 &&
    parseFloat(soilSample.sand) >= 22.5 &&
    parseFloat(soilSample.sand) <= 52.5 &&
    parseFloat(soilSample.silt) >= 27.5 &&
    parseFloat(soilSample.silt) <= 50
  ) {
    let crops = {
      a: "Tomatoes",
      b: "Onions"
    };

    resultSection.className = "result";
    soilType.innerText = "Loam";
    cropA.innerText = crops.a;
    cropB.innerText = crops.b;
    console.log("Loam");
  }

  //Determine Clay loam Soil
  if (
    soilSample.clay >= 27.5 &&
    soilSample.clay <= 40 &&
    soilSample.sand >= 20 &&
    soilSample.sand <= 45 &&
    soilSample.silt >= 15 &&
    soilSample.silt <= 52.5
  ) {
    let crops = {
      a: "N/A",
      b: "N/A"
    };
    resultSection.className = "result";
    soilType.innerText = "Clay Loam";
    cropA.innerText = crops.a;
    cropB.innerText = crops.b;
    console.log("Clay Loam");
  }

  //Determine Silt Loam soil
  if (
    soilSample.clay >= 0 &&
    soilSample.clay <= 27.5 &&
    soilSample.sand >= 0 &&
    soilSample.sand <= 50 &&
    soilSample.silt >= 50 &&
    soilSample.silt <= 87.5
  ) {
    let crops = {
      a: "N/A",
      b: "N/A"
    };
    resultSection.className = "result";
    soilType.innerText = "Silt Loam";
    cropA.innerText = crops.a;
    cropB.innerText = crops.b;
    console.log("Silt Loam");
  }

  //Determine Silt soil
  if (
    soilSample.clay >= 0 &&
    soilSample.clay <= 12.5 &&
    soilSample.sand >= 0 &&
    soilSample.sand <= 20 &&
    soilSample.silt >= 80 &&
    soilSample.silt <= 100
  ) {
    let crops = {
      a: "N/A",
      b: "N/A"
    };
    resultSection.className = "result";
    soilType.innerText = "Silt";
    cropA.innerText = crops.a;
    cropB.innerText = crops.b;
    console.log("Silt");
  }

  //Determine Silty Clay Loam
  if (
    soilSample.clay >= 27.5 &&
    soilSample.clay <= 40 &&
    soilSample.sand >= 0 &&
    soilSample.sand <= 20 &&
    soilSample.silt >= 40 &&
    soilSample.silt <= 72.5
  ) {
    let crops = {
      a: "N/A",
      b: "N/A"
    };
    resultSection.className = "result";
    soilType.innerText = "Silty CLay Loam";
    cropA.innerText = crops.a;
    cropB.innerText = crops.b;
    console.log("Silty Clay Loam");
  }

  //Determine Silty Clay
  if (
    soilSample.clay >= 40 &&
    soilSample.clay <= 60 &&
    soilSample.sand >= 0 &&
    soilSample.sand <= 20 &&
    soilSample.silt >= 40 &&
    soilSample.silt <= 60
  ) {
    let crops = {
      a: "N/A",
      b: "N/A"
    };
    resultSection.className = "result";
    soilType.innerText = "Silty CLay";
    cropA.innerText = crops.a;
    cropB.innerText = crops.b;
    console.log("Silty Clay");
  }

  //Determine Sandy soil
  if (
    soilSample.clay >= 0 &&
    soilSample.clay <= 10 &&
    soilSample.sand >= 85 &&
    soilSample.sand <= 100 &&
    soilSample.silt >= 0 &&
    soilSample.silt <= 15
  ) {
    let crops = {
      a: "N/A",
      b: "N/A"
    };
    resultSection.className = "result";
    soilType.innerText = "Sandy";
    cropA.innerText = crops.a;
    cropB.innerText = crops.b;
    console.log("Sand");
  }

  //Determine Loamy Sand
  if (
    soilSample.clay >= 0 &&
    soilSample.clay <= 15 &&
    soilSample.sand >= 70 &&
    soilSample.sand <= 85 &&
    soilSample.silt >= 0 &&
    soilSample.silt <= 30
  ) {
    let crops = {
      a: "N/A",
      b: "N/A"
    };
    resultSection.className = "result";
    soilType.innerText = "Loamy Sand";
    cropA.innerText = crops.a;
    cropB.innerText = crops.b;
    console.log("Loamy Sand");
  }

  //Determine Sandy Loam
  if (
    soilSample.clay >= 0 &&
    soilSample.clay <= 20 &&
    soilSample.sand >= 52.5 &&
    soilSample.sand <= 85 &&
    soilSample.silt >= 0 &&
    soilSample.silt <= 50
  ) {
    let crops = {
      a: "Pepper",
      b: "Cucumber"
    };
    resultSection.className = "result";
    soilType.innerText = "Sandy Loam ";
    cropA.innerText = crops.a;
    cropB.innerText = crops.b;
    console.log("Sandy Loam");
  }

  //Determine Sandy Clay loam

  if (
    soilSample.clay >= 20 &&
    soilSample.clay <= 35 &&
    soilSample.sand >= 45 &&
    soilSample.sand <= 80 &&
    soilSample.silt >= 0 &&
    soilSample.silt <= 27.5
  ) {
    let crops = {
      a: "N/A",
      b: "N/A"
    };
    resultSection.className = "result";
    soilType.innerText = "Sandy Clay Loam ";
    cropA.innerText = crops.a;
    cropB.innerText = crops.b;
    console.log("Sandy Clay Loam");
  }

  //Determine Sand Clay
  if (
    soilSample.clay >= 35 &&
    soilSample.clay <= 55 &&
    soilSample.sand >= 45 &&
    soilSample.sand <= 65 &&
    soilSample.silt >= 0 &&
    soilSample.silt <= 20
  ) {
    resultSection.className = "result";
    soilType.innerText = "Sand Clay";
    console.log("Sand Clay");
  }

  //Determine Clay

  if (
    soilSample.clay >= 40 &&
    soilSample.clay <= 100 &&
    soilSample.sand >= 10 &&
    soilSample.sand <= 45 &&
    soilSample.silt >= 10 &&
    soilSample.silt <= 40
  ) {
    let crops = {
      a: "Lettuce",
      b: "Chard"
    };

    resultSection.className = "result";
    soilType.innerText = "Clay";
    cropA.innerText = crops.a;
    cropB.innerText = crops.b;
    console.log("Clay");
  }
}

calculate.addEventListener("click", handleCalculate);
