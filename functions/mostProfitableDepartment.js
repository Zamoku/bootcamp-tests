function mostProfitableDepartment(salesData){
  
    const salesMap = {}
    
    for(var i = 0; i < salesData.length;i++){
       const sale = salesData[i]
       
       salesMap[sale.department] = 0
     
    }
    for(var i = 0; i < salesData.length;i++){
       const sale = salesData[i]
       var currentDepartmentTotal = salesMap[sale.department]
       currentDepartmentTotal += sale.sales
       salesMap[sale.department] = currentDepartmentTotal
    }

    var currentMaxSales = 0
    var  currentDepart = "";
    for(const salesDepartment in salesMap){
  
      const currentSaleDepartmentSales = salesMap[salesDepartment]
      
      if(currentSaleDepartmentSales > currentMaxSales){
        currentMaxSales = currentSaleDepartmentSales
        currentDepart = salesDepartment
      }
    }
     return currentDepart
  }