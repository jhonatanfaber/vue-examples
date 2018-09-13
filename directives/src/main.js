import Vue from 'vue'
import App from './App.vue'

Vue.directive("highlight", {
    bind(el, binding, vnode){
        let delay = 0
        // if user passes modifiers(ex: background.delay). It can be passed more than one
        if(binding.modifiers['delay']){
            delay = 3000
        }
        setTimeout( () => {
            // if user passes arguments
            if(binding.arg == 'background'){
                el.style.backgroundColor = binding.value
            }else{
                el.style.color = binding.value
            }
        }, delay)
       
    }

})

new Vue({
  el: '#app',
  render: h => h(App)
})
