jQuery.sap.require('AkuaJs.Core');
jQuery.sap.declare("AkuaJs.StackedArea"); 

   
  sap.ui.core.Control.extend("AkuaJs.StackedArea", {  
            renderer: function (oRm, oControl) {  
                oRm.write("<div");  
                oRm.writeControlData(oControl);  
                oRm.write(">");  
                oRm.write("</div>");  
            }, 
             metadata : {  
    properties: {  
      "axis0": {type : "any"},
      "axis1": {type : "any"},
      "slicer": {type : "any"},  
      "connection": {type : "any"},  
      "colors": {type : "string[]"},  
      "numberFormat": {type : "string",defaultValue: ',.0f'},
    }}, 
            onAfterRendering: function (event) {  
			var me = this;
			 require(["StackedAreaChartNvd3"], function(chart) {
			
				var barchart = chart({
					axis0: me.getAxis0(),
                    axis1: me.getAxis1(),
					slicer: me.getSlicer(),
					Connection : LocalCubeConnection(HyperCube(SDTL( me.getConnection()))),
                    colors:me.getColors(),
                    numberFormat :  me.getNumberFormat(),
                     style:'stack'

				});

				barchart.getViewCaller(event.srcControl.$());
				
			});
               
            }  
        });  