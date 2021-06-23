require('./bootstrap');

import { createApp } from 'vue'
import ExampleComponent from './components/ExampleComponent.vue'
import AnotherExample from './components/AnotherExampleComponent.vue'
createApp({
components:{
    ExampleComponent,AnotherExample
}
}).mount('#app')