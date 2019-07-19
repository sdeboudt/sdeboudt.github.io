jQuery.sap.require('AkuaJs.Core');
jQuery.sap.declare("AkuaJs.GeoHeatmap");


sap.ui.core.Control.extend("AkuaJs.GeoHeatmap", {
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
            "connection": { type: "any" },           
            "numberFormat": { type: "string", defaultValue: ',.0f' },
            "center": { type: "any" },
            "zoom": { type: "any" },
            "showMarkers": { type: "any" },
            "click": { type: "any" },
        }
    },
    onAfterRendering: function (event) {
        var me = this;
        require(["GeoHeatmapGoogle"], function (chart) {

            var barchart = chart({
                axis0: me.getAxis0(),
                slicer: me.getSlicer(),
                Connection: LocalCubeConnection(HyperCube(SDTL(me.getConnection()))),
                numberFormat: me.getNumberFormat(),
                center: me.getCenter(),
                zoom: me.getZoom(),
                showMarkers: me.getShowMarkers(),
                click: me.getClick()
            });

            barchart.getViewCaller(event.srcControl.$());

        });

    }
});