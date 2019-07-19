 jQuery.sap.require('AkuaJs.Core');
 jQuery.sap.declare("AkuaJs.CalendarHeatmap"); 

   
  sap.ui.core.Control.extend("AkuaJs.CalendarHeatmap", {  
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
      "locale": {type : "string"},  
        "minDate": {type : "any"},  
          "maxDate": {type : "any"},  
            "range": {type : "string"},  
    }}, 
            onAfterRendering: function (event) {  
			var me = this;
			 require(["AkuaCalHeatmap"], function(chart) {
			
				var barchart = chart({
					axis0: me.getAxis0(),
					slicer: me.getSlicer(),
					Connection : LocalCubeConnection(HyperCube(SDTL( me.getConnection()))),
                    colors:me.getColors(),
                    numberFormat : me.getNumberFormat(),
                    //  height:me.getSlicer(),
                    locale:me.getLocale()
                    ,minDate:me.getMinDate()
                    ,maxDate:me.getMaxDate()
                    ,range:me.getRange()

				});

				barchart.getViewCaller(event.srcControl.$());
				
			});
               
            }  
        });  