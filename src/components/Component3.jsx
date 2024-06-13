import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Heading,
  Button,
} from "@chakra-ui/react";

function Component3() {
  return (
    <div id="comp3">
      <SimpleGrid spacing={4} templateColumns="2.5fr 1.5fr">
        <Card bgColor="#CFECD7">
          <CardHeader>
            <Heading size="md">Services offered:</Heading>
          </CardHeader>
          <CardBody>
            <ul>
              <li
                style={{
                  counterIncrement: "roman-counter",
                  marginLeft: "1rem",
                }}
              >
                Automation support
              </li>
              <li
                style={{
                  counterIncrement: "roman-counter",
                  marginLeft: "1rem",
                }}
              >
                Cyber security and related issues
              </li>
              <li
                style={{
                  counterIncrement: "roman-counter",
                  marginLeft: "1rem",
                }}
              >
                IT governance
              </li>
              <li
                style={{
                  counterIncrement: "roman-counter",
                  marginLeft: "1rem",
                }}
              >
                AI and ML Hyper automation: design and development
              </li>
              <li
                style={{
                  counterIncrement: "roman-counter",
                  marginLeft: "1rem",
                }}
              >
                Business process optimization
              </li>
              <li
                style={{
                  counterIncrement: "roman-counter",
                  marginLeft: "1rem",
                }}
              >
                Compliance
              </li>
              <li
                style={{
                  counterIncrement: "roman-counter",
                  marginLeft: "1rem",
                }}
              >
                Governance
              </li>
              <li
                style={{
                  counterIncrement: "roman-counter",
                  marginLeft: "1rem",
                }}
              >
                Project management
              </li>
            </ul>
          </CardBody>
        </Card>
        <SimpleGrid spacing={4} templateColumns="1fr">
          <Card bgColor="#CFECD7">
            <CardHeader>
              <Heading size="md">Automation support</Heading>
            </CardHeader>
            <CardBody>
              <ul
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  flexDirection: "column",
                }}
              >
                <li style={{ marginLeft: "1rem" }}>
                  Robotic Process Automation
                </li>
                <li style={{ marginLeft: "1rem" }}>
                  ERP implementation support
                </li>
                <li style={{ marginLeft: "1rem" }}>
                  SAP - SAP security, GRC implementation, forensics, controls
                  optimization, audit training, fraud analytics
                </li>
                <li style={{ marginLeft: "1rem" }}>
                  Oracle - security, GRC implementation, controls optimization
                </li>
              </ul>
            </CardBody>
          </Card>
          <Card bgColor="#CFECD7">
            <CardHeader>
              <Heading size="md">Cyber security and related reviews</Heading>
            </CardHeader>
            <CardBody>
              <ul
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  flexDirection: "column",
                }}
              >
                <li style={{ marginLeft: "1rem" }}>IS Audit</li>
                <li style={{ marginLeft: "1rem" }}>VAPT</li>
                <li style={{ marginLeft: "1rem" }}>Dark web scans</li>
                <li style={{ marginLeft: "1rem" }}>Digital Forensics</li>
              </ul>
            </CardBody>
          </Card>
          <Card bgColor="#CFECD7">
            <CardHeader>
              <Heading size="md">IT governance</Heading>
            </CardHeader>
            <CardBody>
              <ul
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  flexDirection: "column",
                }}
              >
                <li style={{ marginLeft: "1rem" }}>Overall cyber framework</li>
                <li style={{ marginLeft: "1rem" }}>BCP/DR</li>
                <li style={{ marginLeft: "1rem" }}>
                  IT Governance structure & policies
                </li>
                <li style={{ marginLeft: "1rem" }}>
                  Information Security Framework & Design
                </li>
                <li style={{ marginLeft: "1rem" }}>
                  Cloud Security Framework & Design
                </li>
                <li style={{ marginLeft: "1rem" }}>Zero Trust Framework</li>
              </ul>
            </CardBody>
          </Card>
        </SimpleGrid>
      </SimpleGrid>
    </div>
  );
}

export default Component3;
