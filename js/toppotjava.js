function donutShop(shopLocation, minFoot, maxFoot, shopperEntry, shopperBought, opHours) {
  this.shopLocation = shopLocation;
  this.minFoot = minFoot;
  this.maxFoot = maxFoot;
  this.footTraffic = footTraffic;
  this.shopperEntry = shopperEntry;
  this.shopperBought = shopperBought;
  this.donutsNeeded = function() {
    var hourlyDonutsNeeded = ((Math.random() * ((this.maxFoot - this.minFoot) + this.minFoot)) * this.shopperEntry * this.shopperBought));
    var dailyDonutsNeeded = (hourlyDonutsNeeded * 11);
    var showNeed = console.log(this.shopLocation + "is projected to sell " + this.hourlyDonutsNeeded + "donuts by the hour and sell " + this.donutsNeeded() + "donuts per day.")
  }

}

var downtownShop = new donutShop('Downtown', 80, 220, .10, 4, 11);
var capitolShop = new donutShop('Capitol Hill', 5, 45, .45, 2, 11);
var southlakeunionShop = new donutShop('South Lake Union', 180, 250, .05, 6, 11);
var wedgewoodShop = new donutShop('Wedgewood', 20, 60, 1.5, .20, 1.5, 11);
var ballardShop = new donutShop('Ballard', 25, 175, .33, 1, 11);

