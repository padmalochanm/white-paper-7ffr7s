import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Image,
} from "@chakra-ui/react";

function HeroComponent() {
  return (
    <div>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        bgColor="#CFECD7"
      >
        <img
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src="https://raw.githubusercontent.com/padmalochanm/images/main/puzzle%201.png"
          alt="Caffe Latte"
        />

        <Stack
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardHeader>
            <Heading
              size="lg"
              style={{
                fontFamily: "Lucida Handwriting",
                color: "#0A2277",
                fontSize: "80px",
              }}
            >
              Beyond Bookkeeping
            </Heading>
          </CardHeader>
          <CardBody>
            <Heading
              size="md"
              style={{
                fontFamily: "Lucida Handwriting",
                color: "#153CC9",
                fontSize: "40px",
              }}
            >
              Creating change that matters
            </Heading>
          </CardBody>
          <CardFooter>
            <Heading py="2">
              Today its all about achieving growth & efficiency through
              innovating business models, processes, management
            </Heading>
          </CardFooter>
        </Stack>
      </Card>
      <br />
      <img
        src="https://raw.githubusercontent.com/padmalochanm/images/main/value%201.png"
        style={{ display: "block", margin: "0 auto" }}
      />
    </div>
  );
}

export default HeroComponent;
