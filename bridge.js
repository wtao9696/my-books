class JSBridge {
    constructor() {
        this.callID = 0;
        this.callBackCtx = new Map();
    }
    
    
    /**
    * @description JS向原生通信
    * @param {String} module 目标模块名
    * @param {String} method 方法名
    * @param {Object} params 参数
    * @param {Function} success 成功的回调
    * @param {Function} error 失败的回调
    */
    callNative(module, method, params, success, error) {
        params = params || {};
        const callId = ++this.callID;
        this.callBackCtx.set(callId, {success, error});
        params = this.ecodeFn(params);
        const v1 = {
            module,
            method,
            params,
            callId
        }
        
        this.jsInvokeNative(JSON.stringify(v1));
    };

    /**
     * @description js注入到原生
    */
    jsInvokeNative(v1) {
        if (typeof v1 === 'object') v1 = JSON.stringify(v1);
        window.JsInvokeNative(v1);
    };

    /**
     * @description 原生通过该方法触发回调
    */
    callback(callId, status, params) {
        params = params || "{}"
        try {
            params = JSON.parse(params);
        } catch(e) {
            params = {}
        }

        const ctx = this.callBackCtx.get(callId);
        const {success, error} = ctx || {};
        if (status) {
            setTimeout(() => {
                success(params);
            }, 0);
        } else {
            setTimeout(() => {
                error(params);
            }, 0);
        }
    }
}