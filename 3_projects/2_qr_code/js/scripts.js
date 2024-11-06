//  Selecionando elementos
const container     = document.querySelector(".container");
const qrCodeBtn     = document.querySelector("#qr-form button");
const qrCodeInput   = container.querySelector("#qr-form input");
const qrCodeImg     = container.querySelector("#qr-code img");

// Gerar código
function generateQrCode() {
  let qrCodeInputValue = qrCodeInput.value;

  if (!qrCodeInputValue) return;

  qrCodeBtn.innerText = "Gerando código...";

  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;
  
//   espera carregar o sorce da imagem pela api
  qrCodeImg.addEventListener("load", () => {
    container.classList.add("active");
    qrCodeBtn.innerText = "Código criado!";
  });
}

// Gerando com o click
qrCodeBtn.addEventListener("click", () => {
  generateQrCode();
});

// Usando com enter
qrCodeInput.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    generateQrCode();
  }
});

// Limpar área do código
qrCodeInput.addEventListener("keyup", () => {
  if (!qrCodeInput.value) {
    container.classList.remove("active");
    qrCodeBtn.innerText = "Gerar QR Code";
  }
});