import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import WeddingsS1 from "../components/weddings-s1";
import WeddingsS2 from "../components/weddings-s2";
import WeddingsS3 from "../components/weddings-s3";
import WeddingsS4 from "../components/weddings-s4";

class Weddings extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <WeddingsS1/>
                <WeddingsS2/>
                <WeddingsS3/>
                <WeddingsS4/>
            </Container>    
        );
    }
}

export default Weddings;