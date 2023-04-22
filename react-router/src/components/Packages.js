import { ListGroup, Container, Card} from "react-bootstrap"

export default function Packages({ packages }) {
    const displayPackages = packages.map((eachPackage, i) => <ListGroup.Item key={i}>{eachPackage}</ListGroup.Item>)

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>
                        Our Packages 
                    </Card.Title>
                    <Card.Text>
                        Check out these awesome expensive treatments
                    </Card.Text>
                </Card.Body>
            </Card>
            <ListGroup>
                {displayPackages}
                <ListGroup.Iten active>
                    Cool Potato Chip Eye Mask
                </ListGroup.Iten>
            </ListGroup>
        </Container>
    )
}