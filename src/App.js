import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './jquery-jvectormap.css'
import axios from 'axios';
import { VectorMap } from "react-jvectormap"



let mapData = {
  "AD": 84000,
  "AE": 4975593,
  "AF": 29121286,
  "AG": 86754,
  "AI": 13254,
  "AL": 2986952,
  "AM": 2968000,
  "AN": 300000,
  "AO": 13068161,
  "AQ": 0,
  "AR": 41343201,
  "AS": 57881,
  "AT": 8205000,
  "AU": 21515754,
  "AW": 71566,
  "AX": 26711,
  "AZ": 8303512,
  "BA": 4590000,
  "BB": 285653,
  "BD": 156118464,
  "BE": 10403000,
  "BF": 16241811,
  "BG": 7148785,
  "BH": 738004,
  "BI": 9863117,
  "BJ": 9056010,
  "BL": 8450,
  "BM": 65365,
  "BN": 395027,
  "BO": 9947418,
  "BQ": 18012,
  "BR": 201103330,
  "BS": 301790,
  "BT": 699847,
  "BV": 0,
  "BW": 2029307,
  "BY": 9685000,
  "BZ": 314522,
  "CA": 33679000,
  "CC": 628,
  "CD": 70916439,
  "CF": 4844927,
  "CG": 3039126,
  "CH": 7581000,
  "CI": 21058798,
  "CK": 21388,
  "CL": 16746491,
  "CM": 19294149,
  "CN": 1330044000,
  "CO": 47790000,
  "CR": 4516220,
  "CS": 10829175,
  "CU": 11423000,
  "CV": 508659,
  "CW": 141766,
  "CX": 1500,
  "CY": 1102677,
  "CZ": 10476000,
  "DE": 81802257,
  "DJ": 740528,
  "DK": 5484000,
  "DM": 72813,
  "DO": 9823821,
  "DZ": 34586184,
  "EC": 14790608,
  "EE": 1291170,
  "EG": 80471869,
  "EH": 273008,
  "ER": 5792984,
  "ES": 46505963,
  "ET": 88013491,
  "FI": 5244000,
  "FJ": 875983,
  "FK": 2638,
  "FM": 107708,
  "FO": 48228,
  "FR": 64768389,
  "GA": 1545255,
  "GB": 62348447,
  "GD": 107818,
  "GE": 4630000,
  "GF": 195506,
  "GG": 65228,
  "GH": 24339838,
  "GI": 27884,
  "GL": 56375,
  "GM": 1593256,
  "GN": 10324025,
  "GP": 443000,
  "GQ": 1014999,
  "GR": 11000000,
  "GS": 30,
  "GT": 13550440,
  "GU": 159358,
  "GW": 1565126,
  "GY": 748486,
  "HK": 6898686,
  "HM": 0,
  "HN": 7989415,
  "HR": 4284889,
  "HT": 9648924,
  "HU": 9982000,
  "ID": 242968342,
  "IE": 4622917,
  "IL": 7353985,
  "IM": 75049,
  "IN": 1173108018,
  "IO": 4000,
  "IQ": 29671605,
  "IR": 76923300,
  "IS": 308910,
  "IT": 60340328,
  "JE": 90812,
  "JM": 2847232,
  "JO": 6407085,
  "JP": 127288000,
  "KE": 40046566,
  "KG": 5776500,
  "KH": 14453680,
  "KI": 92533,
  "KM": 773407,
  "KN": 51134,
  "KP": 22912177,
  "KR": 48422644,
  "KW": 2789132,
  "KY": 44270,
  "KZ": 15340000,
  "LA": 6368162,
  "LB": 4125247,
  "LC": 160922,
  "LI": 35000,
  "LK": 21513990,
  "LR": 3685076,
  "LS": 1919552,
  "LT": 2944459,
  "LU": 497538,
  "LV": 2217969,
  "LY": 6461454,
  "MA": 33848242,
  "MC": 32965,
  "MD": 4324000,
  "ME": 666730,
  "MF": 35925,
  "MG": 21281844,
  "MH": 65859,
  "MK": 2062294,
  "ML": 13796354,
  "MM": 53414374,
  "MN": 3086918,
  "MO": 449198,
  "MP": 53883,
  "MQ": 432900,
  "MR": 3205060,
  "MS": 9341,
  "MT": 403000,
  "MU": 1294104,
  "MV": 395650,
  "MW": 15447500,
  "MX": 112468855,
  "MY": 28274729,
  "MZ": 22061451,
  "NA": 2128471,
  "NC": 216494,
  "NE": 15878271,
  "NF": 1828,
  "NG": 154000000,
  "NI": 5995928,
  "NL": 16645000,
  "NO": 5009150,
  "NP": 28951852,
  "NR": 10065,
  "NU": 2166,
  "NZ": 4252277,
  "OM": 2967717,
  "PA": 3410676,
  "PE": 29907003,
  "PF": 270485,
  "PG": 6064515,
  "PH": 99900177,
  "PK": 184404791,
  "PL": 38500000,
  "PM": 7012,
  "PN": 46,
  "PR": 3916632,
  "PS": 3800000,
  "PT": 10676000,
  "PW": 19907,
  "PY": 6375830,
  "QA": 840926,
  "RE": 776948,
  "RO": 21959278,
  "RS": 7344847,
  "RU": 140702000,
  "RW": 11055976,
  "SA": 25731776,
  "SB": 559198,
  "SC": 88340,
  "SD": 35000000,
  "SE": 9828655,
  "SG": 4701069,
  "SH": 7460,
  "SI": 2007000,
  "SJ": 2550,
  "SK": 5455000,
  "SL": 5245695,
  "SM": 31477,
  "SN": 12323252,
  "SO": 10112453,
  "SR": 492829,
  "SS": 8260490,
  "ST": 175808,
  "SV": 6052064,
  "SX": 37429,
  "SY": 22198110,
  "SZ": 1354051,
  "TC": 20556,
  "TD": 10543464,
  "TF": 140,
  "TG": 6587239,
  "TH": 67089500,
  "TJ": 7487489,
  "TK": 1466,
  "TL": 1154625,
  "TM": 4940916,
  "TN": 10589025,
  "TO": 122580,
  "TR": 77804122,
  "TT": 1228691,
  "TV": 10472,
  "TW": 22894384,
  "TZ": 41892895,
  "UA": 45415596,
  "UG": 33398682,
  "UM": 0,
  "US": 310232863,
  "UY": 3477000,
  "UZ": 27865738,
  "VA": 921,
  "VC": 104217,
  "VE": 27223228,
  "VG": 21730,
  "VI": 108708,
  "VN": 89571130,
  "VU": 221552,
  "WF": 16025,
  "WS": 192001,
  "XK": 1800000,
  "YE": 23495361,
  "YT": 159042,
  "ZA": 49000000,
  "ZM": 13460305,
  "ZW": 13061000
};




const axiosGitHubGraphQL = axios.create({
  baseURL: 'https://countries.trevorblades.com',
});

const GET_COUNTRIES = `
{
  country(code: "IN") {
    name
    native
    emoji
    currency
    languages {
      code
      name
    }
  }
}
`;

const GET_COUNTRIES_1 = `
{
  country(code: "`;

const GET_COUNTRIES_2 = `") {
    name
    native
    emoji
    currency
    languages {
      code
      name
    }
  }
}
`;




const GET_COUNTRYDET = `
query getCountrydet($locationType: String!){
  country(code: $locationType) {
    name
    native
    emoji
    currency
    languages {
      code
      name
    }
  }
}
`;


class App extends Component {
  constructor() {
    super();

    this.state = {
      country:null
    };
    
  }
  componentDidMount() {
    this.onFetchFromGitHub();
  }
  onFetchFromGitHub = () => {
    axiosGitHubGraphQL  
      .post('',{query:GET_COUNTRIES},{headers: {
        'Content-Type': 'application/json'
      }})
      .then(result => this.setState(() => ({
        country: result.data.data.country
      })),);
  };

  /*getCountryDet= (Country)=>{

    axiosGitHubGraphQL  
    .post('',{query:GET_COUNTRYDET,variables:{locationType: "Country"}},{headers: {
      'Content-Type': 'application/json'
    }})
    .then(result => this.setState(() => ({
      country: result.data.data.country
    
    })),);
    
  }*/

  render(){
    const {country} = this.state;
    //console.log(this.state.country);
    if(country==null)
      return(<div className="App"></div>);
  return (
    
    <div className="App">
     <h2> Countries of the World</h2>
     <p> </p>
     <Country country={country} />
     
    </div>
  );
}
}


const handleHoverClick=(e, el, code)=>{

   
  var q=GET_COUNTRIES_1+code+GET_COUNTRIES_2;
  // console.log(q);
  axiosGitHubGraphQL  
      .post('',{query:q},{headers: {
        'Content-Type': 'application/json'
      }})
      .then((result)=>{
        let country= result.data.data.country;
        // console.log(country);
        let cname= country.name;
        let ccurrency= country.currency;
        let cemoji= country.emoji;
        let cnative= country.native;
        let clcode=[]; 
        clcode= country.languages[0];
        let cllanguages="";
        for( var i=0;i<clcode.length;i++){
           cllanguages= clcode[i] ;
        }
        
        let c="<div><li>Country Name:"+cname+"</li><li>Currency:"+ccurrency+"</li><li>Emoji:"+cemoji+"</li><li>Native:"+cnative+"</li><li>Languages:"+cllanguages+"</li></div>";
        
        if(el.html()!==c)
          el.html(c);
      } );
 
}

/*const handleClick=(event,code)=>{
  console.log(code);
}*/

const Country = ({ country }) => {
  // console.log({country});
  
  return (
  <div>
    
       <p>Select a Country to view its details.</p> 
      
       <VectorMap
      map={"world_mill"}
      backgroundColor="transparent" //change it to blue !!!
      zoomOnScroll={false}
      containerStyle={{
        width: "100%",
        height: "520px"
      }}
      onRegionTipShow={handleHoverClick}
  //    onRegionClick = {handleClick}  
      containerClassName="map"
      regionStyle={{
        initial: {
          fill: "#e4e4e4",
          "fill-opacity": 0.9,
          stroke: "none",
          "stroke-width": 0,
          "stroke-opacity": 0
        },
        hover: {
          "fill-opacity": 0.8,
          cursor: 'pointer'
          
        },
        
        selectedHover: {
          fill: '#2738ce'
        }      
      }}
      regionsSelectable={false}
      regionStyle= {{initial:{fill:'#cbced4'}}
       
      }
      series={{
        regions: [
          {
            values: mapData,  //this is your data
            scale: ["#146804", "#ff0000"],  //your color game's here
            normalizeFunction: "polynomial"
            //normalizeFunction: "linear"
          }
        ]
      }}
    />
  </div>
);
  };
export default App;
