const { totalRevenueService, quantityByProductService, topProductsService, averagePriceService, revenueByMonthService, highestQuantitySoldService, departmentSalaryExpenseService, createSellsService } = require("../services/salesServices")


const createSales = async (req, res) => {
    const result = await createSellsService(req)
    res.status(200).json(result)

}



const totalRevenue = async (req, res) => {
    const result = await totalRevenueService(req)
    res.status(200).json(result)

}


const quantityByProduct = async (req, res) => {
    const result = await quantityByProductService(req)
    res.status(200).json(result)
}


const topProducts = async (req, res) => {
    const result = await topProductsService(req)
    res.status(200).json(result)
}


const averagePrice = async (req, res) => {
    const result = await averagePriceService(req)
    res.status(200).json(result)
}



const revenueByMonth = async (req, res) => {
    const result = await revenueByMonthService(req)
    res.status(200).json(result)
}

const highestQuantitySold = async (req, res) => {
    const result = await highestQuantitySoldService(req)
    res.status(200).json(result)
}


const departmentSalaryExpense = async (req, res) => {
    const result = await departmentSalaryExpenseService(req)
    res.status(200).json(result)
}



module.exports = {
    createSales,
    totalRevenue,
    quantityByProduct,
    topProducts,
    averagePrice,
    revenueByMonth,
    highestQuantitySold,
    departmentSalaryExpense
}






















