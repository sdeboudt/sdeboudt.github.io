jQuery.sap.require('AkuaJs.Core');
jQuery.sap.declare("AkuaJs.Map"); 

   
  sap.ui.core.Control.extend("AkuaJs.Map", {  
            renderer: function (oRm, oControl) {  
                oRm.write("<div");  
                oRm.writeControlData(oControl);  
                 oRm.write(">");  
                oRm.write("</div>"); 
            }, 
             metadata : {  
    properties: {  
      "axis0": {type : "any"},
      "slicer": {type : "any"},  
      "connection": {type : "any"},  
      "colors": {type : "string[]"},  
      "numberFormat": {type : "string",defaultValue: ',.0f'},
      "mapCenter": {type : "any"},
      "zoom": {type : "any"},  
      "geoJson": {type : "any"},  
      "click": {type : "any"},    
    }}, 
            onAfterRendering: function (event) {  
			var me = this;
			 require(["AkuaLeaflet"], function(chart) {
			
				var barchart = chart({
					axis0: me.getAxis0(),
					slicer: me.getSlicer(),
					Connection : LocalCubeConnection(HyperCube(SDTL( me.getConnection()))),
                    colors:me.getColors(),
                    numberFormat :  me.getNumberFormat(),
                    mapCenter :  me.getMapCenter(),
                    zoom :  me.getZoom(),
                    geoJson :  me.getGeoJson(),
                    click :  me.getClick()

				});

				barchart.getViewCaller(event.srcControl.$());
				
			});
               
            }  
        });  