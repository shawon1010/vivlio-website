import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import Paragraph from "./Paragraph";
import Sidebar from "./Sidebar";


//jquery starts from here

//jquery ends here


const popover1 = (
    <Popover id="1">
        <Popover.Header as="h3">Neuron</Popover.Header>
        <Popover.Body>
            Neurons, also known as nerve cells, send and receive signals from
            your brain.
        </Popover.Body>
    </Popover>
);

const Example1 = () => (
    <OverlayTrigger trigger="click" placement="right" overlay={popover1}>
        <Button style={{ margin: "5px", width: "200px" }} variant="danger">
            Neuron
        </Button>
    </OverlayTrigger>
);

const popover2 = (
    <Popover id="2">
        <Popover.Header as="h3">Synapse</Popover.Header>
        <Popover.Body>
            A structure that permits a neuron (or nerve cell) to pass an
            electrical or chemical signal to another neuron or to the target
            effector cell.
        </Popover.Body>
    </Popover>
);

const Example2 = () => (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover1}>
        <Button style={{ margin: "5px", width: "200px" }} variant="success">
            Synapse
        </Button>
    </OverlayTrigger>
);

const popover3 = (
    <Popover id="3">
        <Popover.Header as="h3">Popover right</Popover.Header>
        <Popover.Body>
            And here's some <strong>amazing</strong> content. It's very
            engaging. right?
        </Popover.Body>
    </Popover>
);

const Example3 = () => (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover1}>
        <Button style={{ margin: "5px", width: "200px" }} variant="warning">
            Axon
        </Button>
    </OverlayTrigger>
);

function Neuroscience() {
    return (
        <>
          <div className="wrapper">
<Header />
</div>
            <Row>
                <Col sm={3}>
                    <Sidebar />
                </Col>

                <Col sm={8}>
                    <h3> Introduction to Neuroscience</h3>
                    <h5>
                        The field of knowledge described in this book is
                        neuroscience, the multidisciplinary sciences that
                        analyze the nervous system to understand the biological
                        basis for behavior. Modern studies of the nervous system
                        have been ongoing since the middle of the nineteenth
                        century. Neuroanatomists studied the brain’s shape, its
                        cellular structure, and its circuitry; neurochemists
                        studied the brain’s chemical composition, its lipids and
                        proteins; neurophysiologists studied the brain’s
                        bioelectric properties; and psychologists and
                        neuropsychologists investigated the organization and
                        neural substrates of behavior and cognition.
                    </h5>

                    <Stack gap={1}>
                        <Example1 />
                        <Example2 />
                        <Example3 />
                        <iframe
                            width="925"
                            height="420"
                            src="https://sketchfab.com/models/f201c8699b7f4f1dad569783d86ec41f/embed?autostart=1&amp;camera=0&amp;preload=1"
                            frameborder="0"
                            allow="autoplay; fullscreen; vr"
                            mozallowfullscreen="true"
                            webkitallowfullscreen="true"
                        ></iframe>

                        <Paragraph
                            h3="Brain Anatomy"
                            h5="The field of knowledge described in this book is
                          neuroscience, the multidisciplinary sciences that
                          analyze the nervous system to understand the
                          biological basis for behavior. Modern studies of the
                          nervous system have been ongoing since the middle of
                          the nineteenth century. Neuroanatomists studied the
                          brain’s shape, its cellular structure, and its
                          circuitry; neurochemists studied the brain’s chemical
                          composition, its lipids and proteins;
                          neurophysiologists studied the brain’s bioelectric
                          properties; and psychologists and neuropsychologists
                          investigated the organization and neural substrates of
                          behavior and cognition."
                        />

                        <h3> Brain Anatomy</h3>
                        <h5>
                            The field of knowledge described in this book is
                            neuroscience, the multidisciplinary sciences that
                            analyze the nervous system to understand the
                            biological basis for behavior. Modern studies of the
                            nervous system have been ongoing since the middle of
                            the nineteenth century. Neuroanatomists studied the
                            brain’s shape, its cellular structure, and its
                            circuitry; neurochemists studied the brain’s
                            chemical composition, its lipids and proteins;
                            neurophysiologists studied the brain’s bioelectric
                            properties; and psychologists and neuropsychologists
                            investigated the organization and neural substrates
                            of behavior and cognition.
                        </h5>
                    </Stack>
                </Col>
            </Row>
        </>
    );
}

export default Neuroscience;
