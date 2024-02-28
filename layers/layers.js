ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32648").setExtent([260648.562945, 1813987.990950, 279468.565692, 1823253.564911]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite ',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32648'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: "แหล่งน้ำในเทศบาลนครขอนแก่น",
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> แหล่งน้ำในเทศบาลนครขอนแก่น'
            });
var format_4_2 = new ol.format.GeoJSON();
var features_4_2 = format_4_2.readFeatures(json_4_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32648'});
var jsonSource_4_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4_2.addFeatures(features_4_2);
var lyr_4_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_4_2, 
                style: style_4_2,
                popuplayertitle: "แบบแบ่งเขต4เขต",
                interactive: true,
                title: '<img src="styles/legend/4_2.png" /> แบบแบ่งเขต4เขต'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32648'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: "ถนนแบบแบ่งเขต",
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> ถนนแบบแบ่งเขต'
            });
var format_UTM_4 = new ol.format.GeoJSON();
var features_UTM_4 = format_UTM_4.readFeatures(json_UTM_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32648'});
var jsonSource_UTM_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UTM_4.addFeatures(features_UTM_4);
var lyr_UTM_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UTM_4, 
                style: style_UTM_4,
                popuplayertitle: "โรงพยาบาลนครขอนแก่น-UTM",
                interactive: true,
                title: '<img src="styles/legend/UTM_4.png" /> โรงพยาบาลนครขอนแก่น-UTM'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr__1.setVisible(true);lyr_4_2.setVisible(true);lyr__3.setVisible(true);lyr_UTM_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr__1,lyr_4_2,lyr__3,lyr_UTM_4];
lyr__1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_4_2.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr__3.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_UTM_4.set('fieldAliases', {'ลำดับที่': 'ลำดับที่', 'สถานพยาบาล': 'สถานพยาบาล', 'ตำบล': 'ตำบล', 'X': 'X', 'Y': 'Y', 'field_6': 'field_6', });
lyr__1.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_4_2.set('fieldImages', {'Id': 'Range', 'name': 'TextEdit', });
lyr__3.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_UTM_4.set('fieldImages', {'ลำดับที่': 'Range', 'สถานพยาบาล': 'TextEdit', 'ตำบล': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'field_6': 'TextEdit', });
lyr__1.set('fieldLabels', {'Name': 'inline label - visible with data', 'descriptio': 'inline label - visible with data', 'timestamp': 'inline label - visible with data', 'begin': 'inline label - visible with data', 'end': 'inline label - visible with data', 'altitudeMo': 'inline label - visible with data', 'tessellate': 'inline label - visible with data', 'extrude': 'inline label - visible with data', 'visibility': 'inline label - visible with data', 'drawOrder': 'inline label - visible with data', 'icon': 'inline label - visible with data', });
lyr_4_2.set('fieldLabels', {'Id': 'inline label - visible with data', 'name': 'inline label - visible with data', });
lyr__3.set('fieldLabels', {'osm_id': 'inline label - visible with data', 'code': 'inline label - visible with data', 'fclass': 'inline label - visible with data', 'name': 'inline label - visible with data', 'ref': 'inline label - visible with data', 'oneway': 'inline label - visible with data', 'maxspeed': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'bridge': 'inline label - visible with data', 'tunnel': 'inline label - visible with data', });
lyr_UTM_4.set('fieldLabels', {'ลำดับที่': 'inline label - visible with data', 'สถานพยาบาล': 'inline label - visible with data', 'ตำบล': 'inline label - visible with data', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'field_6': 'inline label - visible with data', });
lyr_UTM_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});