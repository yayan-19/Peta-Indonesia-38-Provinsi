ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([93.480962, -11.434685, 142.510991, 6.502253]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_INDONESIA_1 = new ol.format.GeoJSON();
var features_INDONESIA_1 = format_INDONESIA_1.readFeatures(json_INDONESIA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_INDONESIA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INDONESIA_1.addFeatures(features_INDONESIA_1);
var lyr_INDONESIA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INDONESIA_1, 
                style: style_INDONESIA_1,
                popuplayertitle: 'INDONESIA',
                interactive: true,
    title: 'INDONESIA<br />\
    <img src="styles/legend/INDONESIA_1_0.png" /> Aceh<br />\
    <img src="styles/legend/INDONESIA_1_1.png" /> Bali<br />\
    <img src="styles/legend/INDONESIA_1_2.png" /> Banten<br />\
    <img src="styles/legend/INDONESIA_1_3.png" /> Bengkulu<br />\
    <img src="styles/legend/INDONESIA_1_4.png" /> Daerah Istimewa Yogyakarta<br />\
    <img src="styles/legend/INDONESIA_1_5.png" /> DKI Jakarta<br />\
    <img src="styles/legend/INDONESIA_1_6.png" /> Gorontalo<br />\
    <img src="styles/legend/INDONESIA_1_7.png" /> Jambi<br />\
    <img src="styles/legend/INDONESIA_1_8.png" /> Jawa Barat<br />\
    <img src="styles/legend/INDONESIA_1_9.png" /> Jawa Tengah<br />\
    <img src="styles/legend/INDONESIA_1_10.png" /> Jawa Timur<br />\
    <img src="styles/legend/INDONESIA_1_11.png" /> Kalimantan Barat<br />\
    <img src="styles/legend/INDONESIA_1_12.png" /> Kalimantan Selatan<br />\
    <img src="styles/legend/INDONESIA_1_13.png" /> Kalimantan Tengah<br />\
    <img src="styles/legend/INDONESIA_1_14.png" /> Kalimantan Timur<br />\
    <img src="styles/legend/INDONESIA_1_15.png" /> Kalimantan Utara<br />\
    <img src="styles/legend/INDONESIA_1_16.png" /> Kepulauan Bangka Belitung<br />\
    <img src="styles/legend/INDONESIA_1_17.png" /> Kepulauan Riau<br />\
    <img src="styles/legend/INDONESIA_1_18.png" /> Lampung<br />\
    <img src="styles/legend/INDONESIA_1_19.png" /> Maluku<br />\
    <img src="styles/legend/INDONESIA_1_20.png" /> Maluku Utara<br />\
    <img src="styles/legend/INDONESIA_1_21.png" /> Nusa Tenggara Barat<br />\
    <img src="styles/legend/INDONESIA_1_22.png" /> Nusa Tenggara Timur<br />\
    <img src="styles/legend/INDONESIA_1_23.png" /> Papua<br />\
    <img src="styles/legend/INDONESIA_1_24.png" /> Papua Barat<br />\
    <img src="styles/legend/INDONESIA_1_25.png" /> Papua Barat Daya<br />\
    <img src="styles/legend/INDONESIA_1_26.png" /> Papua Pegunungan<br />\
    <img src="styles/legend/INDONESIA_1_27.png" /> Papua Selatan<br />\
    <img src="styles/legend/INDONESIA_1_28.png" /> Papua Tengah<br />\
    <img src="styles/legend/INDONESIA_1_29.png" /> Riau<br />\
    <img src="styles/legend/INDONESIA_1_30.png" /> Sulawesi Barat<br />\
    <img src="styles/legend/INDONESIA_1_31.png" /> Sulawesi Selatan<br />\
    <img src="styles/legend/INDONESIA_1_32.png" /> Sulawesi Tengah<br />\
    <img src="styles/legend/INDONESIA_1_33.png" /> Sulawesi Tenggara<br />\
    <img src="styles/legend/INDONESIA_1_34.png" /> Sulawesi Utara<br />\
    <img src="styles/legend/INDONESIA_1_35.png" /> Sumatera Barat<br />\
    <img src="styles/legend/INDONESIA_1_36.png" /> Sumatera Selatan<br />\
    <img src="styles/legend/INDONESIA_1_37.png" /> Sumatera Utara<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_INDONESIA_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_INDONESIA_1];
lyr_INDONESIA_1.set('fieldAliases', {'fid': 'fid', 'Provinsi': 'Provinsi', });
lyr_INDONESIA_1.set('fieldImages', {'fid': 'TextEdit', 'Provinsi': 'TextEdit', });
lyr_INDONESIA_1.set('fieldLabels', {'fid': 'hidden field', 'Provinsi': 'inline label - visible with data', });
lyr_INDONESIA_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});