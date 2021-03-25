import React, { useContext} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { AppStack, AuthStack } from "./Rutas";
import { AuthContext } from "./AuthProvider";


const Navigation = () => {
    const { usuario, setUsuario } = useContext(AuthContext);
    return ( 
        <NavigationContainer>
          { (!usuario) ? <AppStack /> : <AuthStack /> }
        </NavigationContainer>
     );
}
 
export default Navigation;