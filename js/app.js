//https://api.brewerydb.com/v2/locations?locality=Chicago&key=cbf0ce3c607c3b7ddcb88588151b9891&format=json
var response;

//Generate a Brewery List from the brewerydb api JSON response
function generateBreweryList(response){
  var orderedList = response.data;
  return orderedList
};

//Generate a map marker Array from the brewerydb api JSON response
function generateBreweryCoordinates(response){
  var markerArray = [];
  var marker;
  for (var i = 0; i < response.data.length; i++) {
    marker = { 'name': response.data[i].brewery.nameShortDisplay,
                'lat': response.data[i].latitude,
                'lng': response.data[i].longitude};
    markerArray.push(marker);
  }
  return markerArray;
};



function map(lat = 41.8339042, long = -88.0123461) {
  this.mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(lat,long),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  this.map = new google.maps.Map(document.getElementById('map'), this.mapOptions);

  var marker;
  var breweryCoordinates = generateBreweryCoordinates(response);
  for (var i = 0; i < breweryCoordinates.length; i++) {
    console.log(breweryCoordinates[i])
    marker = new google.maps.Marker({
      position: { lat: breweryCoordinates[i].lat, lng: breweryCoordinates[i].lng },
      map: map
    });
  };
};

function appViewModel() {
  var self = this;

  self.firstName = ko.observable('Bert');
  self.lastName = ko.observable('Rodriguez');
  self.firstNameCaps = ko.pureComputed(function() {
      return self.firstName().toUpperCase();
  });

  self.breweryList = ko.observableArray(generateBreweryList(response)); //List of breweries on the selected neighborhood

  //self.mapMarkers = ko.observableArray(generateList(response)); //List of markers for the mapMarkers
  self.neighborHood = ko.observable('Chicago'); //Selected neighborhood
  self.latitude = ko.observable(41.89044373452023); //Selected neighborhood map lat
  self.longitude = ko.observable(-87.62190229812012);

  self.toggleList = ko.observable(); //Toggle button for hiding/showing list

  self.map = map(self.latitude(), self.longitude());



};

$(function(){
  ko.applyBindings(new appViewModel());
});


response = {
  "currentPage":1,
  "numberOfPages":2,
  "totalResults":59,
  "data":[
    {
      "id":"FJBHl5",
      "name":"Around the Bend Beer Co.",
      "streetAddress":"2601 W Diversey",
      "locality":"Chicago",
      "region":"Illinois",
      "postalCode":"60647",
      "website":"www.atbbeerco.com",
      "latitude":41.931994,
      "longitude":-87.6933002,
      "isPrimary":"Y",
      "inPlanning":"N",
      "isClosed":"N",
      "openToPublic":"N",
      "locationType":"micro",
      "locationTypeDisplay":"Micro Brewery",
      "countryIsoCode":"US",
      "yearOpened":"2014",
      "status":"verified",
      "statusDisplay":"Verified",
      "createDate":"2015-06-10 16:48:16",
      "updateDate":"2015-06-11 14:54:28",
      "breweryId":"T83Ot9",
      "brewery":{
        "id":"T83Ot9",
        "name":"Around the Bend Beer Co.",
        "nameShortDisplay":"Around the Bend Beer Co.",
        "description":"There's never been a more exciting time in craft beer. So come join us and let's see what's Around the Bend!",
        "website":"http:\/\/www.atbbeerco.com",
        "established":"2014",
        "isOrganic":"N",
        "images":{
          "icon":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/T83Ot9\/upload_KldPlK-icon.png",
          "medium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/T83Ot9\/upload_KldPlK-medium.png",
          "large":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/T83Ot9\/upload_KldPlK-large.png",
          "squareMedium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/T83Ot9\/upload_KldPlK-squareMedium.png",
          "squareLarge":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/T83Ot9\/upload_KldPlK-squareLarge.png"
        },
        "status":"verified",
        "statusDisplay":"Verified",
        "createDate":"2015-06-09 21:09:57",
        "updateDate":"2015-12-22 16:10:28"
      },
      "country":{
        "isoCode":"US",
        "name":"UNITED STATES",
        "displayName":"United States",
        "isoThree":"USA",
        "numberCode":840,
        "createDate":"2012-01-03 02:41:33"
      }
    },
    {
      "id":"3IBs1S",
      "name":"Baderbrau Brewery",
      "streetAddress":"2515 S Wabash Ave",
      "locality":"Chicago",
      "region":"Illinois",
      "postalCode":"60616",
      "website":"http:\/\/www.baderbrau.com",
      "latitude":41.846963,
      "longitude":-87.624831,
      "isPrimary":"Y",
      "inPlanning":"N",
      "isClosed":"N",
      "openToPublic":"Y",
      "locationType":"micro",
      "locationTypeDisplay":"Micro Brewery",
      "countryIsoCode":"US",
      "status":"verified",
      "statusDisplay":"Verified",
      "createDate":"2014-05-29 10:57:42",
      "updateDate":"2015-06-16 13:35:47",
      "breweryId":"LZmXC8",
      "brewery":{
        "id":"LZmXC8",
        "name":"Baderbr\u00e4u",
        "nameShortDisplay":"Baderbr\u00e4u",
        "description":"Chicago's Original Craft Beer",
        "website":"http:\/\/www.baderbrau.com",
        "mailingListUrl":"www.baderbrau.com\/contact",
        "isOrganic":"N",
        "images":{
          "icon":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/LZmXC8\/upload_dQX3aP-icon.png",
          "medium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/LZmXC8\/upload_dQX3aP-medium.png",
          "large":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/LZmXC8\/upload_dQX3aP-large.png",
          "squareMedium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/LZmXC8\/upload_dQX3aP-squareMedium.png",
          "squareLarge":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/LZmXC8\/upload_dQX3aP-squareLarge.png"
        },
        "status":"verified",
        "statusDisplay":"Verified",
        "createDate":"2014-05-29 10:57:05",
        "updateDate":"2015-12-22 15:54:23"
      },
      "country":{
        "isoCode":"US",
        "name":"UNITED STATES",
        "displayName":"United States",
        "isoThree":"USA",
        "numberCode":840,
        "createDate":"2012-01-03 02:41:33"
      }
    },
    {
      "id":"kL5mvc",
      "name":"Brewery",
      "streetAddress":"3155 N. Broadway",
      "locality":"Chicago",
      "region":"Illinois",
      "postalCode":"60657",
      "phone":"7738573155",
      "website":"http:\/\/www.dryhopchicago.com",
      "hoursOfOperation":"Sun - Fri 11am \u2013 2am \/ Sat 11am \u2013 3am",
      "latitude":41.9390869,
      "longitude":-87.6443575,
      "isPrimary":"Y",
      "inPlanning":"N",
      "isClosed":"N",
      "openToPublic":"Y",
      "locationType":"micro",
      "locationTypeDisplay":"Micro Brewery",
      "countryIsoCode":"US",
      "status":"verified",
      "statusDisplay":"Verified",
      "createDate":"2013-09-16 21:19:56",
      "updateDate":"2014-07-23 19:11:34",
      "breweryId":"DnuXce",
      "brewery":{
        "id":"DnuXce",
        "name":"DryHop",
        "nameShortDisplay":"DryHop",
        "description":"Wondering about us? That\u2019s very flattering.\r\n\r\nDryHop Brewers is a brewery and kitchen. The craft beer we brew is only available here in Lakeview, Chicago. Yes, we do tend to focus on hop-centric ales. Everything that comes out of our kitchen is prepared from scratch and, when the seasons allow, is locally sourced.\r\n\r\nHanging out at DryHop is all about being in a brewery; feeling connected to the craft brewing and culinary worlds; and most importantly, feeling a personal connection to a community of craftsman. You\u2019ll soon discover the absolute perfection of drinking a craft beer at the source.",
        "website":"http:\/\/www.dryhopchicago.com",
        "isOrganic":"N",
        "images":{
          "icon":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/DnuXce\/upload_QV1hZO-icon.png",
          "medium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/DnuXce\/upload_QV1hZO-medium.png",
          "large":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/DnuXce\/upload_QV1hZO-large.png",
          "squareMedium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/DnuXce\/upload_QV1hZO-squareMedium.png",
          "squareLarge":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/DnuXce\/upload_QV1hZO-squareLarge.png"
        },
        "status":"verified",
        "statusDisplay":"Verified",
        "createDate":"2013-09-16 21:17:49",
        "updateDate":"2015-12-22 15:47:19"
      },
      "country":{
        "isoCode":"US",
        "name":"UNITED STATES",
        "displayName":"United States",
        "isoThree":"USA",
        "numberCode":840,
        "createDate":"2012-01-03 02:41:33"
      }
    },
    {
      "id":"8pwTwz",
      "name":"Brewery",
      "streetAddress":"2000 Dempster Street",
      "locality":"Chicago",
      "region":"Illinois",
      "postalCode":"60202",
      "phone":"(847) 864-1000",
      "website":"http:\/\/temperancebeer.com\/",
      "latitude":42.0410719,
      "longitude":-87.7010061,
      "isPrimary":"Y",
      "inPlanning":"N",
      "isClosed":"N",
      "openToPublic":"N",
      "locationType":"micro",
      "locationTypeDisplay":"Micro Brewery",
      "countryIsoCode":"US",
      "yearOpened":"2013",
      "status":"verified",
      "statusDisplay":"Verified",
      "createDate":"2013-09-30 22:48:08",
      "updateDate":"2014-07-23 19:11:34",
      "breweryId":"zz2QUa",
      "brewery":{
        "id":"zz2QUa",
        "name":"Temperance Beer Company",
        "nameShortDisplay":"Temperance",
        "description":"It\u2019s taken almost one hundred years, but Evanston can once again call itself home to a Temperance movement. But this time there\u2019s beer. In fact, this one is all about the beer. Aside from that tiny detail, Temperance has always been about making life better in ways big and small. We think that\u2019s a worthy goal, and one that only comes about by being open to the possibilities. It\u2019s something we think about with the beers we brew and the things we do. (And when you join us, you will too.)\r\nWelcome to a new Temperance movement.",
        "website":"http:\/\/www.temperancebeer.com",
        "established":"2013",
        "isOrganic":"N",
        "images":{
          "icon":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/zz2QUa\/upload_B0t8iL-icon.png",
          "medium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/zz2QUa\/upload_B0t8iL-medium.png",
          "large":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/zz2QUa\/upload_B0t8iL-large.png",
          "squareMedium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/zz2QUa\/upload_B0t8iL-squareMedium.png",
          "squareLarge":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/zz2QUa\/upload_B0t8iL-squareLarge.png"
        },
        "status":"verified",
        "statusDisplay":"Verified",
        "createDate":"2013-09-30 22:46:17",
        "updateDate":"2015-12-22 15:47:41"
      },
      "country":{
        "isoCode":"US",
        "name":"UNITED STATES",
        "displayName":"United States",
        "isoThree":"USA",
        "numberCode":840,
        "createDate":"2012-01-03 02:41:33"
      }
    },
    {
      "id":"xjjDoA",
      "name":"Brewpub",
      "streetAddress":"2323 N Milwaukee Ave",
      "locality":"Chicago",
      "region":"Illinois",
      "postalCode":"60647",
      "phone":"773-227-2739",
      "website":"http:\/\/revbrew.com\/",
      "hoursOfOperation":"Mon-Fri: 11am-2am\r\nSat: 10am-3am\r\nSun: 10am-2am",
      "latitude":41.923363,
      "longitude":-87.698071,
      "isPrimary":"N",
      "inPlanning":"N",
      "isClosed":"N",
      "openToPublic":"Y",
      "locationType":"brewpub",
      "locationTypeDisplay":"Brewpub",
      "countryIsoCode":"US",
      "status":"verified",
      "statusDisplay":"Verified",
      "createDate":"2012-01-03 02:42:07",
      "updateDate":"2014-07-23 19:11:34",
      "breweryId":"PHkaP0",
      "brewery":{
        "id":"PHkaP0",
        "name":"Revolution Brewing",
        "nameShortDisplay":"Revolution",
        "description":"Revolution Brewing is Chicago's new hometown craft brewery. Our brewpub in Logan Square is a bustling, neighborhood institution where friends and families meet to enjoy the freshest beer in town. Opening our brewery has been a labor of love. We think you can see that in everything we do ranging from the details of our carved fists holding up our mahogany bar to the pungent hop aroma of our Anti-Hero IPA to our creative dishes like our bacon-fat popcorn.\r\n\r\nThe growth of craft breweries in the U.S. has been nothing short of a revolution and we're proud to be standing tall in this new crowd. The changing tastes of beer drinkers demand bigger flavors and more variety. That's exactly what we give you at Revolution Brewing. Our brewpub produces about 50 different beer styles each year. We've got session beers like Workingman Mild, hop-bombs like Double Fist and more bourbon barrel aged beers than you can shake a stave at. We have fun doing what we do and invite you to come in and join us.",
        "website":"http:\/\/revbrew.com\/",
        "established":"2010",
        "isOrganic":"N",
        "images":{
          "icon":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/PHkaP0\/upload_X9hrAl-icon.png",
          "medium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/PHkaP0\/upload_X9hrAl-medium.png",
          "large":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/PHkaP0\/upload_X9hrAl-large.png",
          "squareMedium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/PHkaP0\/upload_X9hrAl-squareMedium.png",
          "squareLarge":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/PHkaP0\/upload_X9hrAl-squareLarge.png"
        },
        "status":"verified",
        "statusDisplay":"Verified",
        "createDate":"2012-01-03 02:42:07",
        "updateDate":"2015-12-22 14:55:57"
      },
      "country":{
        "isoCode":"US",
        "name":"UNITED STATES",
        "displayName":"United States",
        "isoThree":"USA",
        "numberCode":840,
        "createDate":"2012-01-03 02:41:33"
      }
    },
  ],
  "status":"success"
};
