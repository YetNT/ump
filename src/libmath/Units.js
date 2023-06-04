const Distance = Object.freeze({
  Nanometer : 'nanometer',
  Micrometer : 'micrometer',
  Millimeter : 'millimeter',
  Centimeter : 'centimeter',
  Meter : 'meter',
  Kilometer : 'kilometer',
  NauticalMile : 'nautical-mile',
  Inch : 'inch',
  Foot : 'foot',
  Yard : 'yard',
  Mile : 'mile',
})
  
const Area = Object.freeze({
  SquareCentimeter : 'square-centimeter',
  SquareMeter : 'square-meter',
  SquareFoot : 'square-foot',
  SquareInch : 'square-inch',
  Acre : 'acre',
  Hectare : 'hectare',
})

const Volume = Object.freeze({
  Milliliter : "milliliter",
  Centiliter : "centiliter",
  Deciliter : "deciliter",
  Liter : "liter",
  Kiloliter : "kiloliter",
  Decaliter : "decaliter",
  Hectoliter : "hectoliter",
  CubicMillimeter : "cubic-millimeter",
  CubicCentimeter : "cubic-centimeter",
  CubicMeter : "cubic-meter",
  CubicInch : "cubic-inch",
  FluidOnce : "fluid-once",
  Gill : "gill",
  Pint: "pint",
  Quart : "quart",
  Gallon : "gallon"
})
module.exports = {Distance, Area, Volume};