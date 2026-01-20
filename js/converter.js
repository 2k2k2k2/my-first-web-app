// ここからコードを書いてください
/*function setupConverter() {
  const form = document.getElementsByClassName("converter-form");
  const input = document.getElementsByClassName("converter-input")[0];
  const from = document.getElementsByClassName("converter-from")[0];
  const to = document.getElementsByClassName("converter-to")[0];
  const result = document.getElementsByClassName("converter-result")[0];
  const lengthUnit = [
    { name: "meter", base: 1 },
    { name: "kilometer", base: 1000 },
    { name: "centimeter", base: 0.01 },
    { name: "millimeter", base: 0.001 },
    { name: "inch", base: 0.0254 },
    { name: "foot", base: 0.3048 },
    { name: "yard", base: 0.9144 },
    { name: "mile", base: 1609.344 },
  ];
  var Element = document.getElementsByClassName("converter-from");
  for (var i = 0; i < lengthUnit.length; i++) {
    var option = document.createElement("option");
    option.value = lengthUnit[i].base;
    option.textContent = lengthUnit[i].name;
    Element[0].appendChild(option);
  }
  var Element = document.getElementsByClassName("converter-to");
  for (var i = 0; i < lengthUnit.length; i++) {
    var option = document.createElement("option");
    option.value = lengthUnit[i].base;
    option.textContent = lengthUnit[i].name;
    Element[0].appendChild(option);
  }
  from.selectedIndex = 0;
  to.selectedIndex = 1;

  function Convert() {
    const input = parseFloat(
      document.getElementsByClassName("converter-input")[0].value,
    );
    if (isNaN(input)) {
      result.textContent = "Please enter a valid number.";
      return;
    }
    const from = parseFloat(
      document.getElementsByClassName("converter-from")[0].value,
    );
    const to = parseFloat(
      document.getElementsByClassName("converter-to")[0].value,
    );
    const output = (input * from) / to;
    result.textContent = `${input} ${lengthUnit[from].name} = ${output.toFixed(3)} ${lengthUnit[to].name}`;
  }
  form.addEventListener("input", Convert);
  Convert();
}
export { setupConverter };*/
export function setupConverter() {
  const converterForm = document.querySelector(".converter-form");
  const inputValue = document.querySelector(".converter-input");
  const fromUnit = document.querySelector(".converter-from");
  const toUnit = document.querySelector(".converter-to");
  const result = document.querySelector(".converter-result");

  const lengthUnit = [
    { name: "meter", base: 1 },
    { name: "kilometer", base: 1000 },
    { name: "centimeter", base: 0.01 },
    { name: "millimeter", base: 0.001 },
    { name: "inch", base: 0.0254 },
    { name: "foot", base: 0.3048 },
    { name: "yard", base: 0.9144 },
    { name: "mile", base: 1609.344 },
  ];

  fromUnit.innerHTML = "";
  toUnit.innerHTML = "";

  for (const unit of lengthUnit) {
    fromUnit.innerHTML += `<option value="${unit.base}">${unit.name}</option>`;
    toUnit.innerHTML += `<option value="${unit.base}">${unit.name}</option>`;
  }

  // 最初のオプションを選択
  if (fromUnit.options.length > 0) {
    fromUnit.selectedIndex = 0;
  }
  if (toUnit.options.length > 0) {
    toUnit.selectedIndex = 1;
  }

  // 変換を実行
  function convert() {
    const value = parseFloat(inputValue.value);

    if (isNaN(value)) {
      result.textContent = "Please enter a valid number";
      return;
    }

    const fromBase = fromUnit.value;
    const toBase = toUnit.value;
    const converted = (value * fromBase) / toBase;

    // 結果を3桁まで丸める
    result.textContent = `${value} ${lengthUnit[fromUnit.selectedIndex].name} = ${converted.toFixed(3)} ${lengthUnit[toUnit.selectedIndex].name}`;
  }

  converterForm.addEventListener("input", convert);

  // 初期化
  convert(); // 初期値で変換を実行
}

// ここまでコードを書いてください
