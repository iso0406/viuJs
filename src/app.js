const MyApp = {
    data(){
        return{
            numero:0,
            name: "",
            input_name: "",
        }
    },
    methods:{
        somar(){
            this.numero += 1;
        },
        diminuir(){
            if (this.numero < 0) {
                alert('Não pode numeros negativos !!!');
            } else {
                this.numero -= 1;
            }
        },
        formApp(e){
            e.preventDefault();
            this.name = this.input_name
        }
    }
}

Vue.createApp(MyApp).mount('#app');