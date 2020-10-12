<template>
    <div id="atletasCard">
        <h1>{{nome}}</h1>
        <i class="fa fa-user" ></i>        
        
       <i id="rede" :class="['fab ', icon]"></i>
       
        <h3>{{msg}}</h3> 
        <h4>{{idade}}</h4> 
    </div>
</template>
<script>
import Vue from 'vue'
new Vue({
        
        data: {
          path: 'https://www.google.com/'
        }
      });
export default {
    name: 'AtletasComponent',
  props: {
    nome:String,
    msg: String,
    idade: String,
    icon: String
  }
}

</script>

<style scoped>
    
    #atletasCard {
    /*border: solid 1px #d6d6c3; */
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    text-align: start;
    margin: auto;
    margin-bottom: 10px;
    background-color: floralwhite;
    padding: 7px;
    }
    h3 {
        font-style: italic;
        color: green;
        margin: auto;
        margin-bottom: 11px;
        font-size: 12pt;
    }
    i {
        color: darkgrey;
        margin-top: 4px;
        margin-left: 26px;
        font-size: 69pt;
    }
    h4 {
        position: absolute;
        margin-top: 57px;
        margin-left: 15px;
    }
    #rede {
        margin-top: 48px;
        margin-left: 93px;
        position: absolute;
        font-size: 25pt;
        color: cornflowerblue;
    }
</style>