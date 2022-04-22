function findItemsOver(itemList,threshold){

    var newItemList = []

    for(var i = 0; i < itemList.length; i++){
        if (itemList[i].qty > threshold){
             newItemList.push(itemList[i])
        }
    }
	//console.log(newItemList)
    return newItemList
}