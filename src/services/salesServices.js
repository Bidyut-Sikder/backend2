const eepress = require("express");
const SalesModel = require("../models/SalesModel");

const createSellsService = async (req) => {
    try {
        await SalesModel.create(req.body);

        return { status: "success", message: "created successfully." };
    } catch (error) {
        return { status: "faild", message: "something went wrong." };
    }
};

const totalRevenueService = async (req) => {
    try {
        const sales = await SalesModel.find();

        let totalRevenue = sales.reduce(
            (previousCount, element) => Number(element.price) + previousCount,
            0
        );

        return { totalRevenue };
    } catch (error) {
        return { status: "failed", message: "something went wrong." };
    }
};

const quantityByProductService = async (req) => {
    try {
        const sales = await SalesModel.find();

        let ProductWithQty = sales.reduce((previousCount, element) => {
            if (previousCount[element.product] == null) {
                previousCount[element.product] = 0;
            }
            previousCount[element.product] += Number(element.quantity);
            return previousCount;
        }, {});

        return { ProductWithQty };
    } catch (error) {
        return { status: "failed", message: "something went wrong." };
    }
};

const topProductsService = async (req) => {
    try {
        const sales = await SalesModel.find();

        let ProductWithTotalPrice = sales.reduce((proviousCount, element) => {
            if (proviousCount[element.product] == null) {
                proviousCount[element.product] = 0;
            }

            proviousCount[element.product] += Number(element.price);
            return proviousCount;
        }, {});
        return { ProductWithTotalPrice };
    } catch (error) {
        return { status: "failed", message: "something went wrong." };
    }
};

const averagePriceService = async (req) => {
    try {
        const sales = await SalesModel.find();

        let PriceAndQty = sales.reduce(
            (proviousCount, element) => {
                proviousCount["totalPrice"] += Number(element.price);
                proviousCount["totalQty"] += Number(element.quantity);

                return proviousCount;

            }, { totalPrice: 0, totalQty: 0 });

        const { totalQty, totalPrice } = PriceAndQty

        let avaragePrice = Math.ceil(totalPrice / totalQty)

        return { avaragePrice };
    } catch (error) {
        return { status: "failed", message: "something went wrong." };
    }
};

const revenueByMonthService = async (req) => { };

const highestQuantitySoldService = async (req) => { };

const departmentSalaryExpenseService = async (req) => { };

module.exports = {
    createSellsService,
    totalRevenueService,
    quantityByProductService,
    topProductsService,
    averagePriceService,
    revenueByMonthService,
    highestQuantitySoldService,
    departmentSalaryExpenseService,
};


