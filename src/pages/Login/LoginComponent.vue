<template>
  <div class="Login">
    <header>
      <quick-menu
        :menu-count="count"
        :icon-class="icons"
        :menu-url-list="list"
      ></quick-menu>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style="margin-top: 0px; height: 123px"
      >
        <path
          fill="#ffff"
          fill-opacity="1"
          d="M0,128L24,154.7C48,181,96,235,144,240C192,245,240,203,288,176C336,149,384,139,432,128C480,117,528,107,576,117.3C624,128,672,160,720,160C768,160,816,128,864,101.3C912,75,960,53,1008,37.3C1056,21,1104,11,1152,16C1200,21,1248,43,1296,58.7C1344,75,1392,85,1416,90.7L1440,96L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
        ></path>
      </svg>
    </header>

    <section id="presents">
      <div id="title">
        <h4>PeriPeri Race team</h4>
        <h5>Juntos somos mais fortes</h5>
        <button>CONHEÇA-NOS</button>
      </div>
      <div id="logo">
        <img
          src="../../assets/img/mtbPng.png"
          alt="periperi"
          
        />
      </div>
    </section>

    <section id="svgCod">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style="height: 179px; margin-top: -189px; position: initial"
      >
        <path
          fill="#f3f4f5"
          fill-opacity="1"
          d="M0,64L12.6,58.7C25.3,53,51,43,76,32C101.1,21,126,11,152,42.7C176.8,75,202,149,227,165.3C252.6,181,278,139,303,117.3C328.4,96,354,96,379,112C404.2,128,429,160,455,165.3C480,171,505,149,531,122.7C555.8,96,581,64,606,53.3C631.6,43,657,53,682,58.7C707.4,64,733,64,758,74.7C783.2,85,808,107,834,122.7C858.9,139,884,149,909,170.7C934.7,192,960,224,985,197.3C1010.5,171,1036,85,1061,96C1086.3,107,1112,213,1137,234.7C1162.1,256,1187,192,1213,181.3C1237.9,171,1263,213,1288,202.7C1313.7,192,1339,128,1364,90.7C1389.5,53,1415,43,1427,37.3L1440,32L1440,320L1427.4,320C1414.7,320,1389,320,1364,320C1338.9,320,1314,320,1288,320C1263.2,320,1238,320,1213,320C1187.4,320,1162,320,1137,320C1111.6,320,1086,320,1061,320C1035.8,320,1011,320,985,320C960,320,935,320,909,320C884.2,320,859,320,834,320C808.4,320,783,320,758,320C732.6,320,707,320,682,320C656.8,320,632,320,606,320C581.1,320,556,320,531,320C505.3,320,480,320,455,320C429.5,320,404,320,379,320C353.7,320,328,320,303,320C277.9,320,253,320,227,320C202.1,320,177,320,152,320C126.3,320,101,320,76,320C50.5,320,25,320,13,320L0,320Z"
        ></path>
      </svg>
      <div id="content">
        <div id="footerPresents">
          <h3>Nossos Atletas</h3>
          <h5> Campeões na vida</h5>
        </div>
        <div id="atletasCard">
            <AtletasComponent
             :nome="'Isaac Trindade'"
             :idade="'19 Anos'"
             :msg="'´O Mtb mudou minha vida!´'"
             :icon="'fa-instagram'"
            />
            <AtletasComponent
             :nome="'Jaques Almeida'"
             :idade="'14 anos'"
             :msg="'´Quero ser um atleta profissional!´'"
             :icon="'fa-instagram'"
            />
            <AtletasComponent
             :nome="'Arthur freitas'"
             :idade="'13 Anos'"
             :msg="'´Dia após dia lutando´'"
             :icon="'fa-instagram'"
            />
            
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style="margin-top: -10px"
      >
        <path
          fill="#f3f4f5"
          fill-opacity="1"
          d="M0,64L12.6,58.7C25.3,53,51,43,76,32C101.1,21,126,11,152,42.7C176.8,75,202,149,227,165.3C252.6,181,278,139,303,117.3C328.4,96,354,96,379,112C404.2,128,429,160,455,165.3C480,171,505,149,531,122.7C555.8,96,581,64,606,53.3C631.6,43,657,53,682,58.7C707.4,64,733,64,758,74.7C783.2,85,808,107,834,122.7C858.9,139,884,149,909,170.7C934.7,192,960,224,985,197.3C1010.5,171,1036,85,1061,96C1086.3,107,1112,213,1137,234.7C1162.1,256,1187,192,1213,181.3C1237.9,171,1263,213,1288,202.7C1313.7,192,1339,128,1364,90.7C1389.5,53,1415,43,1427,37.3L1440,32L1440,0L1427.4,0C1414.7,0,1389,0,1364,0C1338.9,0,1314,0,1288,0C1263.2,0,1238,0,1213,0C1187.4,0,1162,0,1137,0C1111.6,0,1086,0,1061,0C1035.8,0,1011,0,985,0C960,0,935,0,909,0C884.2,0,859,0,834,0C808.4,0,783,0,758,0C732.6,0,707,0,682,0C656.8,0,632,0,606,0C581.1,0,556,0,531,0C505.3,0,480,0,455,0C429.5,0,404,0,379,0C353.7,0,328,0,303,0C277.9,0,253,0,227,0C202.1,0,177,0,152,0C126.3,0,101,0,76,0C50.5,0,25,0,13,0L0,0Z"
        ></path>
      </svg>
    </section>
    <section id="noSvg1">
      <div id="content">
        <h1>VAMOS DAQUI AGORA</h1>
      </div>
    </section>
  </div>
</template>

<script>
import quickMenu from "vue-quick-menu";
import AtletasComponent from '../../components/AtletasComponent'


export default {
  components: {
    quickMenu: quickMenu,
    AtletasComponent 
  },
  
  data() {
    return {
      count: 4,
      icons: ["fa fa-github", "fa fa-comment", "fa fa-code", "fa fa-envelope"],
      list: [
        { isLink: false },
        { isLink: true, url: "/doo" },
        { isLink: true, url: "/foo" },
        { isLink: false },
      ],
      backgroundColor: "#17c4c5",
      color: "#ffffff",
      position: "top-left",
      isOpenNewTab: true,
      
    };
  },

};
</script>

<style lang="scss" src="./style.scss" scoped />
