
	var conn = $.db.getConnection();
	var query = "select TOP 10 tradlac, naam, streek, length, area, shape.ST_AsGeoJson() as shape FROM \"NEO_BIEC508RFYRBA9OSGMDT9OIXV\".\"ile_la_traditioneel_landschap\"";
	// $.trace.debug(query);
	var pstmt = conn.prepareStatement(query);
	var rs = pstmt.executeQuery();


	var response = {type: "FeatureCollection"};
	response.features = [];

	while ( rs.next() ) {
		response.features.push( {type: "Feature",  tradlac:rs.getString(1), naam:rs.getString(2), streek:rs.getString(3), length:rs.getString(4), area:rs.getString(5), geometry: JSON.parse( rs.getString(6)) } );
	}

	response.properties = {};

	rs.close();
	pstmt.close();
	conn.close();
	
	$.response.contentType = "application/json";
	$.response.headers.set("Access-Control-Allow-Origin","*");
	$.response.setBody(JSON.stringify(response));	
	$.response.status = $.net.http.OK;


   
