const customerForm = document.getElementById("customerForm");
const subscriptionsBody = document.getElementById("subscriptionsBody");
const customersCount = document.getElementById("customersCount");
const mrrValue = document.getElementById("mrrValue");
const arrValue = document.getElementById("arrValue");
const seedBtn = document.getElementById("seedBtn");
const themeToggle = document.getElementById("themeToggle");

const PLAN_NAMES = {
  29: "Starter",
  79: "Growth",
  199: "Scale",
};

let subscriptions = [];

function toCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function render() {
  subscriptionsBody.innerHTML = "";

  if (subscriptions.length === 0) {
    subscriptionsBody.innerHTML =
      '<tr class="empty-row"><td colspan="4">No customers yet. Add one to get started.</td></tr>';
  } else {
    subscriptions.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.company}</td>
        <td>${item.plan}</td>
        <td>${item.seats}</td>
        <td>${toCurrency(item.monthly)}</td>
      `;
      subscriptionsBody.appendChild(row);
    });
  }

  const customerTotal = subscriptions.length;
  const mrr = subscriptions.reduce((sum, sub) => sum + sub.monthly, 0);
  const arr = mrr * 12;

  customersCount.textContent = String(customerTotal);
  mrrValue.textContent = toCurrency(mrr);
  arrValue.textContent = toCurrency(arr);
}

customerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const company = document.getElementById("companyName").value.trim();
  const planPrice = Number(document.getElementById("planTier").value);
  const seats = Number(document.getElementById("seats").value);

  if (!company || seats < 1 || Number.isNaN(planPrice)) {
    return;
  }

  subscriptions.push({
    company,
    plan: PLAN_NAMES[planPrice],
    seats,
    monthly: planPrice * seats,
  });

  customerForm.reset();
  document.getElementById("seats").value = 1;
  render();
});

seedBtn.addEventListener("click", () => {
  subscriptions = [
    { company: "Acme", plan: "Growth", seats: 5, monthly: 395 },
    { company: "Nimbus Labs", plan: "Scale", seats: 8, monthly: 1592 },
    { company: "Pixel Forge", plan: "Starter", seats: 3, monthly: 87 },
  ];
  render();
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

render();
