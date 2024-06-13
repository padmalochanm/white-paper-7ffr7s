import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Heading,
  Button,
  Stack,
} from "@chakra-ui/react";

function Component5() {
  return (
    <div id="comp5">
      <Heading>Teams and partners</Heading>
      <br />
      <SimpleGrid spacing={4} templateColumns="1fr 1fr 1fr 1fr 1fr">
        <Card maxW="sm" bgColor="#CFECD7">
          <CardBody>
            <img
              src="https://github.com/padmalochanm/images/blob/main/tulsi%201.png?raw=true"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">
                Tulsi Khemeka, Risk & Advisory Forensic
              </Heading>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW="sm" bgColor="#CFECD7">
          <CardBody>
            <img
              src="https://github.com/padmalochanm/images/blob/main/venugopal%201.png?raw=true"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Venugopal S U, Information Technology</Heading>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW="sm" bgColor="#CFECD7">
          <CardBody>
            <img
              src="https://github.com/padmalochanm/images/blob/main/anand%201.png?raw=true"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Anand Jangid, Information Technology</Heading>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW="sm" bgColor="#CFECD7">
          <CardBody>
            <img
              src="https://github.com/padmalochanm/images/blob/main/joseph%201.png?raw=true"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">
                Joseph Silvanus, Banking, Sustainability
              </Heading>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW="sm" bgColor="#CFECD7">
          <CardBody>
            <img
              src="https://github.com/padmalochanm/images/blob/main/monita%201.png?raw=true"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Monita Singh, Compliance</Heading>
            </Stack>
          </CardBody>
        </Card>
      </SimpleGrid>
    </div>
  );
}

export default Component5;
