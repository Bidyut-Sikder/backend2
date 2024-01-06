// require("core-js/actual/array/group-by-to-map");
//require("core-js/actual/array/group-by");

const express = require('express')
const { totalRevenue, quantityByProduct, topProducts, averagePrice, revenueByMonth, highestQuantitySold, departmentSalaryExpense, createSales } = require('../controllers/salesController')

const router = express.Router()



router.get('/api/sales/total-revenue', totalRevenue)
router.get('/api/sales/quantity-by-product', quantityByProduct)
router.get('/api/sales/top-products', topProducts)
router.get('/api/sales/average-price', averagePrice)
router.get('/api/sales/revenue-by-month', revenueByMonth)
router.get('/api/sales/highest-quantity-sold', highestQuantitySold)
router.get('/api/sales/department-salary-expense', departmentSalaryExpense)




///createing sales
router.get('/create-sales',createSales)





module.exports = router
 



























