// write a class to calculate the uber price

class uberpricefare{
    constructor(basefare, minutefare, distancefare, farefee){
        this.basefare = basefare
        this.minutefare = minutefare
        this.distancefare = distancefare
        this.farefee = farefee
    }
    getprice(cpmf=0.5, cpdf =25){   //cost per minutefare //cost per distancefare
    var result = this.basefare + (cpmf * this.minutefare) + (this.distancefare * cpdf) + this.farefee
    console.log(`The Ride Amount is: ${result}`)
    }
}

let ride = new uberpricefare(25, 45, 27, 20)

ride.getprice()
