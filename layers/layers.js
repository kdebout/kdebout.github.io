var wms_layers = [];

var format_AcademiedeLille_0 = new ol.format.GeoJSON();
var features_AcademiedeLille_0 = format_AcademiedeLille_0.readFeatures(json_AcademiedeLille_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcademiedeLille_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcademiedeLille_0.addFeatures(features_AcademiedeLille_0);
var lyr_AcademiedeLille_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AcademiedeLille_0, 
                style: style_AcademiedeLille_0,
                interactive: false,
                title: '<img src="styles/legend/AcademiedeLille_0.png" /> Academie de Lille'
            });
var format_CollgePublic_1 = new ol.format.GeoJSON();
var features_CollgePublic_1 = format_CollgePublic_1.readFeatures(json_CollgePublic_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CollgePublic_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CollgePublic_1.addFeatures(features_CollgePublic_1);
var lyr_CollgePublic_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CollgePublic_1, 
                style: style_CollgePublic_1,
                interactive: true,
                title: '<img src="styles/legend/CollgePublic_1.png" /> Collège - Public'
            });
var format_CollgePriv_2 = new ol.format.GeoJSON();
var features_CollgePriv_2 = format_CollgePriv_2.readFeatures(json_CollgePriv_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CollgePriv_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CollgePriv_2.addFeatures(features_CollgePriv_2);
var lyr_CollgePriv_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CollgePriv_2, 
                style: style_CollgePriv_2,
                interactive: true,
                title: '<img src="styles/legend/CollgePriv_2.png" /> Collège - Privé'
            });
var format_LyceprofessionnelPubilc_3 = new ol.format.GeoJSON();
var features_LyceprofessionnelPubilc_3 = format_LyceprofessionnelPubilc_3.readFeatures(json_LyceprofessionnelPubilc_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LyceprofessionnelPubilc_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LyceprofessionnelPubilc_3.addFeatures(features_LyceprofessionnelPubilc_3);
var lyr_LyceprofessionnelPubilc_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LyceprofessionnelPubilc_3, 
                style: style_LyceprofessionnelPubilc_3,
                interactive: true,
                title: '<img src="styles/legend/LyceprofessionnelPubilc_3.png" /> Lycée professionnel - Pubilc'
            });
var format_LyceprofessionnelPriv_4 = new ol.format.GeoJSON();
var features_LyceprofessionnelPriv_4 = format_LyceprofessionnelPriv_4.readFeatures(json_LyceprofessionnelPriv_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LyceprofessionnelPriv_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LyceprofessionnelPriv_4.addFeatures(features_LyceprofessionnelPriv_4);
var lyr_LyceprofessionnelPriv_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LyceprofessionnelPriv_4, 
                style: style_LyceprofessionnelPriv_4,
                interactive: true,
                title: '<img src="styles/legend/LyceprofessionnelPriv_4.png" /> Lycée professionnel - Privé'
            });
var format_LycepolyvalentPublic_5 = new ol.format.GeoJSON();
var features_LycepolyvalentPublic_5 = format_LycepolyvalentPublic_5.readFeatures(json_LycepolyvalentPublic_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LycepolyvalentPublic_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LycepolyvalentPublic_5.addFeatures(features_LycepolyvalentPublic_5);
var lyr_LycepolyvalentPublic_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LycepolyvalentPublic_5, 
                style: style_LycepolyvalentPublic_5,
                interactive: true,
                title: '<img src="styles/legend/LycepolyvalentPublic_5.png" /> Lycée polyvalent - Public'
            });
var format_LycepolyvalentPriv_6 = new ol.format.GeoJSON();
var features_LycepolyvalentPriv_6 = format_LycepolyvalentPriv_6.readFeatures(json_LycepolyvalentPriv_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LycepolyvalentPriv_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LycepolyvalentPriv_6.addFeatures(features_LycepolyvalentPriv_6);
var lyr_LycepolyvalentPriv_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LycepolyvalentPriv_6, 
                style: style_LycepolyvalentPriv_6,
                interactive: true,
                title: '<img src="styles/legend/LycepolyvalentPriv_6.png" /> Lycée polyvalent - Privé'
            });
var format_LycegnralettechnologiquePublic_7 = new ol.format.GeoJSON();
var features_LycegnralettechnologiquePublic_7 = format_LycegnralettechnologiquePublic_7.readFeatures(json_LycegnralettechnologiquePublic_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LycegnralettechnologiquePublic_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LycegnralettechnologiquePublic_7.addFeatures(features_LycegnralettechnologiquePublic_7);
var lyr_LycegnralettechnologiquePublic_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LycegnralettechnologiquePublic_7, 
                style: style_LycegnralettechnologiquePublic_7,
                interactive: true,
                title: '<img src="styles/legend/LycegnralettechnologiquePublic_7.png" /> Lycée général et technologique - Public'
            });
var format_LycegnralettechnologiquePriv_8 = new ol.format.GeoJSON();
var features_LycegnralettechnologiquePriv_8 = format_LycegnralettechnologiquePriv_8.readFeatures(json_LycegnralettechnologiquePriv_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LycegnralettechnologiquePriv_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LycegnralettechnologiquePriv_8.addFeatures(features_LycegnralettechnologiquePriv_8);
var lyr_LycegnralettechnologiquePriv_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LycegnralettechnologiquePriv_8, 
                style: style_LycegnralettechnologiquePriv_8,
                interactive: true,
                title: '<img src="styles/legend/LycegnralettechnologiquePriv_8.png" /> Lycée général et technologique - Privé'
            });

lyr_AcademiedeLille_0.setVisible(true);lyr_CollgePublic_1.setVisible(true);lyr_CollgePriv_2.setVisible(true);lyr_LyceprofessionnelPubilc_3.setVisible(true);lyr_LyceprofessionnelPriv_4.setVisible(true);lyr_LycepolyvalentPublic_5.setVisible(true);lyr_LycepolyvalentPriv_6.setVisible(true);lyr_LycegnralettechnologiquePublic_7.setVisible(true);lyr_LycegnralettechnologiquePriv_8.setVisible(true);
var layersList = [lyr_AcademiedeLille_0,lyr_CollgePublic_1,lyr_CollgePriv_2,lyr_LyceprofessionnelPubilc_3,lyr_LyceprofessionnelPriv_4,lyr_LycepolyvalentPublic_5,lyr_LycepolyvalentPriv_6,lyr_LycegnralettechnologiquePublic_7,lyr_LycegnralettechnologiquePriv_8];
lyr_AcademiedeLille_0.set('fieldAliases', {'CODE_ACA': 'CODE_ACA', 'LIB_ACA': 'LIB_ACA', 'CODE_REG': 'CODE_REG', 'LIB_REG': 'LIB_REG', });
lyr_CollgePublic_1.set('fieldAliases', {'UAI': 'UAI', 'Appelation': 'Appelation', 'Nom de la commune': 'Nom de la commune', 'Secteur': 'Secteur', });
lyr_CollgePriv_2.set('fieldAliases', {'UAI': 'UAI', 'Appelation': 'Appelation', 'Nom de la commune': 'Nom de la commune', 'Secteur': 'Secteur', });
lyr_LyceprofessionnelPubilc_3.set('fieldAliases', {'UAI': 'UAI', 'Appelation': 'Appelation', 'Nom de la commune': 'Nom de la commune', 'Secteur': 'Secteur', });
lyr_LyceprofessionnelPriv_4.set('fieldAliases', {'UAI': 'UAI', 'Appelation': 'Appelation', 'Nom de la commune': 'Nom de la commune', 'Secteur': 'Secteur', });
lyr_LycepolyvalentPublic_5.set('fieldAliases', {'UAI': 'UAI', 'Appelation': 'Appelation', 'Nom de la commune': 'Nom de la commune', 'Secteur': 'Secteur', });
lyr_LycepolyvalentPriv_6.set('fieldAliases', {'UAI': 'UAI', 'Appelation': 'Appelation', 'Nom de la commune': 'Nom de la commune', 'Secteur': 'Secteur', });
lyr_LycegnralettechnologiquePublic_7.set('fieldAliases', {'UAI': 'UAI', 'Appelation': 'Appelation', 'Nom de la commune': 'Nom de la commune', 'Secteur': 'Secteur', });
lyr_LycegnralettechnologiquePriv_8.set('fieldAliases', {'UAI': 'UAI', 'Appelation': 'Appelation', 'Nom de la commune': 'Nom de la commune', 'Secteur': 'Secteur', });
lyr_AcademiedeLille_0.set('fieldImages', {'CODE_ACA': 'TextEdit', 'LIB_ACA': 'TextEdit', 'CODE_REG': 'TextEdit', 'LIB_REG': 'TextEdit', });
lyr_CollgePublic_1.set('fieldImages', {'UAI': 'TextEdit', 'Appelation': 'TextEdit', 'Nom de la commune': 'TextEdit', 'Secteur': 'TextEdit', });
lyr_CollgePriv_2.set('fieldImages', {'UAI': 'TextEdit', 'Appelation': 'TextEdit', 'Nom de la commune': 'TextEdit', 'Secteur': 'TextEdit', });
lyr_LyceprofessionnelPubilc_3.set('fieldImages', {'UAI': 'TextEdit', 'Appelation': 'TextEdit', 'Nom de la commune': 'TextEdit', 'Secteur': 'TextEdit', });
lyr_LyceprofessionnelPriv_4.set('fieldImages', {'UAI': 'TextEdit', 'Appelation': 'TextEdit', 'Nom de la commune': 'TextEdit', 'Secteur': 'TextEdit', });
lyr_LycepolyvalentPublic_5.set('fieldImages', {'UAI': 'TextEdit', 'Appelation': 'TextEdit', 'Nom de la commune': 'TextEdit', 'Secteur': 'TextEdit', });
lyr_LycepolyvalentPriv_6.set('fieldImages', {'UAI': 'TextEdit', 'Appelation': 'TextEdit', 'Nom de la commune': 'TextEdit', 'Secteur': 'TextEdit', });
lyr_LycegnralettechnologiquePublic_7.set('fieldImages', {'UAI': 'TextEdit', 'Appelation': 'TextEdit', 'Nom de la commune': 'TextEdit', 'Secteur': 'TextEdit', });
lyr_LycegnralettechnologiquePriv_8.set('fieldImages', {'UAI': 'TextEdit', 'Appelation': 'TextEdit', 'Nom de la commune': 'TextEdit', 'Secteur': 'TextEdit', });
lyr_AcademiedeLille_0.set('fieldLabels', {'CODE_ACA': 'no label', 'LIB_ACA': 'no label', 'CODE_REG': 'no label', 'LIB_REG': 'no label', });
lyr_CollgePublic_1.set('fieldLabels', {'UAI': 'inline label', 'Appelation': 'header label', 'Nom de la commune': 'header label', 'Secteur': 'inline label', });
lyr_CollgePriv_2.set('fieldLabels', {'UAI': 'inline label', 'Appelation': 'header label', 'Nom de la commune': 'header label', 'Secteur': 'inline label', });
lyr_LyceprofessionnelPubilc_3.set('fieldLabels', {'UAI': 'inline label', 'Appelation': 'header label', 'Nom de la commune': 'header label', 'Secteur': 'inline label', });
lyr_LyceprofessionnelPriv_4.set('fieldLabels', {'UAI': 'inline label', 'Appelation': 'header label', 'Nom de la commune': 'header label', 'Secteur': 'inline label', });
lyr_LycepolyvalentPublic_5.set('fieldLabels', {'UAI': 'inline label', 'Appelation': 'header label', 'Nom de la commune': 'header label', 'Secteur': 'inline label', });
lyr_LycepolyvalentPriv_6.set('fieldLabels', {'UAI': 'inline label', 'Appelation': 'header label', 'Nom de la commune': 'header label', 'Secteur': 'inline label', });
lyr_LycegnralettechnologiquePublic_7.set('fieldLabels', {'UAI': 'inline label', 'Appelation': 'header label', 'Nom de la commune': 'header label', 'Secteur': 'inline label', });
lyr_LycegnralettechnologiquePriv_8.set('fieldLabels', {'UAI': 'inline label', 'Appelation': 'header label', 'Nom de la commune': 'header label', 'Secteur': 'inline label', });
lyr_LycegnralettechnologiquePriv_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});