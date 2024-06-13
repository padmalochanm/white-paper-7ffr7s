import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Heading,
  Button,
} from "@chakra-ui/react";

function Footer() {
  return (
    <Card style={{ marginLeft: "1rem" }} bgColor="#CFECD7" id="footer">
      <CardHeader>
        <Heading>Contact Us:</Heading>
      </CardHeader>
      <CardBody>
        <ul>
          <li>
            Tulsi Khemka Principal Consultant Beyond Bookkeeping India | Nepal
          </li>
          <li>Email: tulsi@beyondbookkeeping.com</li>
          <li>https://www.linkedin.com/in/tulsi-khemka-73a6a4b</li>
        </ul>
      </CardBody>
    </Card>
  );
}

export default Footer;
