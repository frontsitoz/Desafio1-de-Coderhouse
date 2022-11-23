//CONTADOR

var app = new Vue({
    el: '#app',
    data: {
        contador: 0 //Inicia desde 0
        //color:"red"
    },
    methods: {
        sumar(){
            this.contador += + 1 //Sumale 1 a este método

            //this.contador < 0 ? this.color = "color-red" : this.color = "";  
        },
        restar(){
            this.contador += - 1 //Restale 1 a este método
            
           // this.contador < 0 ? this.color = "color-red" : this.color = ""; 
        }        
    },
    computed:{
        color(){
            return this.contador < 0 ? this.color = "color-red" : this.color = "";
        }
    }
 })