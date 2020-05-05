import Vue from "vue";
import { mapGetters} from "vuex";

const User ={
    install(Vue,option){
        Vue.mixin({
            computed:{
                ...mapGetters({
                  loggedIn:"auth/authintacted",
                  user:"auth/user"
                })
            }
        })
    }
}
 Vue.use(User);