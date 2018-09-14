<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p> {{name | upperCase}} </p>
                <input v-model="filteredText">
                <ul>
                    <li v-for="fruit in filteredFruits" :key="fruit.id">
                        {{fruit}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import {fruitMixin} from "./fruitMixin"

    export default {
        mixins : [fruitMixin],
        data(){
            return{
                name: "some text",
            }
        },
        //locally (globally can also be created in the main.js)
        filters : {
            upperCase(value){
                return value.toUpperCase();
            }
        }
    }
</script>

<style>

</style>
