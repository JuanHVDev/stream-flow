export const formatMoney = (money: number) => {
    return Number(money).toLocaleString("en-US", {
        currency: "USD",
        style: "currency",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
};
