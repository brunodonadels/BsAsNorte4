var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Partidos_2 = new ol.format.GeoJSON();
var features_Partidos_2 = format_Partidos_2.readFeatures(json_Partidos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Partidos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Partidos_2.addFeatures(features_Partidos_2);
var lyr_Partidos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Partidos_2, 
                style: style_Partidos_2,
                interactive: true,
                title: '<img src="styles/legend/Partidos_2.png" /> Partidos'
            });
var format_PEAINDEC_3 = new ol.format.GeoJSON();
var features_PEAINDEC_3 = format_PEAINDEC_3.readFeatures(json_PEAINDEC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEAINDEC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEAINDEC_3.addFeatures(features_PEAINDEC_3);
var lyr_PEAINDEC_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEAINDEC_3, 
                style: style_PEAINDEC_3,
                interactive: true,
    title: 'PEA (INDEC)<br />\
    <img src="styles/legend/PEAINDEC_3_0.png" /> 2.250 - 12.250<br />\
    <img src="styles/legend/PEAINDEC_3_1.png" /> 12.251 - 20.000<br />\
    <img src="styles/legend/PEAINDEC_3_2.png" /> 20.001 - 40.000<br />\
    <img src="styles/legend/PEAINDEC_3_3.png" /> 40.001 - 70.000<br />'
        });
var format_PoblacinpordepartamentoINDEC_4 = new ol.format.GeoJSON();
var features_PoblacinpordepartamentoINDEC_4 = format_PoblacinpordepartamentoINDEC_4.readFeatures(json_PoblacinpordepartamentoINDEC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoblacinpordepartamentoINDEC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoblacinpordepartamentoINDEC_4.addFeatures(features_PoblacinpordepartamentoINDEC_4);
var lyr_PoblacinpordepartamentoINDEC_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PoblacinpordepartamentoINDEC_4, 
                style: style_PoblacinpordepartamentoINDEC_4,
                interactive: true,
    title: 'Población por departamento (INDEC)<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_4_0.png" /> 3.500 - 18.000<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_4_1.png" /> 18.001 - 34.200<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_4_2.png" /> 34.201 - 64.185<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_4_3.png" /> 64.186 - 104.600<br />'
        });
var format_ViviendasRuralesINDEC_5 = new ol.format.GeoJSON();
var features_ViviendasRuralesINDEC_5 = format_ViviendasRuralesINDEC_5.readFeatures(json_ViviendasRuralesINDEC_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViviendasRuralesINDEC_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViviendasRuralesINDEC_5.addFeatures(features_ViviendasRuralesINDEC_5);
var lyr_ViviendasRuralesINDEC_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ViviendasRuralesINDEC_5, 
                style: style_ViviendasRuralesINDEC_5,
                interactive: true,
    title: 'Viviendas Rurales (INDEC)<br />\
    <img src="styles/legend/ViviendasRuralesINDEC_5_0.png" /> 200 - 1.500<br />\
    <img src="styles/legend/ViviendasRuralesINDEC_5_1.png" /> 1.501 - 3.000<br />\
    <img src="styles/legend/ViviendasRuralesINDEC_5_2.png" /> 3.001 - 4.500<br />\
    <img src="styles/legend/ViviendasRuralesINDEC_5_3.png" /> 4.501 - 6.000<br />'
        });
var format_CabezasdeporcinosMAGyP_6 = new ol.format.GeoJSON();
var features_CabezasdeporcinosMAGyP_6 = format_CabezasdeporcinosMAGyP_6.readFeatures(json_CabezasdeporcinosMAGyP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeporcinosMAGyP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeporcinosMAGyP_6.addFeatures(features_CabezasdeporcinosMAGyP_6);
var lyr_CabezasdeporcinosMAGyP_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeporcinosMAGyP_6, 
                style: style_CabezasdeporcinosMAGyP_6,
                interactive: true,
    title: 'Cabezas de porcinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_0.png" /> 1.250 - 7.000<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_1.png" /> 7.001 - 15.000<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_2.png" /> 15.001 - 32.000<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_3.png" /> 32.001 - 72.500<br />'
        });
var format_CabezasdeovinosMAGyP_7 = new ol.format.GeoJSON();
var features_CabezasdeovinosMAGyP_7 = format_CabezasdeovinosMAGyP_7.readFeatures(json_CabezasdeovinosMAGyP_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeovinosMAGyP_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeovinosMAGyP_7.addFeatures(features_CabezasdeovinosMAGyP_7);
var lyr_CabezasdeovinosMAGyP_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeovinosMAGyP_7, 
                style: style_CabezasdeovinosMAGyP_7,
                interactive: true,
    title: 'Cabezas de ovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_0.png" /> 1.250 - 10.000<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_1.png" /> 10.001 - 25.000<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_2.png" /> 25.001 - 45.000<br />'
        });
var format_CabezasdecaprinosMAGyP_8 = new ol.format.GeoJSON();
var features_CabezasdecaprinosMAGyP_8 = format_CabezasdecaprinosMAGyP_8.readFeatures(json_CabezasdecaprinosMAGyP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdecaprinosMAGyP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdecaprinosMAGyP_8.addFeatures(features_CabezasdecaprinosMAGyP_8);
var lyr_CabezasdecaprinosMAGyP_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdecaprinosMAGyP_8, 
                style: style_CabezasdecaprinosMAGyP_8,
                interactive: true,
    title: 'Cabezas de caprinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_0.png" /> 15 - 500<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_1.png" /> 501 - 2.500<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_2.png" /> 2.501 - 5.000<br />'
        });
var format_CabezasdebovinosMAGyP_9 = new ol.format.GeoJSON();
var features_CabezasdebovinosMAGyP_9 = format_CabezasdebovinosMAGyP_9.readFeatures(json_CabezasdebovinosMAGyP_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdebovinosMAGyP_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdebovinosMAGyP_9.addFeatures(features_CabezasdebovinosMAGyP_9);
var lyr_CabezasdebovinosMAGyP_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdebovinosMAGyP_9, 
                style: style_CabezasdebovinosMAGyP_9,
                interactive: true,
    title: 'Cabezas de bovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_0.png" /> 15.000 - 75.000<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_1.png" /> 75.001 . 180.000<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_2.png" /> 180.001 - 315.000<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_3.png" /> 315.001 - 485.000<br />'
        });
var format_HectreasdehortalizasINDEC_10 = new ol.format.GeoJSON();
var features_HectreasdehortalizasINDEC_10 = format_HectreasdehortalizasINDEC_10.readFeatures(json_HectreasdehortalizasINDEC_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdehortalizasINDEC_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdehortalizasINDEC_10.addFeatures(features_HectreasdehortalizasINDEC_10);
var lyr_HectreasdehortalizasINDEC_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdehortalizasINDEC_10, 
                style: style_HectreasdehortalizasINDEC_10,
                interactive: true,
    title: 'Hectáreas de hortalizas (INDEC)<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_10_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_10_1.png" /> 1 - 180<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_10_2.png" /> 181 o más<br />'
        });
var format_HectreasdelegumbresINDEC_11 = new ol.format.GeoJSON();
var features_HectreasdelegumbresINDEC_11 = format_HectreasdelegumbresINDEC_11.readFeatures(json_HectreasdelegumbresINDEC_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdelegumbresINDEC_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdelegumbresINDEC_11.addFeatures(features_HectreasdelegumbresINDEC_11);
var lyr_HectreasdelegumbresINDEC_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdelegumbresINDEC_11, 
                style: style_HectreasdelegumbresINDEC_11,
                interactive: true,
    title: 'Hectáreas de legumbres (INDEC)<br />\
    <img src="styles/legend/HectreasdelegumbresINDEC_11_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdelegumbresINDEC_11_1.png" /> 1 - 55<br />\
    <img src="styles/legend/HectreasdelegumbresINDEC_11_2.png" /> 56 - 265<br />\
    <img src="styles/legend/HectreasdelegumbresINDEC_11_3.png" /> 266 - 665<br />\
    <img src="styles/legend/HectreasdelegumbresINDEC_11_4.png" /> Más de 666<br />'
        });
var format_HectreasdearndanosINDEC_12 = new ol.format.GeoJSON();
var features_HectreasdearndanosINDEC_12 = format_HectreasdearndanosINDEC_12.readFeatures(json_HectreasdearndanosINDEC_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdearndanosINDEC_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdearndanosINDEC_12.addFeatures(features_HectreasdearndanosINDEC_12);
var lyr_HectreasdearndanosINDEC_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdearndanosINDEC_12, 
                style: style_HectreasdearndanosINDEC_12,
                interactive: true,
    title: 'Hectáreas de arándanos (INDEC)<br />\
    <img src="styles/legend/HectreasdearndanosINDEC_12_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdearndanosINDEC_12_1.png" /> 1 - 3<br />\
    <img src="styles/legend/HectreasdearndanosINDEC_12_2.png" /> 4 - 11<br />\
    <img src="styles/legend/HectreasdearndanosINDEC_12_3.png" /> 12 - 40<br />'
        });
var format_HectreasdemazMAGyP_13 = new ol.format.GeoJSON();
var features_HectreasdemazMAGyP_13 = format_HectreasdemazMAGyP_13.readFeatures(json_HectreasdemazMAGyP_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdemazMAGyP_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdemazMAGyP_13.addFeatures(features_HectreasdemazMAGyP_13);
var lyr_HectreasdemazMAGyP_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdemazMAGyP_13, 
                style: style_HectreasdemazMAGyP_13,
                interactive: true,
    title: 'Hectáreas de maíz (MAGyP)<br />\
    <img src="styles/legend/HectreasdemazMAGyP_13_0.png" /> 2.500 - 15.000<br />\
    <img src="styles/legend/HectreasdemazMAGyP_13_1.png" /> 15.001 - 40.000<br />\
    <img src="styles/legend/HectreasdemazMAGyP_13_2.png" /> 40.001 - 70.000<br />\
    <img src="styles/legend/HectreasdemazMAGyP_13_3.png" /> 70.001 - 115.000<br />'
        });
var format_HectreasdetrigoMAGyP_14 = new ol.format.GeoJSON();
var features_HectreasdetrigoMAGyP_14 = format_HectreasdetrigoMAGyP_14.readFeatures(json_HectreasdetrigoMAGyP_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdetrigoMAGyP_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdetrigoMAGyP_14.addFeatures(features_HectreasdetrigoMAGyP_14);
var lyr_HectreasdetrigoMAGyP_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdetrigoMAGyP_14, 
                style: style_HectreasdetrigoMAGyP_14,
                interactive: true,
    title: 'Hectáreas de trigo (MAGyP)<br />\
    <img src="styles/legend/HectreasdetrigoMAGyP_14_0.png" /> 1.000 - 7.000<br />\
    <img src="styles/legend/HectreasdetrigoMAGyP_14_1.png" /> 7.001 - 20.000<br />\
    <img src="styles/legend/HectreasdetrigoMAGyP_14_2.png" /> 20.001 - 40.000<br />\
    <img src="styles/legend/HectreasdetrigoMAGyP_14_3.png" /> 40.001 - 70.000<br />'
        });
var format_HectreasdegirasolMAGyP_15 = new ol.format.GeoJSON();
var features_HectreasdegirasolMAGyP_15 = format_HectreasdegirasolMAGyP_15.readFeatures(json_HectreasdegirasolMAGyP_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdegirasolMAGyP_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdegirasolMAGyP_15.addFeatures(features_HectreasdegirasolMAGyP_15);
var lyr_HectreasdegirasolMAGyP_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdegirasolMAGyP_15, 
                style: style_HectreasdegirasolMAGyP_15,
                interactive: true,
    title: 'Hectáreas de girasol (MAGyP)<br />\
    <img src="styles/legend/HectreasdegirasolMAGyP_15_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdegirasolMAGyP_15_1.png" /> 200 - 3.500<br />\
    <img src="styles/legend/HectreasdegirasolMAGyP_15_2.png" /> 3.501 - 10.000<br />\
    <img src="styles/legend/HectreasdegirasolMAGyP_15_3.png" /> 10.001 - 20.000<br />\
    <img src="styles/legend/HectreasdegirasolMAGyP_15_4.png" /> 20.001 - 35.000<br />\
    <img src="styles/legend/HectreasdegirasolMAGyP_15_5.png" /> 35.001 o más<br />'
        });
var format_HectreasdesojaMAGyP_16 = new ol.format.GeoJSON();
var features_HectreasdesojaMAGyP_16 = format_HectreasdesojaMAGyP_16.readFeatures(json_HectreasdesojaMAGyP_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdesojaMAGyP_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdesojaMAGyP_16.addFeatures(features_HectreasdesojaMAGyP_16);
var lyr_HectreasdesojaMAGyP_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdesojaMAGyP_16, 
                style: style_HectreasdesojaMAGyP_16,
                interactive: true,
    title: 'Hectáreas de soja (MAGyP)<br />\
    <img src="styles/legend/HectreasdesojaMAGyP_16_0.png" /> 1.200 - 25.000<br />\
    <img src="styles/legend/HectreasdesojaMAGyP_16_1.png" /> 25.001 - 65.000<br />\
    <img src="styles/legend/HectreasdesojaMAGyP_16_2.png" /> 65.001 - 110.000<br />\
    <img src="styles/legend/HectreasdesojaMAGyP_16_3.png" /> 110.001 - 175.000<br />\
    <img src="styles/legend/HectreasdesojaMAGyP_16_4.png" /> 175.001 o más<br />'
        });
var format_Capacitaciones2019tcnicas_17 = new ol.format.GeoJSON();
var features_Capacitaciones2019tcnicas_17 = format_Capacitaciones2019tcnicas_17.readFeatures(json_Capacitaciones2019tcnicas_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2019tcnicas_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2019tcnicas_17.addFeatures(features_Capacitaciones2019tcnicas_17);
var lyr_Capacitaciones2019tcnicas_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2019tcnicas_17, 
                style: style_Capacitaciones2019tcnicas_17,
                interactive: true,
                title: '<img src="styles/legend/Capacitaciones2019tcnicas_17.png" /> Capacitaciones 2019 (técnicas)'
            });
var format_Localidades_18 = new ol.format.GeoJSON();
var features_Localidades_18 = format_Localidades_18.readFeatures(json_Localidades_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localidades_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localidades_18.addFeatures(features_Localidades_18);
var lyr_Localidades_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Localidades_18, 
                style: style_Localidades_18,
                interactive: true,
                title: '<img src="styles/legend/Localidades_18.png" /> Localidades'
            });
var format_BER_19 = new ol.format.GeoJSON();
var features_BER_19 = format_BER_19.readFeatures(json_BER_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BER_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BER_19.addFeatures(features_BER_19);
var lyr_BER_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BER_19, 
                style: style_BER_19,
                interactive: true,
                title: '<img src="styles/legend/BER_19.png" /> BER'
            });
var format_BER_20 = new ol.format.GeoJSON();
var features_BER_20 = format_BER_20.readFeatures(json_BER_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BER_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BER_20.addFeatures(features_BER_20);
var lyr_BER_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BER_20, 
                style: style_BER_20,
                interactive: true,
                title: '<img src="styles/legend/BER_20.png" /> BER'
            });
var format_CAIR_21 = new ol.format.GeoJSON();
var features_CAIR_21 = format_CAIR_21.readFeatures(json_CAIR_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CAIR_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAIR_21.addFeatures(features_CAIR_21);
var lyr_CAIR_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CAIR_21, 
                style: style_CAIR_21,
                interactive: true,
                title: '<img src="styles/legend/CAIR_21.png" /> CAIR'
            });
var format_DelegacinJunn_22 = new ol.format.GeoJSON();
var features_DelegacinJunn_22 = format_DelegacinJunn_22.readFeatures(json_DelegacinJunn_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DelegacinJunn_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DelegacinJunn_22.addFeatures(features_DelegacinJunn_22);
var lyr_DelegacinJunn_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DelegacinJunn_22, 
                style: style_DelegacinJunn_22,
                interactive: true,
                title: '<img src="styles/legend/DelegacinJunn_22.png" /> Delegación Junín'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_Partidos_2.setVisible(true);lyr_PEAINDEC_3.setVisible(true);lyr_PoblacinpordepartamentoINDEC_4.setVisible(true);lyr_ViviendasRuralesINDEC_5.setVisible(true);lyr_CabezasdeporcinosMAGyP_6.setVisible(true);lyr_CabezasdeovinosMAGyP_7.setVisible(true);lyr_CabezasdecaprinosMAGyP_8.setVisible(true);lyr_CabezasdebovinosMAGyP_9.setVisible(true);lyr_HectreasdehortalizasINDEC_10.setVisible(true);lyr_HectreasdelegumbresINDEC_11.setVisible(true);lyr_HectreasdearndanosINDEC_12.setVisible(true);lyr_HectreasdemazMAGyP_13.setVisible(true);lyr_HectreasdetrigoMAGyP_14.setVisible(true);lyr_HectreasdegirasolMAGyP_15.setVisible(true);lyr_HectreasdesojaMAGyP_16.setVisible(true);lyr_Capacitaciones2019tcnicas_17.setVisible(true);lyr_Localidades_18.setVisible(true);lyr_BER_19.setVisible(true);lyr_BER_20.setVisible(true);lyr_CAIR_21.setVisible(true);lyr_DelegacinJunn_22.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleHybrid_1,lyr_Partidos_2,lyr_PEAINDEC_3,lyr_PoblacinpordepartamentoINDEC_4,lyr_ViviendasRuralesINDEC_5,lyr_CabezasdeporcinosMAGyP_6,lyr_CabezasdeovinosMAGyP_7,lyr_CabezasdecaprinosMAGyP_8,lyr_CabezasdebovinosMAGyP_9,lyr_HectreasdehortalizasINDEC_10,lyr_HectreasdelegumbresINDEC_11,lyr_HectreasdearndanosINDEC_12,lyr_HectreasdemazMAGyP_13,lyr_HectreasdetrigoMAGyP_14,lyr_HectreasdegirasolMAGyP_15,lyr_HectreasdesojaMAGyP_16,lyr_Capacitaciones2019tcnicas_17,lyr_Localidades_18,lyr_BER_19,lyr_BER_20,lyr_CAIR_21,lyr_DelegacinJunn_22];
lyr_Partidos_2.set('fieldAliases', {'Depto': 'Depto', });
lyr_PEAINDEC_3.set('fieldAliases', {'PEA': 'PEA', });
lyr_PoblacinpordepartamentoINDEC_4.set('fieldAliases', {'poblacion': 'poblacion', });
lyr_ViviendasRuralesINDEC_5.set('fieldAliases', {'Viv-Rur': 'Viv-Rur', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldAliases', {'Porcinos': 'Porcinos', });
lyr_CabezasdeovinosMAGyP_7.set('fieldAliases', {'Ovinos': 'Ovinos', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldAliases', {'Caprinos': 'Caprinos', });
lyr_CabezasdebovinosMAGyP_9.set('fieldAliases', {'Bovinos': 'Bovinos', });
lyr_HectreasdehortalizasINDEC_10.set('fieldAliases', {'Hortalizas': 'Hortalizas', });
lyr_HectreasdelegumbresINDEC_11.set('fieldAliases', {'Legumbres': 'Legumbres', });
lyr_HectreasdearndanosINDEC_12.set('fieldAliases', {'Arandano': 'Arandano', });
lyr_HectreasdemazMAGyP_13.set('fieldAliases', {'Maiz': 'Maiz', });
lyr_HectreasdetrigoMAGyP_14.set('fieldAliases', {'Trigo': 'Trigo', });
lyr_HectreasdegirasolMAGyP_15.set('fieldAliases', {'Girasol': 'Girasol', });
lyr_HectreasdesojaMAGyP_16.set('fieldAliases', {'Soja': 'Soja', });
lyr_Capacitaciones2019tcnicas_17.set('fieldAliases', {'localidad': 'localidad', 'tipo capa.': 'tipo capa.', 'tematica': 'tematica', 'fechas': 'fechas', 'asistentes': 'asistentes', });
lyr_Localidades_18.set('fieldAliases', {'localidad': 'localidad', 'personas': 'personas', });
lyr_BER_19.set('fieldAliases', {'Num': 'Num', 'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Admin': 'Admin', });
lyr_BER_20.set('fieldAliases', {'Num': 'Num', 'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Admin': 'Admin', });
lyr_CAIR_21.set('fieldAliases', {'Num.': 'Num.', 'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Admin': 'Admin', });
lyr_DelegacinJunn_22.set('fieldAliases', {'localidad': 'localidad', 'direccion': 'direccion', 'prest 2016': 'prest 2016', 'prest 2017': 'prest 2017', 'prest 2018': 'prest 2018', 'prest 2019': 'prest 2019', 'prest 2020': 'prest 2020', });
lyr_Partidos_2.set('fieldImages', {'Depto': '', });
lyr_PEAINDEC_3.set('fieldImages', {'PEA': 'TextEdit', });
lyr_PoblacinpordepartamentoINDEC_4.set('fieldImages', {'poblacion': 'TextEdit', });
lyr_ViviendasRuralesINDEC_5.set('fieldImages', {'Viv-Rur': 'TextEdit', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldImages', {'Porcinos': 'TextEdit', });
lyr_CabezasdeovinosMAGyP_7.set('fieldImages', {'Ovinos': 'TextEdit', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldImages', {'Caprinos': 'TextEdit', });
lyr_CabezasdebovinosMAGyP_9.set('fieldImages', {'Bovinos': 'TextEdit', });
lyr_HectreasdehortalizasINDEC_10.set('fieldImages', {'Hortalizas': 'TextEdit', });
lyr_HectreasdelegumbresINDEC_11.set('fieldImages', {'Legumbres': 'TextEdit', });
lyr_HectreasdearndanosINDEC_12.set('fieldImages', {'Arandano': 'TextEdit', });
lyr_HectreasdemazMAGyP_13.set('fieldImages', {'Maiz': 'TextEdit', });
lyr_HectreasdetrigoMAGyP_14.set('fieldImages', {'Trigo': 'TextEdit', });
lyr_HectreasdegirasolMAGyP_15.set('fieldImages', {'Girasol': 'TextEdit', });
lyr_HectreasdesojaMAGyP_16.set('fieldImages', {'Soja': 'TextEdit', });
lyr_Capacitaciones2019tcnicas_17.set('fieldImages', {'localidad': 'TextEdit', 'tipo capa.': 'TextEdit', 'tematica': 'TextEdit', 'fechas': 'TextEdit', 'asistentes': 'Range', });
lyr_Localidades_18.set('fieldImages', {'localidad': 'TextEdit', 'personas': 'TextEdit', });
lyr_BER_19.set('fieldImages', {'Num': 'TextEdit', 'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Admin': 'TextEdit', });
lyr_BER_20.set('fieldImages', {'Num': 'TextEdit', 'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Admin': 'TextEdit', });
lyr_CAIR_21.set('fieldImages', {'Num.': 'TextEdit', 'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Admin': 'TextEdit', });
lyr_DelegacinJunn_22.set('fieldImages', {'localidad': 'TextEdit', 'direccion': '', 'prest 2016': '', 'prest 2017': '', 'prest 2018': '', 'prest 2019': '', 'prest 2020': '', });
lyr_Partidos_2.set('fieldLabels', {'Depto': 'inline label', });
lyr_PEAINDEC_3.set('fieldLabels', {'PEA': 'header label', });
lyr_PoblacinpordepartamentoINDEC_4.set('fieldLabels', {'poblacion': 'inline label', });
lyr_ViviendasRuralesINDEC_5.set('fieldLabels', {'Viv-Rur': 'inline label', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldLabels', {'Porcinos': 'inline label', });
lyr_CabezasdeovinosMAGyP_7.set('fieldLabels', {'Ovinos': 'inline label', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldLabels', {'Caprinos': 'inline label', });
lyr_CabezasdebovinosMAGyP_9.set('fieldLabels', {'Bovinos': 'header label', });
lyr_HectreasdehortalizasINDEC_10.set('fieldLabels', {'Hortalizas': 'header label', });
lyr_HectreasdelegumbresINDEC_11.set('fieldLabels', {'Legumbres': 'inline label', });
lyr_HectreasdearndanosINDEC_12.set('fieldLabels', {'Arandano': 'inline label', });
lyr_HectreasdemazMAGyP_13.set('fieldLabels', {'Maiz': 'inline label', });
lyr_HectreasdetrigoMAGyP_14.set('fieldLabels', {'Trigo': 'inline label', });
lyr_HectreasdegirasolMAGyP_15.set('fieldLabels', {'Girasol': 'inline label', });
lyr_HectreasdesojaMAGyP_16.set('fieldLabels', {'Soja': 'inline label', });
lyr_Capacitaciones2019tcnicas_17.set('fieldLabels', {'localidad': 'inline label', 'tipo capa.': 'inline label', 'tematica': 'inline label', 'fechas': 'inline label', 'asistentes': 'inline label', });
lyr_Localidades_18.set('fieldLabels', {'localidad': 'inline label', 'personas': 'inline label', });
lyr_BER_19.set('fieldLabels', {'Num': 'inline label', 'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Admin': 'inline label', });
lyr_BER_20.set('fieldLabels', {'Num': 'inline label', 'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Admin': 'inline label', });
lyr_CAIR_21.set('fieldLabels', {'Num.': 'inline label', 'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Admin': 'inline label', });
lyr_DelegacinJunn_22.set('fieldLabels', {'localidad': 'inline label', 'direccion': 'inline label', 'prest 2016': 'inline label', 'prest 2017': 'inline label', 'prest 2018': 'inline label', 'prest 2019': 'inline label', 'prest 2020': 'inline label', });
lyr_DelegacinJunn_22.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});