function transportFee(shift) {
    
    var morningShift = 'nightshift'
    var afternoonShift = 'afternoon'
    var nightShift = 'morning'

    if (shift === nightShift) {
        return 'R20'
    } else if (shift === afternoonShift) {
        return 'R10'
    } else {
        return 'free'
    }
}