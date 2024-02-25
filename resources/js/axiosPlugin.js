export default {
    install(Vue) {
        let defaultCallbackFunction = null;
        let injectedCallMessageFunction = null;

        Vue.mixin({
            created() {
                this.$axiosSetInjectedCallMessage = function(callback) {
                    injectedCallMessageFunction = callback;
                };

                this.$axiosGetInjectedCallMessage = function() {
                    return injectedCallMessageFunction;
                };
            }
        });
    }
};
