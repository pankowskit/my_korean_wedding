import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import MagazineS1 from "../components/magazine-s1";
import MagazineS2 from "../components/magazine-s2";
import MagazineS3 from "../components/magazine-s3";

class Magazine extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <MagazineS1/>
                <MagazineS2/>
                <MagazineS3/>
            </Container>    
        );
    }
}

export default Magazine;