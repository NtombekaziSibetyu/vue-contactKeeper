import forms from './forms/forms.vue'
import landing from './landing.vue'
import userContacts from '../components/contact/main.vue'

export default [
    { path : "/", component : landing},
    { path : "/sign-in", component : forms},
    { path :"/:id", component: userContacts}
]