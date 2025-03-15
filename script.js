document.addEventListener("DOMContentLoaded", () => {
    const copyButton = document.getElementById("copy-button");
    const walletAddress = document.getElementById("wallet-address").innerText;
    const confirmCheck = document.getElementById("confirm-check");
    const walletButton = document.getElementById("wallet-button");

    // Копирование адреса кошелька в буфер обмена
    copyButton.addEventListener("click", () => {
        navigator.clipboard.writeText(walletAddress).then(() => {
            copyButton.textContent = "Copied!";
            copyButton.classList.add("copied");

            setTimeout(() => {
                copyButton.textContent = "Copy";
                copyButton.classList.remove("copied");
            }, 2000);
        }).catch(err => {
            console.error("Ошибка копирования: ", err);
        });
    });

    // Активация кнопки "Wallet" при отметке чекбокса
    confirmCheck.addEventListener("change", () => {
        walletButton.disabled = !confirmCheck.checked;
    });

    // Алерт при нажатии на "Wallet"
    walletButton.addEventListener("click", () => {
        alert("Транзакция не найдена! Попробуйте позже или совершите перевод.");
    });
});
