function findItemsOver20(itemList){

    var newItemList = []

    for(var i = 0; i < itemList.length; i++){
        if (itemList[i].qty > 20 ){
             newItemList.push(itemList[i])
        }
    }

    return newItemList
}