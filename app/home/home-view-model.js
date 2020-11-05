var observableModule = require("tns-core-modules/data/observable");


const dizgi = [];



function HomeViewModel() {

  fetch("https://rickandmortyapi.com/api/episode")
    .then((r) => r.json())
    .then((d) => {

      for (var i = 0; i < d.results.length; i++) {
        dizgi[i] = d.results[i].name;

      }
    })


  var viewModel = observableModule.fromObject({
    Label1: "",
    Label2: "",
    Label3: "",
    Label4: "",
    Label5: "",
    Label6: "",
    Label7: "",
    Label8: "",
    Label9: "",
    Label10: "",
    Label11: "",
    Label12: "",
    Label13: "",
    Label14: "",
    Label15: "",
    Label16: "",
    Label17: "",
    Label18: "",
    Label19: "",
    Label20: "",


    onButtonTap: function () {
      this.Label1 = dizgi[0];
      this.Label2 = dizgi[1];
      this.Label3 = dizgi[2];
      this.Label4 = dizgi[3];
      this.Label5 = dizgi[4];
      this.Label6 = dizgi[5];
      this.Label7 = dizgi[6];
      this.Label8 = dizgi[7];
      this.Label9 = dizgi[8];
      this.Label10 = dizgi[9];
      this.Label11 = dizgi[10];
      this.Label12 = dizgi[11];
      this.Label13 = dizgi[12];
      this.Label14 = dizgi[13];
      this.Label15 = dizgi[14];
      this.Label16 = dizgi[15];
      this.Label17 = dizgi[16];
      this.Label18 = dizgi[17];
      this.Label19 = dizgi[18];
      this.Label20 = dizgi[19];



    },


  });

  return viewModel;
}

module.exports = HomeViewModel;
