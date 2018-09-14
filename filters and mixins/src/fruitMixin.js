export const fruitMixin = {
    data(){
        return{
            filteredText: "",
            fruits : ["apple", "banana", "pineapple","mango","melon"]
        }
    },
    computed : {
        filteredFruits(){
            return this.fruits.filter((e) => {
                return e.match(this.filteredText)
            })
        }
    }
}