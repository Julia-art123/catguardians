const donationButtons = document.querySelectorAll('.donation-button');

const selectedAmountInput = document.getElementById('selected-amount');

const donateForm = document.querySelector('.donate-form form');
const giveNowButton = donateForm.querySelector('.give-now');

donationButtons.forEach(button => {
  button.addEventListener('click', () => {
    donationButtons.forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
    const amount = button.getAttribute('data-amount');
    selectedAmountInput.value = amount;
  });
});

donateForm.addEventListener('submit', function (e) {
  if (!selectedAmountInput.value) {
    e.preventDefault(); // 阻止提交
    alert('Please select a donation amount!');
  }
});
