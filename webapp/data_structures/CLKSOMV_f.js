function CLKSOMV_f() {
    CLKSOMV_f.prototype.get = function CLKSOMV_f() {
        alert("parameters can not be changed")
    }

    CLKSOMV_f.prototype.internal = function CLKSOMV_f() {
        var model = scicos_model();
        model.sim = new ScilabString(["sum"]);
        model.evtin = new ScilabDouble([1], [1], [1]);
        model.evtout = new ScilabDouble([1]);
        model.blocktype = new ScilabString(["d"]);
        model.firing = new ScilabDouble([-1]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CLKSOMV_f\",sz(1),sz(2));"]);
        var block = new standard_define(new ScilabDouble([2, 2]), model, new ScilabDouble(), gr_i);
        return block;
    }

    CLKSOMV_f.prototype.define = function CLKSOMV_f() {
        var model = scicos_model();
        model.sim = new ScilabString(["sum"]);
        model.evtin = new ScilabDouble([1], [1], [1]);
        model.evtout = new ScilabDouble([1]);
        model.blocktype = new ScilabString(["d"]);
        model.firing = new ScilabDouble([-1]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CLKSOMV_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, new ScilabDouble(), gr_i);
        return new RoundBlock(this.x);
    }
    CLKSOMV_f.prototype.details = function CLKSOMV_f() {
        return this.x;
    }

    CLKSOMV_f.prototype.get_popup_title = function CLKSOMV_f() {
        var set_param_popup_title="Set parameters";
        return set_param_popup_title
    }
    
    CLKSOMV_f.prototype.getDimensionForDisplay = function CLKSOMV_f(){
        var dimension = { width: 40, height: 40 };
        return dimension
    }

}
