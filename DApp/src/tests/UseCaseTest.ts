
import Worker from "../component/Worker";

export const query: string = `{
    "prefixList": {
      "desmo": "https://desmo.vaimee.it/",
      "qudt": "http://qudt.org/schema/qudt/"
    },
    "property": {
      "identifier": "desmo:OutdoorTemperature",
      "unit": "qudt:DEG_C",
      "datatype": 1
    },
    "staticFilter": "$[?((@.title != 'test' && @.type == 'onto:Sensor') || @.actions.moveLeft)]",
    "dynamicFilter": "(READ desmo:WindSpeed UNIT qudt:KiloM_PER_HR) >= 20.0 || (READ desmo:Status UNIT xsd:string) == 'Activated'",
    "geoFilter": {
      "region": {
        "center": {
          "latitude": 41.9109,
          "longitude": 12.4818
        },
        "maxDistanceFromCenter": {
          "value": 50.0,
          "unit": "qudt:KiloM"
        }
      },
      "altitudeRange": {
        "min": 0,
        "max": 500,
        "unit": "qudt:M"
      }
    },
    
    "timeFilter": {
      "until": "2022-12-31T23:59:59Z",
      "interval": "PT10M",
      "aggregation": "desmo:Average"
    }
  }`;

//directoriesList.length must be multiple of 4
const directoriesList=[0,4,5,1,2,6,8,9];

const test_01 =function(cb:() => void){
    console.log("WARNING: Use case test 01 NOT FINISHED YET");
    console.log("WARNING: Use case test 01 NOT FINISHED YET");
    console.log("WARNING: Use case test 01 NOT FINISHED YET");
    const worker = new Worker();
    worker.work(query,directoriesList);
    

    cb();
}

export default {
    test_01: test_01,
}