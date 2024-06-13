import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Heading,
  Button,
} from "@chakra-ui/react";

function Component4() {
  return (
    <div id="comp4">
      <SimpleGrid spacing={4} templateColumns="2.5fr 1.5fr">
        <Card bgColor="#CFECD7">
          <CardBody
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://github.com/padmalochanm/images/blob/main/image%209.png?raw=true"
              style={{ maxWidth: "50%", height: "50%" }}
            />
            <img
              src="https://github.com/padmalochanm/images/blob/main/image%2010.png?raw=true"
              style={{ maxWidth: "50%", height: "50%" }}
            />
          </CardBody>
        </Card>
        <SimpleGrid spacing={4} templateColumns="1fr">
          <Card bgColor="#CFECD7">
            <CardHeader>
              <Heading size="md">Business process optimization</Heading>
            </CardHeader>
            <CardBody>
              <ul>
                <li style={{ marginLeft: "1rem" }}>
                  Business process improvement
                </li>
                <li style={{ marginLeft: "1rem" }}>
                  Working capital optimization
                </li>
                <li style={{ marginLeft: "1rem" }}>
                  Internal control framework maturity
                </li>
                <li style={{ marginLeft: "1rem" }}>
                  Cost improvement opportunities
                </li>
                <li style={{ marginLeft: "1rem" }}>
                  Financial assessment tools
                </li>
                <li style={{ marginLeft: "1rem" }}>
                  Standard operating procedures
                </li>
              </ul>
            </CardBody>
          </Card>
          <Card bgColor="#CFECD7">
            <CardHeader>
              <Heading size="md"> Compliance</Heading>
            </CardHeader>
            <CardBody>
              <ul>
                <li style={{ marginLeft: "1rem" }}>
                  Compliance strategy development
                </li>
                <li style={{ marginLeft: "1rem" }}>
                  Global compliance framework
                </li>
                <li style={{ marginLeft: "1rem" }}>
                  Data Privacy Regulations & other regulations
                </li>
                <li style={{ marginLeft: "1rem" }}>
                  Anti-Money Laundering Solutions
                </li>
              </ul>
            </CardBody>
          </Card>
          <Card bgColor="#CFECD7">
            <CardHeader>
              <Heading size="md">Governance</Heading>
            </CardHeader>
            <CardBody>
              <ul>
                <li style={{ marginLeft: "1rem" }}>
                  Enterprise risk management
                </li>
                <li style={{ marginLeft: "1rem" }}>Organization strategy</li>
                <li style={{ marginLeft: "1rem" }}>Organizational Structure</li>
                <li style={{ marginLeft: "1rem" }}>Manpower Optimization</li>
                <li style={{ marginLeft: "1rem" }}>Forensic</li>
                <li style={{ marginLeft: "1rem" }}>
                  Project Management Services
                </li>
                <li style={{ marginLeft: "1rem" }}>Sustainability & ESG</li>
              </ul>
            </CardBody>
          </Card>
          <Card bgColor="#CFECD7">
            <CardHeader>
              <Heading size="md">Project management</Heading>
            </CardHeader>
            <CardBody>
              <ul>
                <li style={{ marginLeft: "1rem" }}>
                  Comprehensive PM team for IT projects
                </li>
              </ul>
            </CardBody>
          </Card>
        </SimpleGrid>
      </SimpleGrid>
    </div>
  );
}

export default Component4;
