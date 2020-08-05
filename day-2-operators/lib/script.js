function solve(meal_cost, tip_percent, tax_percent) {
    return Math.round(meal_cost + 
                     (meal_cost * (tip_percent/100)) + 
                     (meal_cost * (tax_percent/100)));
}

console.log(solve(12, 20, 8));