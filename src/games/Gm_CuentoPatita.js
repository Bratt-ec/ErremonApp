import React, { useContext, useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity, Text, ScrollView, Image } from 'react-native';
import HeaderGame from '../components/HeaderGame';
import { css_Crucigrama, css_DeLectura, css_JuegoImagenes, css_TestEvaluativo } from '../styles/GameStyle';

const Gm_CuentoPatita = () => {    
        const [press1,setPress1]=useState(false);
        const [select1,setSelect1]=useState("");
        const [press2,setPress2]=useState(false);
        const [select2,setSelect2]=useState("");
        const [press3,setPress3]=useState(false);
        const [select3,setSelect3]=useState("");

        const seleccion1 = (respuesta)=>{
            setSelect1(respuesta);
            setPress1(true);
        }
        const seleccion2 = (respuesta)=>{
            setSelect2(respuesta);
            setPress2(true);
        }
        const seleccion3 = (respuesta)=>{
            setSelect3(respuesta);
            setPress3(true);
        }
        const verificarRespuestas = ()=>{
            if(select1.length == 0 || select2.length == 0 || select3.length == 0){
                return alert('Te falta seleccionar una respuesta');
            }

            if(select1 == 'Josefina' && select2 == 'Azules' && select3 == 'Cacarea'){
                Respuesta(true);
            }else{
                Respuesta(false);
            }
        }
        return(
            <View style={css_Crucigrama.Container}> 
                <HeaderGame name='LA PATITA BLANCA'/>
                <ScrollView>
                    <View style={css_DeLectura.divContenido}>
                        <View style={css_DeLectura.divPregunta2}>
                            <Text style={css_DeLectura.txtPreguntaCn}>- LEE EL SIGUIENTE CUENTO -</Text>                            
                        </View>
                        <View style={css_DeLectura.divPregunta2}>
                        <Image source={require('../img/cuentos/pata.png')} 
                        style={{
                            width: 180,
                            height: 180,
                            resizeMode: 'contain',
                            margin: 10,
                        }}/>
                        </View>
                        <View style={css_DeLectura.divPregunta2}>                            
                            <Text style={css_DeLectura.txtPreguntaCn}>
                            Había una vez, una patita blanca que encontró un grano de trigo.
                            </Text>
                            <Text style={css_DeLectura.txtPreguntaCn}>
                            -Quién sembrará este trigo?, preguntó.
                            </Text>
                            <Text style={css_DeLectura.txtPreguntaCn}>
                            -Todos los animalitos dijeron que no
                            </Text>
                            <Text style={css_DeLectura.txtPreguntaCn}>
                            - Pues entonces, dijo la patita blanca, lo haré yo. Clo-clo!                    
                            </Text>                            
                        </View>    
                        <View style={css_DeLectura.divPregunta2}>                            
                            <Text style={css_DeLectura.txtPreguntaCn}>                            
                                Y ella sembró el granito de trigo. Muy pronto el trigo empezó a crecer
                                asomando por encima de la tierra. Sobre él brilló el sol y cayó la lluvia, 
                                y el trigo siguió creciendo y creciendo hasta que estuvo muy alto y maduro.
                            </Text>                    
                        </View>
                        <View style={css_DeLectura.divPregunta2}>                            
                            <Text style={css_DeLectura.txtPreguntaCn}>
                            - ¿Quién llevará este trigo al molino para que lo conviertan en harina?, preguntó la patita.
                            </Text>
                            <Text style={css_DeLectura.txtPreguntaCn}>
                            -Todos los animalitos una vez más dijeron que no
                            </Text>
                            <Text style={css_DeLectura.txtPreguntaCn}>
                            - Pues entonces, dijo la patita blanca, lo haré yo. Clo-clo!
                            </Text>
                            <Text style={css_DeLectura.txtPreguntaCn}>
                            Y ella llevó el trigo al molino y muy pronto volvió con una bolsa de harina.
                            </Text>                            
                        </View>    
                        <View style={css_DeLectura.divPregunta2}>                            
                            <Text style={css_DeLectura.txtPreguntaCn}>
                            - ¿Quién amasará esta harina?, preguntó la patita. 
                            </Text>
                            <Text style={css_DeLectura.txtPreguntaCn}>
                            -Todos los animalitos una vez más dijeron que no
                            </Text>
                            <Text style={css_DeLectura.txtPreguntaCn}>
                            - Pues entonces, dijo la patita blanca, lo haré yo. Clo-clo!
                            </Text>
                            <Text style={css_DeLectura.txtPreguntaCn}>
                            Y ella amasó la harina y horneó un rico pan.
                            </Text>                            
                        </View>
                        <View style={css_DeLectura.divPregunta2}>                            
                            <Text style={css_DeLectura.txtPreguntaCn}>
                            - ¿Quién comerá este pan?, preguntó la patita. 
                            </Text>
                            <Text style={css_DeLectura.txtPreguntaCn}>
                            - todos los animalitos dijeron YO
                            </Text>
                            <Text style={css_DeLectura.txtPreguntaCn}>
                            - Pues no, dijo la patita blanca. Lo comeré YO. Clo- clo!.
                            </Text>
                            <Text style={css_DeLectura.txtPreguntaCn}>
                            Y se comió el pan con sus patitos.
                            </Text>                            
                        </View>    
                    </View>
                </ScrollView>
            </View>
        );

}

export default Gm_CuentoPatita
