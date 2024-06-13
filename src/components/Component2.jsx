import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Heading,
  Button,
} from "@chakra-ui/react";

function Component2() {
  return (
    <div id="comp2">
      <SimpleGrid spacing={4} templateColumns="2.5fr 1.5fr">
        <Card bgColor="#CFECD7">
          <CardHeader>
            <Heading style={{ size: "70px" }}> Our Speciality</Heading>
          </CardHeader>
          <CardBody>
            <p style={{ size: "55px" }}>
              Beyond Bookkeeping has been founded by a professional team with
              decades of experience in risk advisory, forensics, innovative
              technology, data analytics, process re-engineering, AI/ ML across
              large corporates, business houses and governments. Each team lead
              has its area of specialization, ensuring the best client service
              based on need and industry. Over the years, the team has gained
              global exposure by working with companies from various parts of
              the globe like the USA, UK, part of Europe, Africa, Middle East,
              Nepal, and India.
            </p>
          </CardBody>
        </Card>
        <SimpleGrid spacing={4} templateColumns="1fr">
          <Card bgColor="#CFECD7">
            <CardHeader>
              <Heading size="md">Speciality 1</Heading>
            </CardHeader>
            <CardBody>
              <p>
                Experience in various sectors including bank and related
                experiences across various industry
              </p>
            </CardBody>
          </Card>
          <Card bgColor="#CFECD7">
            <CardHeader>
              <Heading size="md">Speciality 2</Heading>
            </CardHeader>
            <CardBody>
              <p>150+ years of experience across the delivery team</p>
            </CardBody>
          </Card>
          <Card bgColor="#CFECD7">
            <CardHeader>
              <Heading size="md">Speciality 3</Heading>
            </CardHeader>
            <CardBody>
              <p>
                Technical Knowledge of emerging technology and research trends
                and partnership with various technology partners
              </p>
            </CardBody>
          </Card>
        </SimpleGrid>
      </SimpleGrid>
    </div>
  );
}

export default Component2;
