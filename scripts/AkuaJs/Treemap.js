jQuery.sap.require('AkuaJs.Core');
jQuery.sap.declare("AkuaJs.Treemap");


sap.ui.core.Control.extend("AkuaJs.Treemap", {
    renderer: function (oRm, oControl) {
        oRm.write("<div");
        oRm.writeControlData(oControl);
        oRm.write(">");  
        oRm.write("</div>"); 
    },
    metadata: {
        properties: {
            "axis0": { type: "any" },
            "slicer": { type: "any" },
            "pkm0": { type: "any" },
            "pkm1": { type: "any" },
            "connection": { type: "any" },
            "colors": { type: "string[]" },
            "numberFormat": { type: "string", defaultValue: ',.0f' },
        }
    },
    onAfterRendering: function (event) {
        var me = this;
        require(["TreemapD3"], function (chart) {

            var barchart = chart({
                axis0: me.getAxis0(),
                slicer: me.getSlicer(),
                Connection: LocalCubeConnection(HyperCube(SDTL(me.getConnection()))),
                colors: me.getColors(),
                numberFormat: me.getNumberFormat(),
                pkm0: me.getPkm0(),
                pkm1: me.getPkm1(),

            });

            barchart.getViewCaller(event.srcControl.$());

        });

    }
});