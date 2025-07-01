type Currency = "USD" | "EUR" | "UAH";

interface ConvertParams {
  amount: number;
  currency: Currency;
}

function convertCurrency({ amount, currency }: ConvertParams): void {
  console.log(`Converting ${amount} to ${currency}`);
}

convertCurrency({ amount: 100, currency: "EUR" }); // ✅ Працює
